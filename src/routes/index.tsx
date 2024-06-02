import React, {} from 'react';
import AppStack from './stacks/appStack/index';
import { useSelector} from 'react-redux';
import AuthStack from './stacks/authStack';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Routes = () => {
  const {user} = useSelector((state: any) => state?.root?.user);
  const Stack = createStackNavigator();
  return user ? <AppStack /> :  <AuthStack />;

};

export default Routes;
