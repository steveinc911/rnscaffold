import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import SignInScreen from '../../features/account/screens/signIn'
import AuthLoadingScreen from '../../features/account/screens/authLoadingScreen'

import MainTabNavigator from '../../features/activityBrowser/screens/browser';

const AuthStack = createStackNavigator({ 
  SignIn: SignInScreen 
});

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    App: MainTabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }));

