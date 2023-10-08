import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../../style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { RootStackNavigationProp } from '../Login';
import useForm from '../../../hook/useForm';
import InputField from '../../../components/presents/InputField';
import { useRecoilState } from 'recoil';
import { phoneState } from '../../../../recoil/atoms';
import { PhoneAuthenticationCodeApi } from '../../../api/Sign/PhoneAuthenticationApi';
const PhoneAuthentication = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const signUp = useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [phonAuthenticationButtonDisabled, setPhonAuthenticationButtonDisabled] = useState(true);
  const [phone, setPhone] = useRecoilState(phoneState);
  const [authenticationCode, setauthenticationCode] = useState('aa');
  const [verifyCode, setverifyCode] = useState('aa');
  const [isViewDisabled, setIsViewDisabled] = useState(true);

  const getPhoneAuthenticationCode = async () => {
    try {
      const code = await PhoneAuthenticationCodeApi(signUp.getTextInputProps('phone').value);
      console.log(code);
      setverifyCode(code);
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  const handleAuthencticationCodeChange = (text: string) => {
    setauthenticationCode(text);
  };
  const handleSendButtonPress = () => {
    getPhoneAuthenticationCode();
    setIsViewDisabled(false);
  };

  const handleButtonPress = () => {
    const phoneValue = signUp.getTextInputProps('phone').value;
    setPhone(phoneValue);
    navigation.navigate('UserInformation');
  };

  const validateCode = () => {
    return verifyCode === authenticationCode;
  };

  useEffect(() => {
    if (signUp.errors.phone == '') {
      setPhonAuthenticationButtonDisabled(false);
    } else {
      setPhonAuthenticationButtonDisabled(true);
    }
  }, [signUp.errors.phone]);
  useEffect(() => {
    if (authenticationCode === verifyCode) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [authenticationCode]);

  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <TouchableOpacity
          style={mainPageStyleSheet.pageBackIcon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="chevron-back" size={24} color={'#000000'} />
        </TouchableOpacity>
        <Text style={mainPageStyleSheet.SignUpText}>전화번호 인증</Text>
      </View>
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>전화번호</Text>
        <View style={{ flexDirection: 'row' }}>
          <InputField
            style={mainPageStyleSheet.phoneNumInputBox}
            placeholder=" 전화번호 입력해주세요"
            {...signUp.getTextInputProps('phone')}
            touched={signUp.touched.phone}
          />
          <View style={mainPageStyleSheet.phoneAuthenticateCodeContainer}>
            <TouchableOpacity
              style={[
                mainPageStyleSheet.phoneAuthenticateCodeButtonNotDisabled,
                phonAuthenticationButtonDisabled && mainPageStyleSheet.phoneAuthenticateCodeButton,
              ]}
              disabled={phonAuthenticationButtonDisabled}
              onPress={() => {
                handleSendButtonPress();
              }}
            >
              <Text style={mainPageStyleSheet.phonAuthenticateCodeText}>인증번호 발송</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text>{<Text style={mainPageStyleSheet.idPwInputErrorText}>{signUp.errors.phone}</Text>}</Text>
        {isViewDisabled == false ? (
          <View>
            <Text style={mainPageStyleSheet.idpwtext}>인증코드</Text>
            <InputField
              autoFocus
              placeholder="인증코드를 입력해주세요"
              onChangeText={handleAuthencticationCodeChange}
            />
            {!validateCode() && <Text style={mainPageStyleSheet.idPwInputErrorText}>코드가 일치하지 않습니다.</Text>}
          </View>
        ) : null}
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

export default PhoneAuthentication;
