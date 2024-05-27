import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RF } from '@theme/responsive'
import CustomText from '@components/CustomText';

export default function RenderItem({item}:any) {
  const {image, name} = item;
  return (
    <View style={{width:RF(100), height:RF(130), justifyContent:'center' }}>
     <Image
     source={image}
     style={{alignSelf:"center",height:RF(60), width:RF(60), borderRadius:RF(90)}}

     />
     <View style={{paddingTop:RF(6)}}>
     <CustomText size={16} center>{name}</CustomText>
     </View>
     
    </View>
  )
}

const styles = StyleSheet.create({})