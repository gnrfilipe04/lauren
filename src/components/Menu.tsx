import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, PixelRatio } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { MenuItem } from './MenuItem';

interface MenuItemListProps {
    id: number;
    title: string;
    active: boolean;
}

export function Menu(){
    

    //@ts-ignore
    const widthPercentageToDP = widthPercent => {
        const screenWidth = Dimensions.get('window').width;
        return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
      };
    //@ts-ignore
    const heightPercentageToDP = heightPercent => {
        const screenHeight = Dimensions.get('window').height;
        return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
    };

    const [menuItemList, setMenuItemList] = useState<MenuItemListProps []>([
        {   
            id: 1,
            title: 'Coats',
            active: true,

        },
        {   
            id: 2,
            title: 'Dresses',
            active: false,
        },
        {   
            id: 3,
            title: 'Jersey',
            active: false,
        },
        {   
            id: 4,
            title: 'Pants',
            active: false,
        },
        {   
            id: 5,
            title: 'Shirt',
            active: false,
        },
        {   
            id: 6,
            title: 'Boots',
            active: false,
        },
    ])

    function handleActiveItem(id: number){
        let newItemsList = menuItemList.map(item => {
            return item.id === id ? {
                ...item,
                active: true
            } : {...item, 
                active: false
            }
        })
        setMenuItemList(newItemsList)
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={[styles.menuContainer, {width: widthPercentageToDP('100%')}]} >
                {menuItemList.map(item => (
                    <MenuItem 
                        key={item.id}
                        name={item.title}
                        onPress={() => handleActiveItem(item.id)}
                        isActiveColor={item.active ? colors.pink100 : '#fff'}
                        fontFamily={item.active ? fonts.latoBold : fonts.latoRegular}
                    />
                ))}
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 150,
    },
  });