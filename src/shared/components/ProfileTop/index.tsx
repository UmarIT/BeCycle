import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';

const ProfileTop = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: RF(10),
      }}>
      <View style={{paddingVertical: RF(10)}}>
        <CustomText size={18} style={{...GST.WEIGHT700}}>
          Caetano Veloso
        </CustomText>
        <View style={{flexDirection: 'row', paddingVertical: RF(5)}}>
          <CustomText>@caetanoveloso</CustomText>
          <Pressable
            style={{
              width: RF(55),
              marginHorizontal: RF(6),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: RF(3),
              height: RF(15),
              backgroundColor: COLORS.DARKGRAY,
            }}>
            <CustomText color={COLORS.VERYLIGHTGRAY} size={9}>
              follows you
            </CustomText>
          </Pressable>
        </View>
      </View>

      <View style={{width: '30%'}}>
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
});

export default ProfileTop;
