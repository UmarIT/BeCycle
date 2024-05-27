import {PERSON} from '@assets/images';
import ClashText from '@components/ClashText';
import CustomText from '@components/CustomText';
import Reactions from '@components/ReactionRow';
import Tag from '@components/TagDesign';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const RenderItem = () => {
  return (
    <View style={styles.container}>
      <Image source={PERSON} style={styles.main} />
    </View>
  );
};

const styles = StyleSheet.create({
  top10: {paddingTop: RF(10)},
  w700: {...GST.WEIGHT700},
  innerView: {paddingTop: RF(5)},
  row: {flexDirection: 'row'},
  inner: {
    height: RF(170),
    width: '52%',
    backgroundColor: COLORS.BLACK,
    paddingLeft: RF(10),
  },
  main: {height: RF(160), width: '45%', borderRadius: RF(6)},
  container: {flexDirection: 'row'},
});

export default RenderItem;
