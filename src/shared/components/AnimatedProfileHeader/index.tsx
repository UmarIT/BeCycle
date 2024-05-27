import React from 'react';
import {PERSON} from '@assets/images';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import ProfileSocialIcons from '@components/ProfileSocialIcons';
import {navigate} from '@services/nav.service';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {ROUTES} from '@utils/routes';
import {View, Animated, StyleSheet, Pressable, Platform} from 'react-native';
const Header_Max_Height = RF(320);
const Header_Min_Height = RF(100);
const Scroll_Distance = Header_Max_Height - Header_Min_Height;
const AnimatedProfileHeader = ({value}: any) => {
  const animatedHeaderHeight = value.interpolate({
    inputRange: [RF(0), Platform.OS == 'ios' ? RF(100) :Scroll_Distance],
    outputRange: [RF(320), RF(100)],
    extrapolate: 'clamp',
  });
  const animatedHeaderWidth = value.interpolate({
    inputRange: [0, RF(100)],
    outputRange: [RF(80), 0],
    extrapolate: 'clamp',
  });
  const animatedHeaderHeightimg = value.interpolate({
    inputRange: [RF(10), RF(100)],
    outputRange: [RF(0), RF(70)],
    extrapolate: 'clamp',
  });

  const animatedHeaderColor = value.interpolate({
    inputRange: [0, RF(10)],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const addFriend = () => {
    navigate(ROUTES.EDITPROFILE);
  };
  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animatedHeaderHeight,
        },
      ]}>
      <Animated.View
        style={[styles.innerAnimated, {opacity: animatedHeaderColor}]}>
        <Animated.Image
          style={[styles.image, {width: animatedHeaderWidth}]}
          source={PERSON}
        />
      </Animated.View>
      <View style={styles.inner}>
        <View style={styles.btnView}>
          <Pressable
            onPress={() => {
              navigate(ROUTES.PROFILEUPLOADS);
            }}>
            <Animated.Image
              source={PERSON}
              style={[
                styles.pading,
                {
                  height: animatedHeaderHeightimg,
                  width: animatedHeaderHeightimg,
                },
              ]}
            />
          </Pressable>
          <View>
            <View>
              <CustomText size={18} style={{...GST.WEIGHT700}}>
                Caetano Veloso
              </CustomText>
              <CustomText>@caetanoveloso</CustomText>
            </View>
          </View>
        </View>

        <View style={styles.btn}>
          <CustomButton
            size={10}
            height={RF(29)}
            bgColor={COLORS.LIGHTGREEN}
            color={COLORS.BLACK}
            text={'Add friend'}
            onPress={addFriend}
          />
        </View>
      </View>

      <Animated.View style={[{opacity: animatedHeaderColor}, styles.textLine]}>
        <View style={{paddingHorizontal: RF(10)}}>
          <CustomText size={10}>
            Brazilian composer, singer, guitarist, writer, and political
            activist.
          </CustomText>
        </View>
        <ProfileSocialIcons />
      </Animated.View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  btn: {width: '23%'},
  btnView: {flexDirection: 'row', alignItems: 'center'},
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: RF(15),
  },
  textLine: {width: '100%'},
  innerAnimated: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  pading: {
    borderRadius: RF(40),

    marginRight: RF(8),
  },
  image: {
    height: RF(80),
    overflow: 'hidden',
    alignSelf: 'flex-start',
    borderRadius: RF(150),
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: RF(25),
    zIndex: 999999999,
    paddingHorizontal: RF(10),
    backgroundColor: COLORS.BLACK,
    overflow: 'hidden',
  },
  title: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    height: 100,
    backgroundColor: '#E6DDC4',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  subtitle: {
    color: '#181D31',
    fontWeight: 'bold',
  },
});
export default AnimatedProfileHeader;
