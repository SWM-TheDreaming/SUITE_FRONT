import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import Login from '../screens/AuthScreen/Login';
import EmailAuthentication from '../screens/AuthScreen/SignUp/EmailAuthentication';
import Profile from '../screens/AuthScreen/SignUp/Profile';
import SignupComplete from '../screens/AuthScreen/SignUp/SignupComplete';
import TermOfUse from '../screens/AuthScreen/SignUp/TermOfUse';
import UserInformation from '../screens/AuthScreen/SignUp/UserInformation';
import AuthenticateCode from '../screens/AuthScreen/SignUp/AuthenticateCode';
const Auth = createStackNavigator();

export function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="TermOfUse"
        component={TermOfUse}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="EmailAuthentication"
        component={EmailAuthentication}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="UserInformation"
        component={UserInformation}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="SignupComplete"
        component={SignupComplete}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="AuthenticateCode"
        component={AuthenticateCode}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
