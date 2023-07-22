import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './appStack'; //인증이 완료되면 보여져야 하는 화면들
import { View, Text } from 'react-native';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
