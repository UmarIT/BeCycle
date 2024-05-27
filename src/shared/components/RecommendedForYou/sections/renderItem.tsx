import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
// import LinearGradient from 'react-native-linear-gradient';
import {GST} from '@theme/globalStyles';
import {SIZING} from '@theme/sizing';
import Reactions from '@components/ReactionRow';

const GRADIENT = ['transparent', 'rgba(52, 52, 52, 0.3)', COLORS.VERYDARK];

export default function RenderItem({item}: any) {
  const {postNo, name, username, time, vote, image, likes} = item;

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.main}>
        {/* <LinearGradient colors={GRADIENT} style={styles.gradient}>
          <View style={styles.innerContainer}>
    
            <View>
              <CustomText style={styles.w700} size={16}>
                {name}
              </CustomText>
            </View>
            <CustomText size={12}>{username}</CustomText>

            <View style={styles.timeMain}>
              <View style={styles.out}>
                <CustomText>{time} </CustomText>
                <CustomText> {vote}</CustomText>
              </View>
              
            </View>
          </View>
        </LinearGradient> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  out: {flexDirection: 'row'},
  timeMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: RF(6),
  },
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
    justifyContent:'flex-end',
    paddingBottom:RF(10),
    ...SIZING.w100,
    bottom: 0,
    paddingHorizontal: RF(5),
  },
  container: {
    flex: 1,
    borderRadius: RF(8),
    height: RF(220),
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
    width: RF(220),
    height: RF(220),
    borderRadius: RF(10),
    backgroundColor: COLORS.DARKGRAY,
  },
});
