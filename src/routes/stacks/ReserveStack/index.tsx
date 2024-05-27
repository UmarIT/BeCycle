import {TransitionPresets} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '@screens/auth/authScreen';
import {ROUTES} from '@utils/routes';
import React from 'react';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const ReserveStack = () => {
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

export default ReserveStack;
