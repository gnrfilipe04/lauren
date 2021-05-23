import React, { useEffect, useRef } from 'react'
import { Text, StyleSheet, Image, View, Animated } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { ProductProps } from '../context/ProductsContext'
import modelo from '../assets/modelo.png'
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
 
import colors from '../styles/colors'

interface DetailProductProps {
    route: {
        params: {
           productId: string,
           productName: string,
           productPhoto: string, 
        }
    }
}

export function DetailProduct({route}: DetailProductProps){
    const { productId, productName, productPhoto } = route.params
    const opacity = useRef(new Animated.Value(0)).current;
    const safeInsets = useSafeAreaInsets();

    useEffect(() => {
        Animated.timing(opacity, {
          toValue: 1,
          duration: 250,
          delay: 500,
          useNativeDriver: true,
        }).start();
      }, []);

    return(
        <>
            <SharedElement id={String(productId)} style={{flex: 1}}>
                <View style={{ 
                    position: 'absolute',
                    top: safeInsets.top,
                    bottom: safeInsets.top,
                    left: safeInsets.left,
                    right: safeInsets.right,
                    }}>
                    <Image source={modelo} style={{height: 600, width: '100%'}}/>
                </View>
            </SharedElement>
        </>
        
    )
}