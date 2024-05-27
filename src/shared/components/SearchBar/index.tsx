import {CLOSE} from '@assets/icons';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import {SIZING} from '@theme/sizing';
import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TextStyle,
  TextInputProps,
} from 'react-native';

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
  searchStyles?: TextStyle;
  placeholderTextColor?: string;
}

const SearchBar = (props: SearchBarProps) => {
  const {placeholder, searchStyles, placeholderTextColor} = props;
  return (
    <View style={styles.main}>
      <TextInput
        {...props}
        placeholder={placeholder ?? 'ALen'}
        placeholderTextColor={placeholderTextColor ?? COLORS.WHITE}
        style={[styles.ip, searchStyles]}
      />
      <View style={styles.inner}>
        <Image source={CLOSE} style={styles.close} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    ...SIZING.w100,
    borderRadius: RF(4),
    backgroundColor: 'rgba(163, 162, 162, 0.2)',
    height: RF(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: RF(10),
    paddingLeft: RF(10),
  },
  close: {width: RF(5), height: RF(5)},
  inner: {
    width: RF(13),
    height: RF(13),
    backgroundColor: COLORS.GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RF(30),
  },
  ip: {
    width: '95%',
    paddingHorizontal: RF(10),
    color: COLORS.WHITE,
    height: RF(30),
    paddingLeft: RF(5),
  },
});

export default SearchBar;
