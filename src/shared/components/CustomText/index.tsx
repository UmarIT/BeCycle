import {COLORS} from '@theme/colors';
// import {FONTS} from '@theme/fonts';
import {RF} from '@theme/responsive';
import React from 'react';
import {Text, TextProps, View} from 'react-native';
interface CustomTextProps extends TextProps {
  center: boolean;
  bold: boolean;
  size: number;
  capital: boolean;
  color: any;
  onPress: () => void;
  contain: boolean;
  nestedTxt: string;
  nestedTxtFamily: string;
  nestedTxtSize: number;
  nestedTxtColor: string;
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  onNestedTxtPress: () => void;
  translation?: any;
  fontFamily?: any;
}
const CustomText = (props: Partial<CustomTextProps>) => {
  const {
    center,
    size = 12,
    color = COLORS.WHITE,
    style,
    numberOfLines = 0,
    capital = false,
    onPress,
    contain,
    bold,
    nestedTxt,
    // nestedTxtFamily = REGULAR,
    nestedTxtSize = 12,
    nestedTxtColor = COLORS.BLACK,
    onNestedTxtPress,
    translation,
    fontFamily,
    fontWeight,
  } = props;
  return (
    <View
      style={
        contain && {
          flex: 1,
        }
      }>
      <Text
        onPress={onPress}
        numberOfLines={numberOfLines}
        style={[
          {
            // fontFamily: fontFamily ? fontFamily : bold ? BOLD : REGULAR,
            fontSize: RF(size),
            color,
            textTransform: capital ? 'uppercase' : 'none',
            textAlign: center ? 'center' : 'auto',
          },
          style,
        ]}>
        {translation && translation[translation]}
        {props.children}
        {nestedTxt && (
          <Text
            style={{
              //   fontFamily: nestedTxtFamily,
              fontSize: RF(nestedTxtSize),
              color: nestedTxtColor,
            }}
            onPress={onNestedTxtPress}>
            {nestedTxt}
          </Text>
        )}
      </Text>
    </View>
  );
};

export default CustomText;
