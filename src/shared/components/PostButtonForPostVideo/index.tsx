import {StyleSheet, Text, TextInputProps, View, ViewStyle} from 'react-native';
import React from 'react';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
interface dropDownProps extends TextInputProps {
  previewText?: string;
  buttonText?: string;
  onPress?: () => void;
}
const PostButtonForPostVideo = (props: dropDownProps) => {
  const {buttonText = '', previewText, onPress} = props;
  return (
    <View style={{paddingTop: RF(20), paddingBottom: RF(30)}}>
      <CustomText size={14} color={COLORS.WHITE} style={styles.txt2}>
        {previewText}
      </CustomText>
      <CustomButton
        size={15}
        height={RF(36)}
        bgColor={COLORS.LIGHTGREEN}
        color={COLORS.BLACK}
        text={buttonText}
        onPress={onPress}
      />
    </View>
  );
};

export default PostButtonForPostVideo;

const styles = StyleSheet.create({
  txt2: {
    fontWeight: GST.WEIGHT700.fontWeight,
    textAlign: 'center',
    marginBottom: RF(15),
  },
});
