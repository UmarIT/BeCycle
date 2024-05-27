import {TransitionPresets} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '@screens/auth/authScreen';
import ProfileScreen from '@screens/general/profileScreen';
import {ROUTES} from '@utils/routes';
import React from 'react';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen
          name={ROUTES.AUTHSCREEN}
          component={AuthScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default ProfileStack;
