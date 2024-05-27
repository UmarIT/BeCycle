import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SettingItem = ({title, text}: any) => {
  return (
    <View style={styles.main}>
      <View style={styles.inner}>
        <CustomText size={20}>{title}</CustomText>
      </View>
      <View style={styles.innerView}>
        <CustomText color={COLORS.VERYLIGHTGRAY} size={14}>
          {text}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  main: {paddingTop: RF(20)},
  inner: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerView: {width: '80%', paddingTop: RF(5)},
  image: {height: RF(15), width: RF(15)},
});

export default SettingItem;
