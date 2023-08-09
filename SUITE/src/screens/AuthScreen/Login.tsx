import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import useForm from '../../hook/useForm';
import mainPageStyleSheet from '../../style/style';
import InputField from '../../components/presents/InputField';
import Kakaosvg from '../../Icons/kakao.svg';
import Googlesvg from '../../Icons/google.svg';
import Logo from '../../Icons/Logo.png';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { ScrollView } from 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import { emailState, passwordState, tokenState } from '../../../recoil/atoms';
import { setStorage } from '../../hook/asyncStorage';
import { SignInApi } from '../../api/Sign/signin';
import ModalPopup from '../../hook/modal';
import SignModalPopup from '../../components/presents/SignmodalPopup';
import { externalkakaologin } from '../../api/Sign/kakaoLogin';

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
  const kakaoLoginHandle = async () => {
    try {
      const kakaoResult = await externalkakaologin();
      if (kakaoResult.statusCode == 201) {
        setEmail(kakaoResult.data.email);
        setpPassword(kakaoResult.data.password);
        navigation.navigate('OauthTermOfUse');
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
          setStorage('token', JSON.stringify(accessToken));
          setToken(accessToken);
        }
      } catch (error) {
        console.log('Error occurred:', error);
      }
    } catch (error) {
      console.log('Error occurred:', error);
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
          <TouchableOpacity>
            <Text style={mainPageStyleSheet.authInfoText}>아이디 찾기</Text>
          </TouchableOpacity>
          <Text style={mainPageStyleSheet.authInfobar}> | </Text>
          <TouchableOpacity>
            <Text style={mainPageStyleSheet.authInfoText}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
        <View style={mainPageStyleSheet.snsLoginButtonContainer}>
          <TouchableOpacity style={mainPageStyleSheet.kakaoLoginButton} onPress={() => kakaoLoginHandle()}>
            <Kakaosvg />
            <Text style={mainPageStyleSheet.snsLoginButtonText}>카카오 아이디로 로그인하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mainPageStyleSheet.googleLoginButton}>
            <Googlesvg />
            <Text style={mainPageStyleSheet.snsLoginButtonText}>구글 아이디로 로그인하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
