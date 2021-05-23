import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Home } from '../pages/Home';
import { DetailProduct } from '../pages/DetailProduct';
import { SharedElement } from '../pages/SharedElement';

//const Stack = createStackNavigator()

const stackNavigator = createSharedElementStackNavigator();
  
//const AppContainer = createAppContainer(stackNavigator);
  

export function Routes(){
    return (

        <stackNavigator.Navigator initialRouteName='Home' mode='modal' screenOptions={{headerShown: false}}>
            <stackNavigator.Screen
                name='Home'
                component={Home}
            />
            <stackNavigator.Screen
                name='DetailProduct'
                component={DetailProduct}
                sharedElements={(route) => {
                    return [route.params.productId]
                }}
            />
            
        </stackNavigator.Navigator>
    )
}

