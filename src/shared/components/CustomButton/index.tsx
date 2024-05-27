import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {SIZING} from '@theme/sizing';
import React from 'react';
import {StyleSheet, Pressable, ViewStyle, TextStyle} from 'react-native';

interface CustomButtonProps {
  color?: string;
  bgColor?: string;
  text: string;
  icon?: any;
  onPress?: () => void;
  size?: any;
  height?: any;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton = ({
  color,
  size,
  style,
  bgColor,
  height,
  text,
  icon,
  onPress,
  textStyle,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          ...SIZING.w100,
          height: height || RF(45),
          backgroundColor: bgColor || COLORS.WHITE,
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: RF(25),
          marginVertical: RF(5),
borderWidth:RF(1),
borderColor:COLORS.darkBlue
        },
        style && style,
      ]}>
      {icon && icon}
      <CustomText
        style={[styles.textStyles, textStyle && textStyle]}
        size={size || 14}
        color={color || COLORS.darkBlue}>
        {text}
      </CustomText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  textStyles: {...GST.WEIGHT600},
});

export default CustomButton;
