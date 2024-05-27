import React from 'react'
import {PERSON} from '@assets/images';
import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import {View, Text, StyleSheet, Image} from 'react-native';
export default function RenderItem() {
  return (
    <View style={{flexDirection: 'row', marginBottom:RF(10)}}>
    <Image
      source={PERSON}
      style={{height: RF(170), width: '35%', borderRadius: RF(6)}}
    />
    <View
      style={{
        height: RF(170),
        width: '60%',
        backgroundColor: COLORS.BLACK,
        paddingLeft: RF(10),
        //   justifyContent:"center"
      }}>
      <View style={{paddingTop: RF(5)}}>
        <CustomText size={18}>Sozinha</CustomText>
        <CustomText size={13}>Caetano Veloso</CustomText>
      </View>

      <View style={{paddingTop: RF(6)}}>
        <CustomText size={12}>
          Às vezes no silêncio da noite. Eu fico imaginando nós dois. Eu fico
          ali sonhando acordado. Juntando o antes, o agora e o depois.
        </CustomText>
      </View>
      <View style={{paddingTop: RF(15)}}>
        <CustomText>November 23, 2023 • 11:25pm</CustomText>
      </View>

      <View style={{paddingTop: RF(15)}}>
        <CustomText>108,7K votes</CustomText>
      </View>
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50',
    },
  });
  