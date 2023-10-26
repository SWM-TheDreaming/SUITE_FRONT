import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import useForm from '../../hook/useForm';
import mainPageStyleSheet from '../../style/style';
import InputField from '../../components/presents/InputField';
import Kakaosvg from '../../Icons/kakao.svg';
import Googlesvg from '../../Icons/google.svg';
import Applesvg from '../../Icons/apple.svg';
import Logo from '../../Icons/Logo.png';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { ScrollView } from 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import { emailState, passwordState, tokenState, isAuthState } from '../../../recoil/atoms';
import { setStorage } from '../../hook/asyncStorage';
import { SignInApi } from '../../api/Sign/signin';
import ModalPopup from '../../hook/modal';
import SignModalPopup from '../../components/presents/SignmodalPopup';
import { googleloginApi } from '../../api/Sign/kakaoLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import appleAuth from '@invertase/react-native-apple-authentication';
import { AppleloginApi } from '../../api/Sign/AppleLogin';
import AttendanceCheckOkModaPopup from '../../components/presents/AttendanceCheckOkModal';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const Login = () => {
  const login = useForm();
  const navigation = useNavigation<RootStackNavigationProp>();
  const [validateEmail, setValidateEmail] = useState(true);
  const [validatePw, setValidatePW] = useState(true);
  const [token, setToken] = useRecoilState(tokenState);
  const [visible, setVisible] = useState(false);
  const [loginFailText, setLoginFailText] = useState('');
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setpPassword] = useRecoilState(passwordState);
  const [isOauth, setIsOauth] = useRecoilState(isAuthState);
  const [okVisible, setOkVisible] = useState(false);
  const onPressGoogleBtn = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    console.log('idToekn : ', idToken);
    try {
      const kakaoResult = await googleloginApi(idToken);
      if (kakaoResult.statusCode == 201) {
        setEmail(kakaoResult.data.email);
        setpPassword(kakaoResult.data.password);
        setIsOauth(true);
        setOkVisible(true);
        // navigation.navigate('PhoneAuthentication');
      } else if (kakaoResult.statusCode == 200) {
        setStorage('token', JSON.stringify(kakaoResult.data.accessToken));
        setToken(kakaoResult.data.accessToken);
      } else if (kakaoResult.statusCode == 400) {
        setVisible(true);
        setLoginFailText('가입된 이메일이 있습니다.');
      } else if (kakaoResult.statusCode == 403) {
        setVisible(true);
        setLoginFailText('삭제된 계정입니다. 3개월 뒤에 가입가능합니다.');
      }
      console.log('result =', kakaoResult);
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  const onPressAppleBtn = async () => {
    try {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // get current authentication state for user
      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

      // use credentialState response to ensure the user is authenticated
      if (credentialState === appleAuth.State.AUTHORIZED) {
        // user is authenticated
        console.log(appleAuthRequestResponse);
        try {
          const appleResult = await AppleloginApi(appleAuthRequestResponse.identityToken);
          if (appleResult.statusCode == 201) {
            setEmail(appleResult.data.email);
            setpPassword(appleResult.data.password);
            setIsOauth(true);
            setOkVisible(true);
            // navigation.navigate('PhoneAuthentication');
          } else if (appleResult.statusCode == 200) {
            console.log(appleResult);
            setStorage('token', JSON.stringify(appleResult.data.accessToken));
            setToken(appleResult.data.accessToken);
            setIsOauth(true);
          } else if (appleResult.statusCode == 400) {
            setVisible(true);
            setLoginFailText('가입된 이메일이 있습니다.');
          } else if (appleResult.statusCode == 403) {
            setVisible(true);
            setLoginFailText('삭제된 계정입니다. 3개월 뒤에 가입가능합니다.');
          }
          console.log('result =', appleResult);
        } catch (error) {
          console.log('Error occurred:', error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const SingIn = async () => {
    try {
      const email = login.getTextInputProps('username').value;
      const password = login.getTextInputProps('password').value;

      try {
        const accessToken = await SignInApi(email, password);
        if (accessToken == '가입된 이메일이 없습니다.') {
          setLoginFailText('가입된 이메일이 없습니다.');
          setVisible(true);
        } else if (accessToken == '비밀번호가 일치하지 않습니다.') {
          setLoginFailText('비밀번호가 일치하지 않습니다.');
          setVisible(true);
        } else {
          _storeData(accessToken);
          setToken(accessToken);
        }
      } catch (error) {
        console.log('Error occurred:', error);
      }
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  const _storeData = async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      // Error saving data
    }
  };
  const handleButtonPress = () => {
    if (login.errors.username) {
      setValidateEmail(false);
    }
    if (login.errors.password) {
      setValidatePW(false);
    }
    if (login.getTextInputProps('password').value == '') {
      setValidatePW(false);
    }
    if (login.getTextInputProps('username').value == '') {
      setValidateEmail(false);
    } else if (!login.errors.username && !login.errors.password) {
      SingIn();
      setValidateEmail(true);
      setValidatePW(true);
    }
  };

  return (
    <ScrollView>
      <View style={mainPageStyleSheet.loginContainer}>
        <View style={mainPageStyleSheet.logoContainer}>
          <Image source={Logo} style={mainPageStyleSheet.logoStyle} />
        </View>
        <View style={mainPageStyleSheet.idpwInputContainer}>
          <Text style={mainPageStyleSheet.idpwtext}>아이디</Text>
          <InputField
            autoFocus
            placeholder=" 아이디를 입력해주세요"
            {...login.getTextInputProps('username')}
            touched={login.touched.username}
          />
          <Text>
            {validateEmail == false && (
              <Text style={mainPageStyleSheet.idPwInputErrorText}>{login.errors.username}</Text>
            )}
          </Text>
          <Text style={mainPageStyleSheet.idpwtext}>비밀번호</Text>
          <InputField
            style={mainPageStyleSheet.idpwInputBox}
            placeholder=" 비밀번호를 입력해주세요"
            {...login.getTextInputProps('password')}
            touched={login.touched.password}
            secureTextEntry
          />
          <Text>
            {validatePw == false && <Text style={mainPageStyleSheet.idPwInputErrorText}>{login.errors.password}</Text>}
          </Text>
        </View>
        <View style={mainPageStyleSheet.loginButtonContainer}>
          <TouchableOpacity
            style={mainPageStyleSheet.loginButton}
            onPress={() => {
              handleButtonPress();
            }}
          >
            <Text style={mainPageStyleSheet.loginButtonText}>SUITE 시작하기</Text>
          </TouchableOpacity>
        </View>
        <ModalPopup visible={visible}>
          <SignModalPopup visible={visible} onClose={() => setVisible(false)} text={loginFailText} />
        </ModalPopup>
        <ModalPopup visible={okVisible}>
          <AttendanceCheckOkModaPopup
            visible={okVisible}
            onClose={() => setOkVisible(false)}
            text={`나머지 정보를 입력해 주세요!`}
            onConfirm={() => navigation.navigate('PhoneAuthentication')}
          />
        </ModalPopup>
        <View style={mainPageStyleSheet.authInfoContainer}>
          <TouchableOpacity>
            <Text
              style={mainPageStyleSheet.authInfoText}
              onPress={() => {
                navigation.navigate('TermOfUse');
              }}
            >
              회원가입
            </Text>
          </TouchableOpacity>
          <Text style={mainPageStyleSheet.authInfobar}> | </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FindId');
            }}
          >
            <Text style={mainPageStyleSheet.authInfoText}>아이디 찾기</Text>
          </TouchableOpacity>
          <Text style={mainPageStyleSheet.authInfobar}> | </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FindPW');
            }}
          >
            <Text style={mainPageStyleSheet.authInfoText}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
        <View style={mainPageStyleSheet.snsLoginButtonContainer}>
          <TouchableOpacity style={mainPageStyleSheet.googleLoginButton} onPress={() => onPressGoogleBtn()}>
            <Googlesvg />
            <Text style={mainPageStyleSheet.snsLoginButtonText}>구글 아이디로 로그인하기</Text>
          </TouchableOpacity>
          {Platform.OS == 'ios' ? (
            <TouchableOpacity style={mainPageStyleSheet.googleLoginButton} onPress={() => onPressAppleBtn()}>
              <Applesvg />
              <Text style={mainPageStyleSheet.snsLoginButtonText}>애플 아이디로 로그인하기</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
