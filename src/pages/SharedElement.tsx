import React from 'react'
import { Image, View, StyleSheet, useWindowDimensions } from 'react-native'
import modelo from '../assets/modelo.png'
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';

const SPACING = 15;
const POST_GUTTER_WIDTH = 2;

export const data = [
    {
      id: '1',
      title: 'Manarola, Italy',
      description: 'The Cliffs of Cinque Terre',
      image_url:
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
      iconName: 'location-pin'
    },
    {
      id: '2',
      title: 'Venezia, Italy',
      description: 'Rialto Bridge, Venezia, Italy',
      image_url:
        'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80',
      iconName: 'location-pin'
    },
    {
      id: '3',
      title: 'Prague, Czechia',
      description: 'Tram in Prague',
      image_url:
        'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      iconName: 'location-pin'
    }
];
  

export function SharedElement(){

    const safeInsets = useSafeAreaInsets();

    return (
        <View style={{flex: 1}}>
        <View style={{
            position: 'absolute',
            top: safeInsets.top,
            bottom: safeInsets.top,
            left: safeInsets.left,
            right: safeInsets.right,
            }}>
            <Image source={modelo} style={{height: 600, width: '100%'}}/>
        </View>
        </View>
    )
}