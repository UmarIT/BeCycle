import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
// import OTPTextView from 'react-native-otp-textinput';
interface RegistrationStep3Props {
  formik: any;
}
const RegistrationStep3 = ({formik}: RegistrationStep3Props) => {
  return (
    <View>
      <CustomText size={18} style={{...GST.WEIGHT700}} color={COLORS.WHITE}>
        Verification
      </CustomText>
      <View style={{paddingTop: RF(10)}}>
        <CustomText size={14} style={{...GST.WEIGHT400}} color={COLORS.WHITE}>
          For your security, please enter the code that we have sent to{' '}
          <Text style={{color: COLORS.LIGHTGREEN}}>{formik.values.email}</Text>.
        </CustomText>
      </View>

      <View style={{paddingTop: RF(30)}}>
        <CustomText
          size={12}
          style={{...GST.WEIGHT400}}
          color={COLORS.LIGHTGREEN}>
          Verification Code
        </CustomText>
      </View>
      <CustomText
        size={12}
        style={{...GST.WEIGHT400}}
        color={COLORS.LIGHTGREEN}></CustomText>
      <View style={{paddingTop: RF(30)}}>
        <Pressable style={{}}>
          <CustomText
            color={COLORS.LIGHTGREEN}
            style={{
              ...GST.WEIGHT700,
            }}
            size={12}>
            Resend code
          </CustomText>
          <CustomText
            center
            color={COLORS.LIGHTGREEN}
            style={{
              ...GST.WEIGHT900,
              position: 'absolute',
              bottom: -15,
            }}
            size={16}>
            {''}..............
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {color: COLORS.WHITE, borderBottomWidth: 0.8},

  textInputContainer: {
    marginBottom: 20,
    color: 'white',
  },
});

export default RegistrationStep3;
