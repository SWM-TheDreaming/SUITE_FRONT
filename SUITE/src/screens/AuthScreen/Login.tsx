import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInputProps } from 'react-native';
import useForm from '../../hook/useForm';
import mainPageStyleSheet from '../../style/style';
import InputField from "../../components/presents/InputField"
import { WithLocalSvg } from 'react-native-svg';
import Kakaosvg from '../../Icons/kakao.svg'
import Googlesvg from '../../Icons/google.svg'

const Login = () => {
    const login = useForm();
    const [validateEmail, setValidateEmail] = useState(true)
    const [validatePw, setValidatePW] = useState(true)
    const handleButtonPress = () => {
        if (login.errors.username) {
          setValidateEmail(false)
        }
        if(login.errors.password){
            setValidatePW(false)
        } 
        else {
          console.log('로그인 성공'); //로그인 API 연동
          setValidateEmail(true)
          setValidatePW(true)
        }
      };
  return (
    <View style={mainPageStyleSheet.loginContainer}>
      <View style={mainPageStyleSheet.logoContainer}>
          <Text>
              Logo
          </Text>
      </View>
      <View style={mainPageStyleSheet.idpwInputContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>아이디</Text>
            <InputField
                autoFocus   
                placeholder=" 아이디를 입력해주세요"
                {...login.getTextInputProps("username")}
                touched={login.touched.username}  
            />
        <Text>
            {validateEmail == false && <Text style={mainPageStyleSheet.idPwInputErrorText}>{login.errors.username}</Text>}
        </Text>
        <Text style={mainPageStyleSheet.idpwtext}>비밀번호</Text>
            <InputField
                style = {mainPageStyleSheet.idpwInputBox}
                placeholder=" 비밀번호를 입력해주세요"
                {...login.getTextInputProps("password")}
                touched={login.touched.password}
                secureTextEntry
            />
        <Text>
            {validatePw == false && <Text style={mainPageStyleSheet.idPwInputErrorText}>{login.errors.password}</Text>}
        </Text>
      </View>
      <View style={mainPageStyleSheet.loginButtonContainer}>
        <TouchableOpacity style={mainPageStyleSheet.loginButton} onPress={() => {handleButtonPress()}}>
            <Text style={mainPageStyleSheet.loginButtonText}>SUITE 시작하기</Text>
        </TouchableOpacity>
      </View>
      <View style={mainPageStyleSheet.authInfoContainer}>
        <TouchableOpacity>
            <Text style={mainPageStyleSheet.authInfoText}>회원가입</Text>
        </TouchableOpacity>
        <Text style = {mainPageStyleSheet.authInfobar}> | </Text>
        <TouchableOpacity>
            <Text style={mainPageStyleSheet.authInfoText}>아이디 찾기</Text>
        </TouchableOpacity>
        <Text style = {mainPageStyleSheet.authInfobar}> | </Text>
        <TouchableOpacity>
            <Text style={mainPageStyleSheet.authInfoText}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
      <View style={mainPageStyleSheet.snsLoginButtonContainer}>
        <TouchableOpacity style={mainPageStyleSheet.kakaoLoginButton}>
            <Kakaosvg />
            <Text style={mainPageStyleSheet.snsLoginButtonText}>카카오 아이디로 로그인하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={mainPageStyleSheet.googleLoginButton}>
            <Googlesvg />
            <Text style={mainPageStyleSheet.snsLoginButtonText}>구글 아이디로 로그인하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;