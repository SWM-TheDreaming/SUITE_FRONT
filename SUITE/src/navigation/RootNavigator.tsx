import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './appStack'; //인증이 완료되면 보여져야 하는 화면들
import { AuthStack } from './AuthStack';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tokenState } from '../../recoil/atoms';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootNavigator() {
  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    const getTokenFromAsyncStorage = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token'); // 'token'은 AsyncStorage에 저장된 토큰의 키입니다.
        if (storedToken !== "null") {
          setToken(storedToken);
        }
      } catch (error) {
        console.log('Error retrieving token from AsyncStorage:', error);
      }
    };
    getTokenFromAsyncStorage();
  }, []);
  return (
    <NavigationContainer>
       {
                !token || token.length < 10 ?(
                    <AuthStack />
                ):(
                    <AppStack />
                )
            }
    </NavigationContainer>
  );
}
