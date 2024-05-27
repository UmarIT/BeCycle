import {TICK} from '@assets/icons';
import CustomText from '@components/CustomText';
import Input from '@components/Input';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface RegistrationStep2Props {
  formik: any;
}
const RegistrationStep2 = ({formik}: RegistrationStep2Props) => {
  return (
    <View>
      <CustomText size={18} style={{...GST.WEIGHT700}} color={COLORS.WHITE}>
        Create password
      </CustomText>
      <CustomText size={14} style={{...GST.WEIGHT400}} color={COLORS.WHITE}>
        Create a strong password that includes all the following criteria below.
      </CustomText>

      <Input
        password
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        placeholderTextColor={COLORS.PLACEHOLDER}
        placeholder="enter your password"
        containerStyle={{marginTop: RF(30)}}
        title="Password"
      />

      {confirms(formik.values.password, `must not contain your email`)}
      {confirms(formik.values.password, `have at least 8 characters`)}

      {confirms(
        formik.values.password,
        `have at least 2 of the following\n+ 1 letter (case sensitive) \n+ 1 number\n+ 1 special character (i.e.! @# $ % ^ &)`,
      )}
    </View>
  );
};
const confirms = (active?: any, text?: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: RF(10),
        //   width: RF(170),
      }}>
      <View
        style={{
          backgroundColor: active ? COLORS.LIGHTGREEN : COLORS.GRAY,
          height: RF(18),
          width: RF(18),
          borderRadius: RF(10),
          marginHorizontal: RF(5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={TICK}
          style={{height: RF(10), width: RF(10)}}
          resizeMode="contain"
        />
      </View>
      <CustomText style={{paddingTop: RF(3)}} size={10} color={COLORS.WHITE}>
        {text}
      </CustomText>
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

export default RegistrationStep2;
