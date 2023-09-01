import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, View, Text, TouchableOpacity, Button } from 'react-native';
import useForm from '../../../hook/useForm';
import mainPageStyleSheet from '../../../style/style';
import { RootStackNavigationProp } from '../Login';
import Icon from 'react-native-vector-icons/Ionicons';
import InputField from '../../../components/presents/InputField';
import { useRecoilState } from 'recoil';
import { emailState, isAuthState, passwordState } from '../../../../recoil/atoms'; // Recoil 상태를 정의한 파일 임포트
import ModalPopup from '../../../hook/modal';
import SignModalPopup from '../../../components/presents/SignmodalPopup';
import { API_URL } from '../../../../react-native.config';
const EmailAuthentication = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const emailAuthentication = useForm();
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useRecoilState(emailState);
  const [statusCode, setStatusCode] = useState(0);
  const [password, setpPassword] = useRecoilState(passwordState);
  const [isAuth, setIsAuth] = useRecoilState(isAuthState);
  const [visible, setVisible] = useState(false);

  const handlePasswordConfirmationChange = (text: string) => {
    setPasswordConfirmation(text);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/member/verification/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailAuthentication.getTextInputProps('username').value,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        navigation.navigate('AuthenticateCode');
      } else {
        const data = await response.json();
        setVisible(true);
        setStatusCode(data.code);
      }
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  const validatePassword = () => {
    return emailAuthentication.getTextInputProps('password').value === passwordConfirmation;
  };
  const handleButtonPress = () => {
    const emailValue = emailAuthentication.getTextInputProps('username').value;
    const passWordValue = emailAuthentication.getTextInputProps('password').value;
    setEmail(emailValue);
    setpPassword(passWordValue);
    setIsAuth(false);
    fetchData();
  };

  useEffect(() => {
    if (emailAuthentication.errors.username == '' && emailAuthentication.errors.password == '' && validatePassword()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [emailAuthentication.errors.username, emailAuthentication.errors.password, validatePassword]);

  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <TouchableOpacity
          style={mainPageStyleSheet.pageBackIcon}
          onPress={() => {
            navigation.navigate('TermOfUse');
          }}
        >
          <Icon name="chevron-back" size={24} color={'#000000'} />
        </TouchableOpacity>
        <Text style={mainPageStyleSheet.SignUpText}>이메일 인증</Text>
      </View>
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>이메일</Text>
        <InputField
          placeholder=" 이메일을 입력해주세요"
          {...emailAuthentication.getTextInputProps('username')}
          touched={emailAuthentication.touched.username}
        />
        <Text style={mainPageStyleSheet.idPwInputErrorText}>{emailAuthentication.errors.username}</Text>
        <Text style={mainPageStyleSheet.idpwtext}>비밀번호</Text>
        <InputField
          style={mainPageStyleSheet.idpwInputBox}
          placeholder=" 비밀번호를 입력해주세요"
          {...emailAuthentication.getTextInputProps('password')}
          touched={emailAuthentication.touched.password}
          secureTextEntry
        />
        <Text>{<Text style={mainPageStyleSheet.idPwInputErrorText}>{emailAuthentication.errors.password}</Text>}</Text>
        <Text style={mainPageStyleSheet.idpwtext}>비밀번호 재입력</Text>
        <InputField
          style={mainPageStyleSheet.idpwInputBox}
          placeholder=" 비밀번호를 다시 입력해주세요"
          onChangeText={handlePasswordConfirmationChange}
          touched={emailAuthentication.touched.password}
          secureTextEntry
        />
        {!validatePassword() && (
          <Text style={mainPageStyleSheet.idPwInputErrorText}>비밀번호가 일치하지 않습니다.</Text>
        )}
      </View>

      <ModalPopup visible={visible}>
        <SignModalPopup visible={visible} onClose={() => setVisible(false)} text={'이미 등록된 이메일이 있습니다!'} />
      </ModalPopup>

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

export default EmailAuthentication;
