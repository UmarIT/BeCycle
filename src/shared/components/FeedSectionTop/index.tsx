import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '@components/CustomText'
import { RF } from '@theme/responsive'
import { GST } from '@theme/globalStyles'

export default function FeedSectionTop({title ,onIconPress}:any) {

  return (
    <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal:RF(10)
    }}>
    <CustomText style={styles.title} size={18}>{title}</CustomText>
    <Pressable onPress={onIconPress}>
    </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
    next:{width: RF(15), height: RF(15)},
    title:{
        ...GST.WEIGHT700
    }

})