import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {ROUTES} from '@utils/routes';
import {TransitionPresets} from '@react-navigation/stack';
import AuthScreen from '@screens/auth/authScreen';
import GetStarted from '@screens/auth/loginScreen';
import RegisterScreen from '@screens/auth/registerScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Stack.Navigator
        initialRouteName={ROUTES.INITIALAUTH}
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name={ROUTES.GETSTARTED} component={GetStarted} />
        <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
        {/* <Stack.Screen name={ROUTES.AUTHSCREEN} component={AuthScreen} /> */}

      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
