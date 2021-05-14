import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import profile from '../assets/perfil.png'
import colors from '../styles/colors';

export function Header(){
    return(
        <View style={styles.headerContainer}>
            <Image source={profile} style={styles.profile}/>
            <Entypo name='shopping-cart' size={30} color={colors.gray500}/>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 40,
    }
  });