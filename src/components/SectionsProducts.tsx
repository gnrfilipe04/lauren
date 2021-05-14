import React from 'react'
import { Dimensions, PixelRatio } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ProductCard } from './ProductCard'

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

export function SectionsProducts(){
    return(
        <ScrollView style={{marginTop: 30, paddingLeft: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>

            <ProductCard 
                widthValue={widthPercentageToDP('52%')}
                heightValue={heightPercentageToDP('32%')}
                productName='Winter Coat'
                productValue='R$ 80,00'
            />

            <ProductCard 
                widthValue={widthPercentageToDP('52%')}
                heightValue={heightPercentageToDP('32%')}
                productName='Woolen Coat'
                productValue='R$ 80,00'
            />

            <ProductCard 
                widthValue={widthPercentageToDP('52%')}
                heightValue={heightPercentageToDP('32%')}
                productName='Oversize Coat'
                productValue='R$ 72,00'
            />

            <ProductCard 
                widthValue={widthPercentageToDP('52%')}
                heightValue={heightPercentageToDP('32%')}
                productName='Sizeheart Coat'
                productValue='R$ 34,50'
            />

            <ProductCard 
                widthValue={widthPercentageToDP('52%')}
                heightValue={heightPercentageToDP('32%')}
                productName='Bighow Coat'
                productValue='R$ 77,32'
            />

        </ScrollView>
    )
}