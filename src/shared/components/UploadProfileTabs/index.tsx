import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { RF } from '@theme/responsive'
import CustomText from '@components/CustomText'
import { COLORS } from '@theme/colors'
import { UPLOADSTABS } from '@utils/enums'
import { SIZING } from '@theme/sizing'

export default function UploadProfileTabs({tab,setTab}:any) {
  return (
    <View
    style={styles.container}>
      <Pressable onPress={()=>{
        setTab(UPLOADSTABS.upload)
      }} style={[styles.main,tab == UPLOADSTABS.upload&&styles.border]}>
          <CustomText>Uploads</CustomText>
      </Pressable>
      <Pressable onPress={()=>{
        setTab(UPLOADSTABS.clashes)
      }} style={[styles.main,tab == UPLOADSTABS.clashes&&styles.border]}>
          <CustomText>Clashes</CustomText>
      </Pressable>
      <Pressable onPress={()=>{
        setTab(UPLOADSTABS.support)
      }} style={[styles.main,tab == UPLOADSTABS.support&&styles.border]}>
          <CustomText>Support</CustomText>
      </Pressable>
      <Pressable onPress={()=>{
        setTab(UPLOADSTABS.favorites)
      }} style={[styles.main,tab == UPLOADSTABS.favorites&&styles.border]}>
          <CustomText>Favorites</CustomText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    ...SIZING.w100,
    borderTopWidth:RF(1),
    borderBottomWidth:RF(1),
    borderColor:COLORS.DARKGRAY,
    flexDirection:'row',
    backgroundColor:COLORS.BLACK
  },
    main:{paddingVertical:RF(12), width:"25%", alignItems:"center", justifyContent:"center"},
    border:{borderBottomWidth:RF(2), borderBottomColor:COLORS.GRAY}
})