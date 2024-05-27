import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
// import LinearGradient from 'react-native-linear-gradient';
import {GST} from '@theme/globalStyles';
import {SIZING} from '@theme/sizing';
import Reactions from '@components/ReactionRow';
import Tag from '@components/TagDesign';

const GRADIENT = ['transparent', 'rgba(52, 52, 52, 0.3)', COLORS.VERYDARK];

export default function RenderItem({item}: any) {
  const {postNo, name, username, time, vote, image, type} = item;

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.main}>
        <View
          style={[
            {
              backgroundColor:
                type == 'MUSIC'
                  ? COLORS.LIGHTGREEN
                  : type == 'DANCE'
                  ? COLORS.BLUE
                  : COLORS.PINK,
            },
            styles.mMain,
          ]}>
          <CustomText size={9}>{type}</CustomText>
        </View>
        {/* <LinearGradient colors={GRADIENT} style={styles.gradient}>
          <View style={styles.innerContainer}>
            <View style={styles.selfCenter}>
              <CustomText style={styles.w700} size={16}>
                {name}
              </CustomText>
              <CustomText size={12}>{username}</CustomText>
              <View style={styles.out}>
                <Tag
                  bgcolor={COLORS.GRAY}
                  color={COLORS.WHITE}
                  text={'05:00'}
                />
                <CustomText> . {vote}</CustomText>
              </View>
            </View>
          </View>
        </LinearGradient> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  out: {flexDirection: 'row', paddingTop: RF(8)},
  timeMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: RF(6),
  },
  selfCenter:{alignSelf: 'center'},
  w700: {...GST.WEIGHT700},
  post: {
    marginTop: RF(10),
    borderBottomRightRadius: RF(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.LIGHTGREEN,
    width: RF(25),
    height: RF(25),
  },
  innerContainer: {
    height: RF(118),
    position: 'absolute',
    justifyContent: 'flex-end',
    paddingBottom: RF(10),
    ...SIZING.w100,
    bottom: 0,
    alignSelf: 'center',
    paddingHorizontal: RF(5),
  },
  mMain: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 99999,
    paddingHorizontal: RF(4),
    paddingVertical: RF(5),
    borderBottomRightRadius: RF(4),
  },
  container: {
    flex: 1,
    borderRadius: RF(8),
    height: RF(270),
    marginRight: RF(20),
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  gradient: {
    ...SIZING.w100,
    height: RF(200),
    position: 'absolute',
    bottom: 0,
  },
  main: {
    width: RF(140),
    height: RF(270),
    borderRadius: RF(10),
    backgroundColor: COLORS.DARKGRAY,
  },
});
