import CustomButton from '@components/CustomButton';
import {COLORS} from '@theme/colors';
import {SIZING} from '@theme/sizing';
import React from 'react';
import {View, StyleSheet} from 'react-native';

interface LoginButtonProps {
  onPress: () => void;
}

const LoginButton = ({onPress}: LoginButtonProps) => {
  return (
    <View style={styles.outterButton}>
      <CustomButton
        bgColor={COLORS.LIGHTGREENDISABLE}
        text="Sign In"
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outterButton: {
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
    ...SIZING.w100,
  },
});

export default LoginButton;
