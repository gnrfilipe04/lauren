import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, PixelRatio } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ProductsContext } from '../context/ProductsContext';
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

    const [menuItemList, setMenuItemList] = useState<MenuItemListProps []>([])
    const { getProductsFilteredCategorie } = useContext(ProductsContext)

    function getMenus(){
        axios({
            method: 'GET',
            url: 'http://10.0.0.106:3333/menus'
        })
        .then(response => setMenuItemList(response.data))
        .catch(e => console.log(e))
    }

    function handleActiveItem(id: number, titleMenu: string){
        let newItemsList = menuItemList.map(item => {
            return item.id === id ? {
                ...item,
                active: true
            } : {...item, 
                active: false
            }
        })
        
        getProductsFilteredCategorie(titleMenu)
        setMenuItemList(newItemsList)
    }

    useEffect(() => {
        getMenus()
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={[styles.menuContainer, {width: widthPercentageToDP('100%')}]} >
                {menuItemList.map(item => (
                    <MenuItem 
                        key={item.id}
                        name={item.title}
                        onPress={() => handleActiveItem(item.id, item.title)}
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