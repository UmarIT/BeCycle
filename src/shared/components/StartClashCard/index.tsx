import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '@components/CustomButton';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
import FastImage from 'react-native-fast-image';
import {PERSON} from '@assets/images';
import { navigate } from '@services/nav.service';
import { ROUTES } from '@utils/routes';
interface Props {
  name?: string;
  sub?: string;
  image?: any;
  button?: string;
}
const StartClashCard = ({name, sub, image}: Props) => {
  return (
    <Pressable onPress={()=>{
      navigate(ROUTES.TOPTALENTS)
    }} style={styles.containerView}>
      <View>
        <FastImage source={image} style={styles.img} />
      </View>
    </Pressable>
  );
};

export default StartClashCard;

const styles = StyleSheet.create({
  subHeading: {
    ...GST.WEIGHT500,
    textAlign: 'center',
    fontSize: RF(15),
  },
  img: {
    width: RF(76),
    height: RF(76),
    borderRadius: RF(40),
    alignSelf: 'center',
  },
  nameView: {marginTop: RF(9)},
  sub: {
    ...GST.WEIGHT800,
    textAlign: 'center',
    fontSize: RF(15),
  },
  btn: {
    backgroundColor: COLORS.LIGHTGREEN,
    height: RF(32),
    width: RF(80),
  },
  btnView: {marginTop: RF(4)},
  containerView: {
    // backgroundColor: 'brown',
    alignItems: 'flex-start',
    width: '36%',
  },
});
