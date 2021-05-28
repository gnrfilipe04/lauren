import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { DetailProduct } from '../pages/DetailProduct';


const Stack = createStackNavigator()  

export function Routes(){
    return (

        <Stack.Navigator initialRouteName='Home' headerMode='none'>
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='DetailProduct'
                component={DetailProduct}
            />
            
        </Stack.Navigator>
    )
}

