import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import RootClientTabs from './ClientTabs';
import CategoryFilter from '../screens/CategoryFilter';
import { RootStackParamList } from '../types';
import Studylist from '../screens/Studylist';
const App = createStackNavigator<RootStackParamList>();

export function AppStack() {
  return (
    <App.Navigator>
      <App.Screen
        name="Mainpage"
        component={RootClientTabs} //로그인 인증이 되었을 때 HomeScreen 대신에 ClientTab을 띄우게 한다.
        options={{
          headerShown: false,
        }}
      />
      <App.Screen
        name="CategoryFilter"
        component={CategoryFilter}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </App.Navigator>
  );
}
