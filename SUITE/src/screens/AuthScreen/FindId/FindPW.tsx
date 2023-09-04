import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useForm from '../../../hook/useForm';
import mainPageStyleSheet from '../../../style/style';
import { RootStackNavigationProp } from '../Login';
import Icon from 'react-native-vector-icons/Ionicons';
import InputField from '../../../components/presents/InputField';
import { useRecoilState } from 'recoil';
import { emailState } from '../../../../recoil/atoms'; // Recoil 상태를 정의한 파일 임포트
import { emailAuthenticationCodeApi } from '../../../api/Sign/emailAutheticationCode';
const FindPW = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const emailAuthentication = useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [verifyCode, setVerifyCode] = useState('aa')
  const [visible, setVisible] = useState(false);
  const [phonAuthenticationButtonDisabled, setPhonAuthenticationButtonDisabled] = useState(true)
  const [authenticationCode, setauthenticationCode] = useState('');
  const [email, setEmail] = useRecoilState(emailState);

  const handleSendButtonPress = async () =>{
    setVisible(true)
    const code = await emailAuthenticationCodeApi(emailAuthentication.getTextInputProps('username').value);
    console.log(code)
    setVerifyCode(code)
  }
  const handleAuthencticationCodeChange = (text: string) => {
    setauthenticationCode(text);
  };
  const validateCode = () => {
    return verifyCode === authenticationCode;
  };
  const handleButtonPress = () => {
    setEmail(emailAuthentication.getTextInputProps('username').value)
    navigation.navigate('NewPW')
  };

  useEffect(() => {
    if (emailAuthentication.errors.username == '') {
        setPhonAuthenticationButtonDisabled(false);
    } else {
        setPhonAuthenticationButtonDisabled(true);
    }
  }, [emailAuthentication.errors.username]);
  useEffect(() => {
    if (!validateCode()) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [validateCode]);
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <TouchableOpacity
          style={mainPageStyleSheet.pageBackIcon}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Icon name="chevron-back" size={24} color={'#000000'} />
        </TouchableOpacity>
        <Text style={mainPageStyleSheet.SignUpText}>비밀번호 찾기</Text>
      </View>
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>이메일</Text>
        <View style={{flexDirection : 'row'}}>
        <InputField
            style = {mainPageStyleSheet.phoneNumInputBox}
          placeholder=" 이메일을 입력해주세요"
          {...emailAuthentication.getTextInputProps('username')}
          touched={emailAuthentication.touched.username}
        />
         <View style={mainPageStyleSheet.phoneAuthenticateCodeContainer}>
                <TouchableOpacity 
                    style={[mainPageStyleSheet.phoneAuthenticateCodeButtonNotDisabled, phonAuthenticationButtonDisabled && mainPageStyleSheet.phoneAuthenticateCodeButton]} 
                    disabled={phonAuthenticationButtonDisabled}
                    onPress = {() =>{handleSendButtonPress()}}
                >
                    <Text style={mainPageStyleSheet.phonAuthenticateCodeText}>인증번호 발송</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Text style={mainPageStyleSheet.idPwInputErrorText}>{emailAuthentication.errors.username}</Text>
        
      </View>
      {visible === true ?
      <View style={mainPageStyleSheet.FindPwemailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>인증코드</Text>
        <InputField
          autoFocus
          placeholder="인증코드를 입력해주세요"
          onChangeText={handleAuthencticationCodeChange}
        />
        {!validateCode() && <Text style={mainPageStyleSheet.idPwInputErrorText}>코드가 일치하지 않습니다.</Text>}
      </View>
    : null}
      <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        <TouchableOpacity
          style={[mainPageStyleSheet.SignUpNextBtnBtn, isButtonDisabled && mainPageStyleSheet.disabledSignUpNextBtnBtn]}
          disabled={isButtonDisabled}
          onPress={() => {
            handleButtonPress();
          }}
        >
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FindPW;
