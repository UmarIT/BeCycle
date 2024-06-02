//import liraries
import {
  CARTICON,
  DATEICON,
  HOMEICON,
  USERICON,
} from '@assets/icons';
import { COLORS } from '@theme/colors';
import { RF } from '@theme/responsive';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function RenderTabIcon({routeName, isFocused}: any) {
  switch (routeName) {
    case 'HomeStack':
      return isFocused ? (
        <Image
          style={styles.tabBarIconImage}
          resizeMode="contain"
          // tintColor={COLORS.darkBlue}
          source={HOMEICON}
        />
      ) : (
        <Image
          style={styles.tabBarIconImage}
          resizeMode="contain"
          // tintColor={COLORS.GRAY}
          source={HOMEICON}
        />
      );
    case 'Cart':
      return isFocused ? (
        <Image
          style={styles.tabBarIconImage}
          resizeMode="contain"
          // tintColor={COLORS.darkBlue}
          source={CARTICON}
        />
      ) : (
        <View>
          <Image
            style={styles.tabBarIconImage}
            // tintColor={COLORS.GRAY}
            resizeMode="contain"
            source={CARTICON}
          />
        </View>
      );

    case 'ReserveStack':
      return isFocused ? (
        <Image
          style={[styles.tabBarIconImage]}
          resizeMode="contain"
          // tintColor={COLORS.darkBlue}
          source={DATEICON}
        />
      ) : (
        <Image
          style={styles.tabBarIconImage}
          resizeMode="contain"
          // tintColor={COLORS.GRAY}
          source={DATEICON}
        />
      );
    case 'Profile':
      return isFocused ? (
        <Image
          style={[styles.tabBarIconImage]}
          resizeMode="contain"
          // tintColor={COLORS.darkBlue}
          source={USERICON}
        />
      ) : (
        <Image
          style={styles.tabBarIconImage}
          resizeMode="contain"
          // tintColor={COLORS.GRAY}
          source={USERICON}
        />
      );

    default:
      return <></>;
  }
}
const styles = StyleSheet.create({
  tabbarContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    paddingTop: RF(5),
    height: RF(65),
    position: 'relative',
    paddingHorizontal: RF(5),
  },
  tabItemContainer: {
    flex: 1,
    alignItems: 'center',
    height: RF(50),
    paddingTop: RF(5),
    justifyContent: 'space-evenly',
  },
  tabItemText: {
    // color:'red'
    fontSize: RF(11),
    lineHeight: RF(18),

    // paddingTop: RF(4),
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  headerImageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: RF(16),
    width: RF(32),
    height: RF(32),
    borderWidth: RF(1),
    borderColor: 'yellow',
  },
  dropShadow: {
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  QRBtn: {
    position: 'absolute',
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: '#26272A',
    bottom: RF(80),
    zIndex: 9999,
    left: '40%',
  },
  TabsName: {
    fontSize: RF(9),
  },
  QRBtnMap: {
    position: 'absolute',
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 10,
    borderBottomColor: '#26272A',
    borderLeftColor: '#26272A',
    borderRightColor: '#26272A',
    borderTopColor: '#26272A',
    bottom: RF(80),
    zIndex: 9999,
    left: '40%',
  },
  tabBarIconImage: {height: RF(22), width: RF(22)},
});
export default RenderTabIcon;
