import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { COLORS } from '@theme/colors';
import { RF } from '@theme/responsive';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
interface NoSupportPlanProps{
    onPress:()=>void;
}
const NoSupportPlan = ({onPress}:NoSupportPlanProps) => {
    return (
        <View style={styles.main}>
        <CustomText center>You don't have any support plans.</CustomText>
        <View style={styles.inner}>
        <CustomButton size={10} bgColor={COLORS.LIGHTGREEN} color={COLORS.BLACK} height={45} text='+ Create plans' onPress={onPress} />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  main:{paddingTop:RF(20)},
  inner:{width:120, alignSelf:"center"}
});

export default NoSupportPlan;
