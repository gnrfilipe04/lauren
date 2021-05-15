import React from 'react'
import { Dimensions, PixelRatio, Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { ProductCard } from './ProductCard'

import fonts from '../styles/fonts'

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

export function RecommendedProducts(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Recommended for you</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: 10}}>

                <ProductCard 
                    widthValue={widthPercentageToDP('40%')}
                    heightValue={heightPercentageToDP('26%')}
                    productName=''
                    productValue=''
                />

                <ProductCard 
                    widthValue={widthPercentageToDP('40%')}
                    heightValue={heightPercentageToDP('26%')}
                    productName=''
                    productValue=''
                />

                <ProductCard 
                    widthValue={widthPercentageToDP('40%')}
                    heightValue={heightPercentageToDP('26%')}
                    productName=''
                    productValue=''
                />

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        marginTop: 20,
    },
    title: {
        fontFamily: fonts.latoBold,
        fontSize: 22,
    }
})