import CustomText from '@components/CustomText';
import Input from '@components/Input';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {View, StyleSheet} from 'react-native';

interface RegistrationStep1Props {
  formik: any;
}

const RegistrationStep1 = ({formik}: RegistrationStep1Props) => {
  return (
    <View>
      <CustomText size={18} style={{...GST.WEIGHT700}} color={COLORS.WHITE}>
        Enter your email
      </CustomText>

      <Input
        borderColor={formik.errors.email ? COLORS.RED : null}
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        placeholderTextColor={COLORS.PLACEHOLDER}
        placeholder="dave@gmail.com"
        containerStyle={{marginTop: RF(30)}}
        title="Email"
      />
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

export default RegistrationStep1;
