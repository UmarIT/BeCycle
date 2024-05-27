import {StyleSheet, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {CROSS} from '@assets/images';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
import CustomButton from '@components/CustomButton';
import {BLOCKICON, TICK} from '@assets/icons';
interface MessagesCardProps {
  onButtonPress?: (val: any) => void | undefined;
  item?: any;
}
const MessagesCard = (props: MessagesCardProps) => {
  const {onButtonPress, item} = props;
  return (
    <View style={styles.rowView}>
      <View style={styles.mainInnerView}>
        <FastImage
          source={item?.pic}
          style={styles.profileImgStyles}
          resizeMode="cover"
        />
      </View>
      <View style={styles.innerView}>
        <View style={styles.rowView1}>
          <CustomText
            numberOfLines={1}
            size={14}
            color={COLORS.WHITE}
            style={styles.boldHeading}>
            {item?.Name}
          </CustomText>
          <CustomText
            size={13}
            numberOfLines={1}
            color={COLORS.WHITE}
            style={styles.userNameTxt}>
            {` ${item?.userName}`}
          </CustomText>
        </View>
        {item?.yourMessage ? (
          <CustomText
            size={13}
            numberOfLines={1}
            color={COLORS.WHITE}
            style={styles.messageTxt}>
            {`You:${item?.message}`}
          </CustomText>
        ) : (
          <CustomText
            size={13}
            numberOfLines={1}
            color={COLORS.WHITE}
            style={styles.messageTxt}>
            {item?.message}
          </CustomText>
        )}
        {item?.isRequest && (
          <View style={styles.otherRowView}>
            <CustomButton
              text="Accept"
              style={styles.btnStyles}
              bgColor={COLORS.LIGHTGREEN}
              textStyle={styles.btnTxt}
              onPress={() => {
                if (onButtonPress) {
                  onButtonPress('Accept');
                }
              }}
              icon={
                <FastImage
                  resizeMode="contain"
                  source={TICK}
                  style={styles.btnIcon}
                />
              }
            />
            <CustomButton
              text="Reject"
              style={styles.btnStyles}
              bgColor={COLORS.BLUE}
              textStyle={styles.btnTxt}
              onPress={() => {
                if (onButtonPress) {
                  onButtonPress('Reject');
                }
              }}
              icon={
                <FastImage
                  resizeMode="contain"
                  source={CROSS}
                  style={styles.btnIcon}
                />
              }
            />
            <CustomButton
              text="block"
              style={styles.btnStyles}
              bgColor={COLORS.BLUE}
              textStyle={styles.btnTxt}
              onPress={() => {
                if (onButtonPress) {
                  onButtonPress('block');
                }
              }}
              icon={
                <FastImage
                  resizeMode="contain"
                  source={BLOCKICON}
                  style={styles.btnIcon}
                />
              }
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default MessagesCard;

const styles = StyleSheet.create({
  boldHeading: {
    ...GST.WEIGHT800,
  },
  userNameTxt: {
    ...GST.WEIGHT400,
  },
  messageTxt: {
    ...GST.WEIGHT500,
    marginTop: RF(5),
  },
  btnStyles: {height: RF(30), width: '31%'},
  btnTxt: {fontSize: RF(10), color: COLORS.BLACK, ...GST.WEIGHT700},
  btnIcon: {height: RF(10), width: RF(10), marginRight: RF(3)},
  rowView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImgStyles: {height: RF(60), width: RF(60), borderRadius: RF(40)},
  innerView: {
    marginLeft: RF(12),
    width: '65%',
  },
  rowView1: {flexDirection: 'row'},
  otherRowView: {
    marginTop: RF(4),
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  mainInnerView: {
    height: '100%',
  },
});
