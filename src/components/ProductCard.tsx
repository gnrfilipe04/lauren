import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export interface ProductCardProps {
    id: number;
    productName: string;
    productValue: string;
    categorie: string;
    widthValue?: number;
    heightValue?: number;
    
}

export function ProductCard({ heightValue, widthValue, productName, productValue }: ProductCardProps){
    return(
        <View>
            <View style={[ styles.container, { width: widthValue, height: heightValue}]}/>
            <View style={[styles.productNameContainer, { width: widthValue}]}>
                <Text style={styles.productName}>{productName}</Text>  
                <Text style={styles.productPrice}>{productValue}</Text>  
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 30,
        borderRadius: 10,
        backgroundColor: colors.gray400
    },
    productNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    productName: {
        fontFamily: fonts.latoBold,
        fontSize: 18
    },
    productPrice: {
        fontFamily: fonts.latoBold,
        color: colors.gray400
    }
})