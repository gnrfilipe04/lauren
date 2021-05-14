import React from 'react'
import { Text, View } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ProductCardProps {
    widthValue: number;
    heightValue: number;
    productName: string;
    productValue: string;
    
}

export function ProductCard({ heightValue, widthValue, productName, productValue }: ProductCardProps){
    return(
        <View>
            <View style={{ width: widthValue, height: heightValue, marginRight: 30, borderRadius: 10, backgroundColor: colors.gray400}}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: widthValue, marginTop: 10}}>
                <Text style={{fontFamily: fonts.latoBold, fontSize: 18}}>{productName}</Text>  
                <Text style={{fontFamily: fonts.latoBold, color: colors.gray400}}>{productValue}</Text>  
            </View>  
        </View>
    )
}
