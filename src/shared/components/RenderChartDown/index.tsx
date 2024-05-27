import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import { PLAYICON} from '@assets/icons';
import Reactions from '@components/ReactionRow';
import {PERSON} from '@assets/images';

const RenderChartsDown = ({count}: any) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.innerView1}>
        <View style={styles.subView}>
          {count && (
            <View style={styles.numView}>
              <CustomText
                size={10}
                color={COLORS.WHITE}
                style={styles.boldHeading}>
                #3
              </CustomText>
            </View>
          )}
          <View style={styles.columnView}>
            <View style={styles.rowView}>
              <CustomText
                numberOfLines={1}
                size={15}
                color={COLORS.WHITE}
                style={styles.boldHeading1}>
                Same old song
              </CustomText>
            </View>
            <CustomText
              size={11}
              color={COLORS.WHITE}
              style={styles.boldHeading2}
              numberOfLines={1}>
              Jerry Garcia
            </CustomText>
          </View>
        </View>
        <Reactions
          charts={false}
          shareStyle={styles.shareStyles}
          heartStyle={styles.heartStyles}
        />
      </View>
      <View style={styles.bgImgView}>
        <ImageBackground source={PERSON} style={styles.bgImg}>
          <View style={styles.otherRowView}>
            <View style={styles.playIconView}>
              <Image
                resizeMode="contain"
                source={PLAYICON}
                style={styles.playIconStyles}
              />
            </View>
            <View style={styles.timeView}>
              <CustomText size={7} color={COLORS.WHITE} style={styles.timeTxt}>
                05:28
              </CustomText>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default RenderChartsDown;
const styles = StyleSheet.create({
  boldHeading: {
    ...GST.WEIGHT700,
  },
  boldHeading1: {
    ...GST.WEIGHT800,
  },
  boldHeading2: {
    ...GST.WEIGHT600,
  },
  timeTxt: {
    ...GST.WEIGHT800,
  },
  boldHeading3: {
    ...GST.WEIGHT700,
  },
  mainView: {
    width: '100%',
    // backgroundColor:"green",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerView1: {justifyContent: 'space-between'},
  subView: {
    flexDirection: 'row',
  },
  numView: {
    borderWidth: RF(2),
    borderColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    height: RF(25),
    width: RF(25),

    borderBottomRightRadius: RF(7),
  },
  columnView: {
    width: '64%',
    flexDirection: 'column',
    marginHorizontal: RF(5),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  img: {
    height: RF(20),
    width: RF(20),
    marginHorizontal: RF(6),
  },
  shareStyles: {tintColor: COLORS.WHITE, height: RF(15), width: RF(15)},
  heartStyles: {
    tintColor: COLORS.WHITE,
    height: RF(15),
    width: RF(15),
    marginLeft: RF(10),
  },
  bgImgView: {
    borderRadius: RF(10),
    overflow: 'hidden',
    height: RF(70),
    width: RF(70),
    backgroundColor: 'yellow',
    alignSelf: 'flex-end',
  },
  bgImg: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  otherRowView: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  playIconView: {
    backgroundColor: COLORS.BLACK,
    padding: RF(6),
    borderRadius: RF(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: RF(9),
  },
  playIconStyles: {height: RF(11), width: RF(11)},
  timeView: {
    backgroundColor: COLORS.DARKGRAY,
    alignSelf: 'center',
    paddingHorizontal: RF(5),
    paddingVertical: RF(3),
    borderRadius: RF(5),
  },
});
