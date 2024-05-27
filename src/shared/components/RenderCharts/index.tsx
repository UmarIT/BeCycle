import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import { PLAYICON} from '@assets/icons';
import Reactions from '@components/ReactionRow';
import {PERSON} from '@assets/images';

const RenderCharts = () => {
  return (
    <View style={styles.rowView}>
      <View style={styles.innerColumnView}>
        <View>
          <View style={styles.innerView}>
            <CustomText
              size={12}
              color={COLORS.BLACK}
              style={styles.boldHeading}>
              #1
            </CustomText>
          </View>
          <View style={styles.otherRowView}>
            <CustomText size={15} numberOfLines={1} style={styles.boldHeading1}>
              Ship of Fools
            </CustomText>
          </View>

          <CustomText size={12} numberOfLines={1} style={styles.boldHeading2}>
            Jerry Garcia
          </CustomText>
        </View>
        <View>
          <Reactions
            vote={'NEW'}
            charts={true}
            style={styles.reactionStyles}
            shareStyle={styles.shareStyles}
            heartStyle={styles.heartStyles}
          />
        </View>
      </View>
      <View style={styles.subView}>
        <ImageBackground source={PERSON} style={styles.bgImgStyles}>
          <View style={styles.innerRowView}>
            <View style={styles.playIconView}>
              <Image
                resizeMode="contain"
                source={PLAYICON}
                style={styles.playIcon}
              />
            </View>
            <View style={styles.timeView}>
              <CustomText style={styles.timeTxt}>05:28</CustomText>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default RenderCharts;

const styles = StyleSheet.create({
  boldHeading: {
    ...GST.WEIGHT700,
  },
  boldHeading1: {
    ...GST.WEIGHT800,
  },
  boldHeading2: {
    width: '85%',
    ...GST.WEIGHT600,
  },
  timeTxt: {
    ...GST.WEIGHT800,
  },
  boldHeading3: {
    ...GST.WEIGHT700,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerView: {
    backgroundColor: COLORS.LIGHTGREEN,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    height: RF(25),
    width: RF(25),
    borderBottomRightRadius: RF(6),
  },
  otherRowView: {
    width: '80%',
    flexDirection: 'row',
    marginTop: RF(9),
    marginBottom: RF(6),
  },
  img: {height: RF(20), width: RF(20), marginHorizontal: RF(7)},
  reactionStyles: {marginTop: RF(8)},
  shareStyles: {tintColor: COLORS.WHITE, height: RF(16), width: RF(16)},
  heartStyles: {tintColor: COLORS.WHITE, height: RF(16), width: RF(16)},
  subView: {
    borderRadius: RF(10),
    overflow: 'hidden',
    height: RF(110),
    width: RF(110),
  },
  bgImgStyles: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerRowView: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  playIconView: {
    backgroundColor: COLORS.BLACK,
    padding: RF(8),
    borderRadius: RF(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: RF(9),
  },
  playIcon: {height: RF(11), width: RF(11)},
  timeView: {
    backgroundColor: COLORS.DARKGRAY,
    alignSelf: 'center',
    paddingHorizontal: RF(5),
    paddingVertical: RF(3),
    borderRadius: RF(5),
  },
  innerColumnView: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
