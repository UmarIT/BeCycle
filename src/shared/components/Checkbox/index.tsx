import {
  ImageStyle,
  Pressable,
  StyleSheet,
  TextStyle,
  View,
  Image,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {RF} from '@theme/responsive';
import {CHECK} from '@assets/images';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
import FastImage from 'react-native-fast-image';
interface Props {
  title?: string;
  onPress?: () => void;
  isChecked?: boolean;
  textColor?: string;
  textSize?: number;
  textStyle?: TextStyle;
  numberOfLines?: number;
  iconStyle?: ImageStyle;
  boxStyle?: ViewStyle;
  icon?: string;
}
const CheckBox = (props: Props) => {
  const {
    title,
    onPress,
    isChecked,
    textColor,
    textStyle,
    numberOfLines,
    textSize,
    iconStyle,
    icon,
    boxStyle,
  } = props;
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={[styles.mainView, boxStyle && boxStyle]}>
        {isChecked && (
          <Image
            source={icon ?? CHECK}
            style={[styles.img, iconStyle && iconStyle]}
          />
        )}
      </Pressable>
      {title && (
        <CustomText
          color={textColor ?? COLORS.VERYLIGHTGRAY}
          numberOfLines={numberOfLines ?? 1}
          size={textSize ?? 14}
          style={[styles.titleTxt, textStyle && textStyle]}>
          {title ?? 'title'}
        </CustomText>
      )}
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
    fontWeight: '600',
  },
  mainView: {
    borderRadius: RF(20),
    height: RF(20),
    width: RF(27),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: RF(1),
  },
  img: {height: RF(12), width: RF(12)},
  titleTxt: {
    marginLeft: RF(10),
  },
});
