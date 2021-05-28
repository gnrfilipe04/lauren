import React from 'react'
import { Text, View, StyleSheet, PressableProps, Pressable, Image } from 'react-native'
import { redA700 } from 'react-native-paper/lib/typescript/styles/colors'
import modelo from '../assets/modelo.png'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export interface ProductCardProps extends PressableProps{
    id?: number;
    productName: string;
    productValue: string;
    categorie?: string;
    photo?: string;
    widthValue?: number;
    heightValue?: number;
    
}

export function ProductCard({ heightValue, widthValue, id, productName, productValue, ...props }: ProductCardProps){
    return(
        <Pressable
            {...props}
        >   
            <Image source={modelo} resizeMode='stretch' style={[ styles.container, { width: widthValue, height: heightValue}]}/>
            <View style={[styles.productNameContainer, { width: widthValue}]}>
                <Text style={styles.productName}>{productName}</Text>  
                <Text style={styles.productPrice}>{productValue}</Text>  
            </View>  
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 30,
        backgroundColor: colors.gray400,
        
    },
    productNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    productName: {
        fontFamily: fonts.latoBold,
        fontSize: 18,
        maxWidth: 130
    },
    productPrice: {
        fontFamily: fonts.latoBold,
        color: colors.gray400
    }
})