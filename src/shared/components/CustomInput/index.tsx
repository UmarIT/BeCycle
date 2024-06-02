import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import FastImage from 'react-native-fast-image';
import {CROSS} from '@assets/images';
interface CustomTextInputProps extends TextInputProps {
  placeholder?: string;
  placeholderTextColor?: string;
  onChangeText?: (text: string) => void;
  numberOfLines?: number;
  style?: any;
  multiline?: boolean;
  scrollEnabled?: boolean;
  crossIcon?: boolean;
  CustomInputRef?: any;
}

const CustomInput = ({
  placeholder,
  onChangeText,
  placeholderTextColor,
  numberOfLines = undefined,
  style,
  multiline = false,
  scrollEnabled = true,
  crossIcon,
  CustomInputRef,
  ...rest
}: CustomTextInputProps) => {
  const [text, setText] = useState<string>('');

  const handleTextChange = (newText: string) => {
    setText(newText);
    if (onChangeText) onChangeText(newText);
  };

  return (
    <View style={styles.inputView}>
      <TextInput
        ref={CustomInputRef}
        placeholder={placeholder ?? 'Enter text'}
        placeholderTextColor={placeholderTextColor ?? COLORS.PLACEHOLDER}
        value={text}
        scrollEnabled={scrollEnabled}
        onChangeText={handleTextChange}
        numberOfLines={numberOfLines}
        multiline={multiline}
        {...rest}
        style={[styles.inputStyles, style]}
      />
      {crossIcon && text.length > 0 && (
        <Pressable style={styles.crossIcon} onPress={() => setText('')}>
          <Image source={CROSS} style={styles.iconStyles} />
        </Pressable>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputStyles: {
    color: COLORS.WHITE,
    backgroundColor: COLORS.DARKGRAY,
    height: RF(30),
    paddingVertical: 0,
    borderRadius: RF(5),
    fontSize: RF(13),
    fontWeight: 'normal',
    paddingHorizontal: RF(10),
  },
  crossIcon: {
    position: 'absolute',
    right: RF(10),
    borderRadius: RF(10),
    padding: RF(3),
    backgroundColor: COLORS.VERYLIGHTGRAY,
  },
  iconStyles: {width: RF(10), height: RF(10)},
  inputView: {width: '100%', justifyContent: 'center'},
});
