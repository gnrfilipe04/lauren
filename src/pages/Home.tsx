import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { SectionsProducts } from '../components/SectionsProducts';
import { RecommendedProducts } from '../components/RecommendedProducts';
import { ScrollView } from 'react-native-gesture-handler';


export function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Menu />
                <SectionsProducts />
                <RecommendedProducts />
            </ScrollView>

            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });