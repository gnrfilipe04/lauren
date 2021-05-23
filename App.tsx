import React from 'react';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper'
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Routes }  from './src/routes/routes';
import { ProductsProvider } from './src/context/ProductsContext';


export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, 
    Lato_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider
      settings={{
        icon: props => <Ionicons {...props}/>
      }}
    >
      <ProductsProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ProductsProvider>
    </PaperProvider>
  );
}


