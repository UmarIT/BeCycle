import React, {} from 'react';
import AppStack from './stacks/appStack';
import { useSelector} from 'react-redux';
import AuthStack from './stacks/authStack';


const Routes = () => {
  const {user} = useSelector((state: any) => state?.root?.user);

  return user ? <AppStack /> :  <AuthStack />;
};

export default Routes;
