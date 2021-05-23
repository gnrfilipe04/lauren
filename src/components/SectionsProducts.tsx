import React, { useContext } from 'react'
import { Dimensions, Image, PixelRatio, Pressable, ScrollView, Text } from 'react-native'
import { ProductCard } from './ProductCard'
import { ProductsContext } from '../context/ProductsContext'
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element'


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
    const { productsFilteredCategorie } = useContext(ProductsContext)
    const navigation = useNavigation()

    return( 
        <ScrollView 
            onMagicTap={() => scrollTo()}
            style={{marginTop: 30, paddingLeft: 20}} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}>

            {productsFilteredCategorie.map(product => (
                <SharedElement key={product.id} id={String(product.id)}>
                    <ProductCard 
                        id={product.id}
                        productName={product.productName}
                        productValue={product.productValue}
                        categorie={product.categorie}
                        widthValue={widthPercentageToDP('60%')}
                        heightValue={heightPercentageToDP('60%')}
                        onPress={() => navigation.navigate('DetailProduct', {
                            productId: String(product.id),
                            productName: product.productName,
                            productPhoto: product.photo
                        })}/>
                        
                </SharedElement>
            ))}

        </ScrollView>
    )
}