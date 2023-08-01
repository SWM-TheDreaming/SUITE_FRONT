import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useForm from '../../../hook/useForm';
import mainPageStyleSheet from '../../../style/style';
import { RootStackNavigationProp } from '../Login';
import Icon from 'react-native-vector-icons/Ionicons';
import InputField from '../../../components/presents/InputField';

const EmailAuthentication = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const emailAuthentication = useForm();
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlePasswordConfirmationChange = (text: string) => {
    setPasswordConfirmation(text);
  };
  const validatePassword = () => {
    return emailAuthentication.getTextInputProps('password').value === passwordConfirmation;
  };

  const handleButtonPress = () => {
    navigation.navigate('UserInformation'); //로그인 API 연동
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
          autoFocus
          placeholder=" 이메일을 입력해주세요"
          {...emailAuthentication.getTextInputProps('username')}
          touched={emailAuthentication.touched.username}
        />
        <Text>{<Text style={mainPageStyleSheet.idPwInputErrorText}>{emailAuthentication.errors.username}</Text>}</Text>
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
