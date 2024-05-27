import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileStack from '@routes/stacks/profileStack';
import {RF} from '@theme/responsive';
import {SIZING} from '@theme/sizing';
import {IOS} from '@utils/constants';
import React from 'react';
import {StyleSheet} from 'react-native';
import CustomTabbar from './CustomTabs';
import CartStack from '@routes/stacks/cartStack';
import ReserveStack from '@routes/stacks/ReserveStack';
import HomeStack from '@routes/stacks/homeStack';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabbar {...props} />}
      screenOptions={({route: {name}}) => ({
        tabBarItemStyle: {justifyContent: 'center'},

        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
        tabBarActiveTintColor: 'gray',
        tabBarInactiveTintColor: 'black',
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: styles.tabBarIconStyle,
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="ReserveStack" component={ReserveStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    ...SIZING.h10,
  },
  icon: {
    width: RF(20),
    height: RF(23.5),
  },
  tabBarIconStyle: {
    width: RF(20),
    maxHeight: RF(30),
    marginTop: IOS ? RF(10) : 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
