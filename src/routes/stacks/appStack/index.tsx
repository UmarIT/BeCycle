import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from '@routes/tabs/mainTabs';
import AuthScreen from '@screens/auth/authScreen';
import { ROUTES } from '@utils/routes';
import React from 'react';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'tabs'} component={MyTabs} />

      </Stack.Navigator>
    </>
  );
};

export default AppStack;
