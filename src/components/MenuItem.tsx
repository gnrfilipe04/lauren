import React from 'react'
import { Text, View, StyleSheet, Pressable, PressableProps } from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface MenuItemProps extends PressableProps{
    id?: number;
    name: string,
    isActiveColor?: string;
    fontFamily?: string
}

export function MenuItem({name, isActiveColor, fontFamily = fonts.latoRegular, ...props}: MenuItemProps){

    return (
        <Pressable style={[styles.menuItemContainer, {backgroundColor: isActiveColor}]} {...props}>
            <Text style={[styles.menuItemText, { fontFamily: fontFamily}]}>
                {name}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    menuItemContainer: {
        borderRadius: 30
    },
    menuItemText: {
        fontSize: 16,
        padding: 10,
        paddingHorizontal: 20,
    }
});