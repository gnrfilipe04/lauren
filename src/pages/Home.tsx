import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';


export function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Header />
            <View>
                <Menu />
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
  });