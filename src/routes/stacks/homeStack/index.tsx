import {TransitionPresets} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import Reserve from '@screens/general/Reserve';
import Store from '@screens/general/Store';
import ConfirmReserver from '@screens/general/confirmReserver';
import Home from '@screens/general/home';
import {ROUTES} from '@utils/routes';
import React from 'react';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const HomeStack = () => {
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
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.STORE} component={Store} />
        <Stack.Screen name={ROUTES.RESERVE} component={Reserve} />
        <Stack.Screen
          name={ROUTES.CONFIRMRESERVER}
          component={ConfirmReserver}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
