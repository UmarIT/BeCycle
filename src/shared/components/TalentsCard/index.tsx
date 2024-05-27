import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '@components/CustomText';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import FastImage from 'react-native-fast-image';
import {PERSON} from '@assets/images';
import {ANDROID} from '@utils/constants';
import {GST} from '@theme/globalStyles';
import { navigate } from '@services/nav.service';
import { ROUTES } from '@utils/routes';
const TalentsCard = ({item}: any) => {
  return (
    <Pressable onPress={()=>{
      navigate(ROUTES.DISCOVERSEARCHSCREEN)
    }} style={[styles.container, {width: '99%'}]}>
      <View style={styles.imgView}>
        <FastImage source={PERSON} style={styles.imgStyles} />
      </View>
      <View style={styles.rightView}>
        <View style={styles.hashNumView}>
          <CustomText size={14} style={styles.boldHeading} color={COLORS.BLACK}>
            #1
          </CustomText>
        </View>
        <View>
          <View style={styles.nameView}>
            <CustomText size={14} style={styles.boldHeading}>
              {item.name}
            </CustomText>
            <CustomText size={9} style={styles.customTxt}>
              {item?.userName}
            </CustomText>
          </View>
          <View style={styles.rowView}>
            <View>
              <CustomText size={13} style={styles.boldHeading}>
                {item?.videos}
              </CustomText>
              <CustomText size={8} style={styles.txt}>
                Videos
              </CustomText>
            </View>
            <View>
              <CustomText size={13} style={styles.boldHeading}>
                {item?.following}
              </CustomText>
              <CustomText size={8} style={styles.txt}>
                Following
              </CustomText>
            </View>
            <View>
              <CustomText size={13} style={styles.boldHeading}>
                {item?.followers}
              </CustomText>
              <CustomText size={8} style={styles.txt}>
                Followers
              </CustomText>
            </View>
            <View>
              <CustomText size={13} style={styles.boldHeading}>
                {item?.totalView}
              </CustomText>
              <CustomText size={8} style={styles.txt}>
                Total Views
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default TalentsCard;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    ...GST.WEIGHT500,
  },
  boldHeading: {
    ...GST.WEIGHT800,
  },
  rightView: {marginLeft: RF(15)},
  hashNumView: {
    backgroundColor: COLORS.LIGHTGREEN,
    alignSelf: 'flex-start',
    paddingHorizontal: ANDROID ? RF(8) : RF(10),
    paddingVertical: ANDROID ? RF(2) : RF(3),
    borderBottomRightRadius: RF(9),
    marginBottom: ANDROID ? RF(7) : RF(9),
  },
  nameView: {marginBottom: ANDROID ? RF(7) : RF(9)},
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '79%',
  },
  imgStyles: {
    width: RF(85),
    height:RF(85),
    borderRadius: RF(100),
  },
  customTxt: {fontWeight: '600'},
});
