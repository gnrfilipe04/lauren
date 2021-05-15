import React from 'react';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'
import AppLoading from 'expo-app-loading';
import {Provider as PaperProvider} from 'react-native-paper'
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    <PaperProvider
      settings={{
        icon: props => <Ionicons {...props}/>
      }}
    >
      <Routes />
    </PaperProvider>
  );
}


