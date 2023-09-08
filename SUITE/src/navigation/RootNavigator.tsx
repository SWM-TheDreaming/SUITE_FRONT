import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './appStack'; //인증 완료 후 보여져야 하는 화면들
import { AuthStack } from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  tokenState,
  emailState,
  memberIdState,
  nameState,
  nicknameState,
  isAuthState,
  phoneState,
  preferStudyState,
  profileImageState,
} from '../../recoil/atoms';
import { getUserInformation } from '../api/Sign/getUserInformation';

const RootNavigator: React.FC = () => {
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
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken && storedToken.length >= 10) {
          setToken(storedToken);
          getEmailCode(storedToken); // getEmailCode 함수 호출
        }
      } catch (error) {
        console.log('Error retrieving token from AsyncStorage:', error);
      }
    };

    getTokenFromAsyncStorage();
  }, []);

  const getEmailCode = async (token: string) => {
    try {
      const code = await getUserInformation(token);
      email(code.email);
      memberId(code.memberId);
      name(code.name);
      nickname(code.nickName);
      isAuth(code.isAuth);
      phone(code.phone);
      preferStudy(code.preferStudy);
      profileImage(code.profileURL);
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  return <NavigationContainer>{!token || token.length < 10 ? <AuthStack /> : <AppStack />}</NavigationContainer>;
};

export default RootNavigator;
// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { AppStack } from './appStack'; //인증이 완료되면 보여져야 하는 화면들
// import { AuthStack } from './AuthStack';
// import { useRecoilState } from 'recoil';
// import { tokenState } from '../../recoil/atoms';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getStorage } from '../hook/asyncStorage';
// import { getUserInformation } from '../api/Sign/getUserInformation';
// import {
//   emailState,
//   memberIdState,
//   nameState,
//   nicknameState,
//   isAuthState,
//   phoneState,
//   preferStudyState,
//   profileImageState,
// } from '../../recoil/atoms';
// import { useSetRecoilState } from 'recoil';
// export default function RootNavigator() {
//   const [token, setToken] = useRecoilState(tokenState);
//   const email = useSetRecoilState(emailState);
//   const memberId = useSetRecoilState(memberIdState);
//   const name = useSetRecoilState(nameState);
//   const nickname = useSetRecoilState(nicknameState);
//   const isAuth = useSetRecoilState(isAuthState);
//   const phone = useSetRecoilState(phoneState);
//   const preferStudy = useSetRecoilState(preferStudyState);
//   const profileImage = useSetRecoilState(profileImageState);
//   useEffect(() => {
//     const getTokenFromAsyncStorage = async () => {
//       try {
//         const storedToken = await AsyncStorage.getItem('token'); // 'token'은 AsyncStorage에 저장된 토큰의 키입니다.
//         if (storedToken.length > 10) {
//           setToken(storedToken);
//           const getEmailCode = async () => {
//             try {
//               const code = await getUserInformation(storedToken);
//               email(code.email);
//               memberId(code.memberId);
//               name(code.name);
//               nickname(code.nickName);
//               isAuth(code.isAuth);
//               phone(code.phone);
//               preferStudy(code.preferStudy);
//               profileImage(code.profileURL);
//             } catch (error) {
//               console.log('Error occurred:', error);
//             }
//           };
//           getEmailCode();
//         }
//       } catch (error) {
//         console.log('Error retrieving token from AsyncStorage:', error);
//       }
//     };
//     getTokenFromAsyncStorage();
//   }, []);
//   return <NavigationContainer>{!token || token.length < 10 ? <AuthStack /> : <AppStack />}</NavigationContainer>;
// }
