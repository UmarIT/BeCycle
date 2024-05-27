import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
import {COLORS} from '@theme/colors';
interface ClashTextProps {
  size?: any;
  textOne: String;
  textTwo: String;
}

export default function ClashText({size, textOne, textTwo}: ClashTextProps) {
  return (
    <View style={{flexDirection: 'row'}}>
      <CustomText
        style={styles.username}
        size={size || 12}
        color={COLORS.LIGHTGREEN}>
        {textOne}
      </CustomText>
      <CustomText size={size || 12} style={styles.username}>v</CustomText>
      <CustomText size={size || 12} style={styles.username} color={COLORS.BLUE}>
        {textTwo}
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  username: {...GST.WEIGHT700},
});
