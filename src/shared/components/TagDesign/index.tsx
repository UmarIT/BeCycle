import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '@theme/colors'
import { RF } from '@theme/responsive'
import CustomText from '@components/CustomText';
interface TagProps{
    bgcolor?:any;
    size?:any;
    color?:any;
    text:String;
}

export default function Tag({bgcolor,size,color, text }:TagProps) {
  return (
    <View
    style={{
      backgroundColor:bgcolor|| COLORS.WHITE,
      paddingHorizontal: RF(2),
      paddingVertical: RF(2),
      borderRadius: RF(3),
      alignItems:"center",
      justifyContent:'center'
    }}>
    <CustomText size={size ||9} color={color||COLORS.BLACK}>
      {text}
    </CustomText>
  </View>
  )
}

const styles = StyleSheet.create({})