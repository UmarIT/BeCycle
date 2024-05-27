import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
import FastImage from 'react-native-fast-image';
import {PLAYICON} from '@assets/icons';
interface props {
  item?: any;
}
const RenderVideoCard = (props: props) => {
  const {item} = props;
  return item?.map((item: any) => (
    <View style={styles.mainView}>
      <View
        style={[
          styles.innerViewStyles,
          {
            width: item?.image ? '64%' : '100%',
            marginTop: item?.image ? RF(5) : 0,
          },
        ]}>
        {item?.title && (
          <CustomText
            numberOfLines={1}
            size={16}
            color={COLORS.WHITE}
            style={styles.boldHeading1}>
            {item.title}
          </CustomText>
        )}
        <CustomText
          numberOfLines={2}
          size={11}
          color={COLORS.WHITE}
          style={styles.boldHeading2}>
          {item?.description}
        </CustomText>
      </View>
      {item?.image && (
        <View style={styles.imgViewStyles}>
          <FastImage source={item.image} style={styles.imgStyles}>
            <View style={styles.subView1}>
              <FastImage
                source={PLAYICON}
                resizeMode="contain"
                style={styles.img}
              />
            </View>
            <View style={styles.timeView}>
              <CustomText
                numberOfLines={1}
                size={9}
                adjustsFontSizeToFit={true}
                color={COLORS.WHITE}
                style={styles.timeStyles}>
                03:50
              </CustomText>
            </View>
          </FastImage>
        </View>
      )}
    </View>
  ));
};

export default RenderVideoCard;

const styles = StyleSheet.create({
  boldHeading1: {
    ...GST.WEIGHT800,
    marginBottom: RF(6),
  },
  boldHeading2: {
    ...GST.WEIGHT500,
  },
  timeStyles: {
    ...GST.WEIGHT600,
  },
  mainView: {
    marginBottom: RF(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: RF(5),
    paddingVertical: RF(15),
    paddingHorizontal: RF(15),
    width: '100%',
    backgroundColor: COLORS.VERYDARKFORINPUT,
  },
  innerViewStyles: {},
  imgViewStyles: {
    backgroundColor: COLORS.BLUE,
    width: RF(75),
    height: RF(70),
    borderRadius: RF(6),
    paddingTop: RF(5),
  },
  imgStyles: {
    flexDirection: 'row',
    width: RF(75),
    height: RF(70),
    borderRadius: RF(6),
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: RF(5),
  },
  subView1: {
    backgroundColor: COLORS.BLACK,
    height: RF(25),
    width: RF(25),
    borderRadius: RF(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {height: RF(12), width: RF(12)},
  timeView: {
    backgroundColor: COLORS.DARKGRAY,
    borderRadius: RF(6),
    height: RF(17),
    width: RF(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
