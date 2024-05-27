import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import { GST } from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const FindContactCard = () => {
  return (
    <View style={styles.main}>
      <CustomText size={14} style={styles.weight}>
        Follow friends and families
      </CustomText>
      <CustomText center>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor
      </CustomText>
      <View style={styles.width}>
        <CustomButton
          bgColor={COLORS.LIGHTGREEN}
          color={COLORS.BLACK}
          text="Find Contacts"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  width: {width: RF(150)},
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(30),
    width: '85%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.DARKGRAY,
    paddingVertical: RF(20),
    borderRadius: RF(4),
  },
  weight: {...GST.WEIGHT800},
});

export default FindContactCard;
