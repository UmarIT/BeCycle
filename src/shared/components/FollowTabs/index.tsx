import CustomText from '@components/CustomText';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import { SIZING } from '@theme/sizing';
import {TABS} from '@utils/enums';
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

const FollowTabs = ({setTab, tab}: any) => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => {
          setTab(TABS.following);
        }}
        style={[
          styles.follow,
          {borderBottomWidth: tab == TABS.following ? 3 : 0.3},
        ]}>
        <CustomText>Following</CustomText>
      </Pressable>

      <Pressable
        onPress={() => {
          setTab(TABS.follower);
        }}
        style={[
          styles.flow,
          {borderBottomWidth: tab == TABS.follower ? 3 : 0.3},
        ]}>
        <CustomText>Follower</CustomText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {...SIZING.w100, flexDirection: 'row', height: RF(40)},
  flow: {
    height: RF(40),
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',

    borderColor: COLORS.WHITE,
  },
  follow: {
    height: RF(40),
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',

    borderColor: COLORS.WHITE,
  },
});

export default FollowTabs;
