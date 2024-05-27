import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RenderTabIcon from './RenderTabs';
type CustomTabbarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};
function CustomTabbar({state, descriptors, navigation}: CustomTabbarProps) {
  const insets = useSafeAreaInsets();
  const [keyboardStatus, setKeyboardStatus] = useState<boolean>(true);

  return (
    <View
      style={{
        backgroundColor: COLORS.WHITE,
        // borderTopWidth: 1,
        // borderColor: COLORS.DARKGRAY,
        borderColor: COLORS.WHITE,
        paddingBottom: insets.bottom,
      }}>
      <View
        style={[
          keyboardStatus ? styles.tabbarContainer : null,
          {
            borderTopWidth: RF(1),
            borderTopColor: '#B8B8B8',
          },
        ]}>
        {state.routes.map(
          (route: {key: string | number; name: any}, index: any) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            return (
              <Pressable
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                key={route.name}
                style={[styles.tabItemContainer]}>
                <>
                  <RenderTabIcon routeName={route.name} isFocused={isFocused} />
                  <View style={{paddingTop: RF(5)}}>
                    <Text
                      style={[
                        styles.TabsName,
                        {color: isFocused ? COLORS.darkBlue : '#8894AF'},
                      ]}>
                      {route.name === 'HomeStack' ? 'Home' : null}
                      {route.name === 'Cart' ? 'Purchase' : null}
                      {route.name === 'ReserveStack' ? 'Reserve' : null}
                      {route.name === 'Profile' ? 'Account' : null}
                    </Text>
                  </View>
                </>
              </Pressable>
            );
          },
        )}
      </View>
      {/* <View style={{height: insets.bottom, backgroundColor: COLORS.BLACK}} /> */}
    </View>
  );
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
    fontSize: RF(11),
    lineHeight: RF(16),
    // paddingTop:RF(3)
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
  tabBarIconImage: {height: RF(29), width: RF(29)},
});

export default CustomTabbar;
