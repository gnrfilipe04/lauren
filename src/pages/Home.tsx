import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { SectionsProducts } from '../components/SectionsProducts';
import { RecommendedProducts } from '../components/RecommendedProducts';
import { ScrollView } from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';

import colors from '../styles/colors';


export function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Menu />
                <SectionsProducts />
                <RecommendedProducts />
            </ScrollView>
            <View style={{alignItems: 'center'}}>
                <FAB
                    style={styles.searchIcon}
                    small={false}
                    icon='search'
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    searchIcon: {
        position: 'absolute',
        margin: 16,
        bottom: 0,
        backgroundColor: colors.gray500,
        paddingHorizontal: 20
    }
  });