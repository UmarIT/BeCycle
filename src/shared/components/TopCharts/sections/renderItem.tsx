import React from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
// import LinearGradient from 'react-native-linear-gradient';
import {GST} from '@theme/globalStyles';
import {SIZING} from '@theme/sizing';
import Reactions from '@components/ReactionRow';
// @ts-ignore
// import VideoPlayer from 'react-native-video-controls';

const GRADIENT = ['transparent', 'rgba(52, 52, 52, 0.3)', COLORS.VERYDARK];

export default function RenderItem({item, play}: any) {
  const {postNo, name, username, time, vote, image, likes} = item;
  return (
    <Pressable onPress={() => {}} style={styles.container}>
      <View style={styles.main}>
        {/* <VideoPlayer
          onError={(err: any) => {}}
          isFullscreen={true}
          disableBack
          disableFullscreen
          paused={!play}
          muted
          repeat
          onSeek={(r: any) => {}}
          resizeMode="cover"
          source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
          controls={false}
          disableVolume
        /> */}

        {/* <LinearGradient colors={GRADIENT} style={styles.gradient}>
          <View style={styles.innerContainer}>
            <View style={styles.post}>
              <CustomText size={9} color={COLORS.BLACK}>
                {postNo}
              </CustomText>
            </View>
            <View>
              <CustomText style={styles.w700} size={13}>
                {name}
              </CustomText>
              <CustomText size={12}>{username}</CustomText>
            </View>
            <View style={styles.timeMain}>
              <View style={styles.out}>
                <View style={styles.innerTime}>
                  <CustomText size={9}>{time} </CustomText>
                </View>
                <CustomText size={9}> {vote}</CustomText>
              </View>
              <Reactions
                share={() => {}}
                heartPress={() => {}}
                width={RF(14)}
                likes="34"
                height={RF(14)}
              />
            </View>
          </View>
        </LinearGradient> */}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  out: {flexDirection: 'row', alignItems: 'center'},
  innerTime: {
    backgroundColor: COLORS.GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RF(2),
    paddingVertical: RF(2),
    borderRadius: RF(2),
  },
  timeMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  w700: {...GST.WEIGHT700},
  post: {
    marginTop: RF(10),
    borderBottomRightRadius: RF(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.LIGHTGREEN,
    width: RF(18),
    height: RF(18),
    marginBottom: RF(2),
  },
  innerContainer: {
    height: RF(118),
    position: 'absolute',
    justifyContent: 'flex-end',
    paddingBottom: RF(10),
    ...SIZING.w100,
    bottom: 0,
    paddingHorizontal: RF(5),
  },
  container: {
    flex: 1,
    borderRadius: RF(8),
    height: RF(220),
    // marginRight: RF(20),
    // backgroundColor: 'red',
    // marginHorizontal:RF(10),
    overflow: 'hidden',
  },
  gradient: {
    ...SIZING.w100,
    height: RF(200),
    position: 'absolute',
    bottom: 0,
  },
  main: {
    width: Dimensions.get('screen').width / 1.41,

    height: RF(220),
    borderRadius: RF(10),
    // backgroundColor: COLORS.DARKGRAY,
  },
});
