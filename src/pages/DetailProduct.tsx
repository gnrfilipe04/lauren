import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Text, StyleSheet, Image, View, Button, PixelRatio, Dimensions, Pressable } from 'react-native'
import { ProductProps } from '../context/ProductsContext'
import modelo from '../assets/modelo.png'

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import colors from '../styles/colors'
import fonts from '../styles/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Menu } from '../components/Menu';
import { MenuItem } from '../components/MenuItem';
import { StatusBar } from 'expo-status-bar';

interface DetailProductProps {
    route: {
        params: {
           product: ProductProps;
        }
    }
}

export function DetailProduct({route}: DetailProductProps){
    const { product } = route.params

    //@ts-ignore
    const widthPercentageToDP = widthPercent => {
      const screenWidth = Dimensions.get('window').width;
      return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
    };
    //@ts-ignore
    const heightPercentageToDP = heightPercent => {
        const screenHeight = Dimensions.get('window').height;
        return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
    };

    const renderContent = () => (
      <>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          height: 600,
        }}
      >
      <View style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View style={{
          backgroundColor: '#CBD5E0',
          width: 60,
          height: 5,
          borderRadius: 10,
        }}/>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        
      <View style={{
        justifyContent: 'center', 
        alignItems: 'flex-start',
        marginTop: 20
        }}>

        <Text style={{
          fontFamily: fonts.latoBold,
          color: colors.gray500,
          fontSize: 26
        }}>{product.productName}</Text>

        <Text style={{
          fontFamily: fonts.latoRegular,
          color: colors.gray400,
          fontSize: 20
        }}>{product.productValue}</Text>

        <Text style={{
          fontFamily: fonts.latoBold,
          color: colors.gray500,
          fontSize: 18,
          marginTop: 20
        }}>Your size</Text>

        <View style={{flexDirection: 'row', marginTop: 10}}>

          <View style={{
            backgroundColor: colors.pink100,
            width: 40,
            height: 40,
            borderRadius: 4,
            marginRight: 5,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 4,
          }}>
            <Text style={{fontFamily: fonts.latoRegular, fontSize: 20, color: colors.gray500}}>S</Text>
          </View>

          <View style={{
            backgroundColor: "#FFF",
            width: 40,
            height: 40,
            borderRadius: 4,
            marginRight: 5,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 4,
          }}>
            <Text style={{fontFamily: fonts.latoRegular, fontSize: 20, color: colors.gray500}}>M</Text>
          </View>

          <View style={{
            backgroundColor: "#FFF",
            width: 40,
            height: 40,
            borderRadius: 4,
            marginRight: 5,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 4,
          }}>
            <Text style={{fontFamily: fonts.latoRegular, fontSize: 20, color: colors.gray500}}>G</Text>
          </View>

          <View style={{
            backgroundColor: "#FFF",
            width: 40,
            height: 40,
            borderRadius: 4,
            marginRight: 5,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 4,
          }}>
            <Text style={{fontFamily: fonts.latoRegular, fontSize: 20, color: colors.gray500}}>GG</Text>
          </View>
        </View>

      </View>

        <View style={{paddingTop: 30}}>

          <View style={{backgroundColor: colors.gray500, width: 18, height: 18, borderRadius: 40, marginBottom: 20}} />
          <View style={{backgroundColor: '#fdee61', width: 18, height: 18, borderRadius: 40, marginBottom: 20}} />
          <View style={{backgroundColor: colors.pink100, width: 18, height: 18, borderRadius: 40, marginBottom: 20}} />
          <View style={{backgroundColor: '#cda7f8', width: 18, height: 18, borderRadius: 40, marginBottom: 20}} />

          
        </View>

      </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, paddingHorizontal: 20}}>

            <MenuItem 
              name='Details'
              isActiveColor={colors.pink100}
              fontFamily={fonts.latoBold}
            />
            <MenuItem 
              name='Order'
            />
            <MenuItem 
              name='Payment'
            />
          </View>

          <View style={{flexDirection: 'row' ,justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 10}}>

            <View>
              <Text style={{
                fontFamily: fonts.latoRegular,
                color: '#000',
                fontSize: 16
              }}>Composition</Text>
              <Text style={{color: colors.gray400, fontFamily: fonts.latoBold, marginTop: 5}}>100% polyester</Text>
            </View>

            <View>
              <Text style={{
                fontFamily: fonts.latoRegular,
                color: '#000',
                fontSize: 16
              }}>Country</Text>
              <Text style={{color: colors.gray400, fontFamily: fonts.latoBold, marginTop: 5, textAlign: 'right'}}>Brazil</Text>
            </View>

          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontFamily: fonts.latoBold, fontSize: 16}}>Description</Text>
              <Text style={{marginTop: 10, fontFamily: fonts.latoRegular, color: colors.gray400}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur impedit vero inventore cumque quidem. 
                Vitae, qui quasi cum fuga exercitationem assumenda, 
                alias nemo provident veniam excepturi vel officia quisquam! Quas.
              </Text>
          </View>

      </View>
      </>
    );
  
    const sheetRef: any = React.useRef(null);
    
    return(
        <>
        <StatusBar style='light'/>
          <View style={{flex: 1}}>
              <View style={StyleSheet.absoluteFill}>
                  <Image source={modelo} style={{height: heightPercentageToDP('100%'), width: '100%'}}/>
              </View>
          </View>

          <BottomSheet
            ref={sheetRef}
            snapPoints={[270, 600]}
            borderRadius={40}
            renderContent={renderContent}
          />
          
          <View style={{
            zIndex: 999,
            position: 'absolute',
            bottom: 10,
            right: 15,
            left: 15,
            }}>
            <TouchableOpacity style={{
              backgroundColor: colors.gray500,
              borderRadius: 30,
              width: '100%'

            }}>

              <Text style={{
                fontFamily: fonts.latoRegular,
                color: '#FFF',
                fontSize: 18,
                paddingVertical: 15,
                paddingHorizontal: 30,
                textAlign: 'center'
              }}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          
        </>
        
    )
}


  
  