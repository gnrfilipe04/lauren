import React from 'react';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'
import AppLoading from 'expo-app-loading';

import { Routes }  from './src/routes/routes';


export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, 
    Lato_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Routes />
  );
}


