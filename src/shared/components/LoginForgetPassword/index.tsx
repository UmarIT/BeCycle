import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React  from 'react';
import {View , StyleSheet, Pressable} from 'react-native';
interface LoginForgetPasswordProps {
  onPress: () => void;
}

const LoginForgetPassword = ({onPress}: LoginForgetPasswordProps) => {
  return (
    <View style={{paddingTop: RF(30)}}>
      <Pressable onPress={onPress} style={{}}>
        <CustomText
          color={COLORS.LIGHTGREEN}
          style={{
            ...GST.WEIGHT700,
          }}
          size={16}>
          Forgot password
        </CustomText>
        <CustomText
          center
          color={COLORS.LIGHTGREEN}
          style={[
            styles.forget,
            {
              ...GST.WEIGHT900,
            },
          ]}
          size={16}>
          {''}.........................
        </CustomText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  forget: {position: 'absolute', bottom: -15},
});

export default LoginForgetPassword;
