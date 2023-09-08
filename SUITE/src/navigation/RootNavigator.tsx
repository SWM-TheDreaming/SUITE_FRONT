import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './appStack'; //인증이 완료되면 보여져야 하는 화면들
import { AuthStack } from './AuthStack';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../recoil/atoms';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserInformation } from '../api/Sign/getUserInformation';
import {
  emailState,
  memberIdState,
  nameState,
  nicknameState,
  isAuthState,
  phoneState,
  preferStudyState,
  profileImageState,
} from '../../recoil/atoms';
import { useSetRecoilState } from 'recoil';
export default function RootNavigator() {
  const [token, setToken] = useRecoilState(tokenState);
  const email = useSetRecoilState(emailState);
  const memberId = useSetRecoilState(memberIdState);
  const name = useSetRecoilState(nameState);
  const nickname = useSetRecoilState(nicknameState);
  const isAuth = useSetRecoilState(isAuthState);
  const phone = useSetRecoilState(phoneState);
  const preferStudy = useSetRecoilState(preferStudyState);
  const profileImage = useSetRecoilState(profileImageState);
  useEffect(() => {
    const getTokenFromAsyncStorage = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token'); // 'token'은 AsyncStorage에 저장된 토큰의 키입니다.
        if (storedToken.length > 10) {
          setToken(storedToken);
          const getEmailCode = async () => {
            try {
              const code = await getUserInformation(storedToken);
              email(code.email);
              memberId(code.memberId);
              name(code.name);
              nickname(code.nickName);
              isAuth(code.isAuth);
              phone(code.phone);
              preferStudy(code.preferStudy);
              profileImage(code.profileImage);
            } catch (error) {
              console.log('Error occurred:', error);
            }
          };
          getEmailCode();
        }
      } catch (error) {
        console.log('Error retrieving token from AsyncStorage:', error);
      }
    };
    getTokenFromAsyncStorage();
  }, []);
  return <NavigationContainer>{!token || token.length < 10 ? <AuthStack /> : <AppStack />}</NavigationContainer>;
}
