import { HEARTFILLICON, HEARTICON, SHAREICON } from '@assets/icons';
import {PERSON} from '@assets/images';
import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import RenderItem from './sections/renderItem';

const ProfileFavorites = () => {
  return (
    <View>
      <FlatList
        data={[1, 1, 1]}
        renderItem={() => {
          return (
            <RenderItem />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {paddingTop: RF(3)},
  line: {
    width: '100%',
    height: 0.6,
    backgroundColor: COLORS.GRAY,
    marginBottom: RF(20),
  },
  top8: {paddingTop: RF(8)},
  top9: {paddingTop: RF(9)},
  container: {flexDirection: 'row', height: RF(130)},
  image: {height: RF(120), width: '27%', borderRadius: RF(6)},
  innerContainer: {
    height: RF(170),
    width: '72%',
    backgroundColor: COLORS.BLACK,
    paddingLeft: RF(10),
  },
});

export default ProfileFavorites;
