import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Dimensions, PixelRatio } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ProductCard } from './ProductCard'
import {ProductCardProps} from './ProductCard'

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
    const [allProductsCard, setAllProductsCard] = useState<ProductCardProps []>([])

    useEffect(() => {
        axios({
            method: 'get',
            url:'http://10.0.0.106:3333/products',
        })
            .then(response => setAllProductsCard(response.data))
            .catch(e => console.log(e))
    }, [])

    function filteredCategorieProduct(categorie: string = 'coats'){
        setAllProductsCard(allProductsCard.filter(product =>  product.categorie === categorie))
    }

    return(
        <ScrollView style={{marginTop: 30, paddingLeft: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>

            {allProductsCard.map(product => (
                <ProductCard 
                    key={product.id}
                    id={product.id}
                    productName={product.productName}
                    productValue={product.productValue}
                    categorie={product.categorie}
                    widthValue={widthPercentageToDP('52%')}
                    heightValue={heightPercentageToDP('32%')}
                />
            ))}

        </ScrollView>
    )
}