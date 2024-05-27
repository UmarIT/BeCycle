import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
interface SelectionItemProps {
  title: String;
  text: String;
  isAgree: any;
  onPress: () => void;
}

const SelectionItem = ({title, isAgree, text, onPress}: SelectionItemProps) => {
  return (
    <View style={styles.main}>
      <View style={styles.inner}>
        <CustomText size={14} style={{...GST.WEIGHT700}}>
          {title}
        </CustomText>
      </View>
      <Pressable
        onPress={onPress}
        style={{flexDirection: 'row', paddingTop: RF(10)}}>
        <View
          style={[
            styles.txt,
            {backgroundColor: !isAgree ? COLORS.DARKGRAY : COLORS.LIGHTGREEN},
          ]}
        />
        <View style={{width: '80%'}}>
          <CustomText size={12} color={COLORS.VERYLIGHTGRAY}>
            {text}
          </CustomText>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {paddingTop: RF(20)},
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    borderRadius: 10,
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  next: {height: RF(15), width: RF(15)},
});

export default SelectionItem;
