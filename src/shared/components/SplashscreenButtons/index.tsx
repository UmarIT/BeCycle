import CustomButton from '@components/CustomButton';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import {SIZING} from '@theme/sizing';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LOGINICON} from '@assets/icons';

interface SplashscreenButtonCompProps {
  register: () => void;
  login: () => void;
}

const SplashscreenButtonComp = ({
  register,
  login,
}: SplashscreenButtonCompProps) => {
  const insets = useSafeAreaInsets();

  const LOGINICO = (
    <Image resizeMode="contain" source={LOGINICON} style={styles.image1} />
  );
  return (
    <View
      style={[
        styles.innerView,
        {bottom: insets.bottom ? insets.bottom : RF(20)},
      ]}>
      <CustomButton
        onPress={login}
        bgColor={COLORS.LIGHTGREEN}
        color={COLORS.BLACK}
        text="Login    "
        icon={LOGINICO}
      />
      <CustomButton
        onPress={register}
        bgColor={COLORS.BLUE}
        color={COLORS.BLACK}
        text="Register"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  innerView: {
    position: 'absolute',
    ...SIZING.w100,
    alignSelf: 'center',
    paddingHorizontal: RF(15),
  },
  image1: {height: RF(15), width: RF(30)},
});

export default SplashscreenButtonComp;
