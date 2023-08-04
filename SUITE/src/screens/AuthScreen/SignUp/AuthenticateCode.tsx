import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../../style/style';
import { RootStackNavigationProp } from '../Login';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import InputField from '../../../components/presents/InputField';
import useForm from '../../../hook/useForm';
import { useRecoilValue } from 'recoil';
import { emailState } from '../../../../recoil/atoms';
const AuthenticateCode = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [verifyCode, setverifyCode] = useState('aa');
  const [authenticationCode, setauthenticationCode] = useState('');
  const emailAuthenticationCode = useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const email = useRecoilValue(emailState);
  const handleAuthencticationCodeChange = (text: string) => {
    setauthenticationCode(text);
  };
  const validateCode = () => {
    return verifyCode === authenticationCode;
  };
  const handleButtonPress = () => {
    navigation.navigate('UserInformation'); //로그인 API 연동
  };
  useEffect(() => {
    if (!validateCode()) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [validateCode]);
  useEffect(() => {
    console.log(email)
    const fetchData = async () => {
      try {
        const response = await fetch('http://semtle.catholic.ac.kr:8085/member/auth/mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setverifyCode(data.data.code);
        } else {
          const data = await response.json();
          console.log('Error occurred:', data);
        }
      } catch (error) {
        console.log('Error occurred:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <TouchableOpacity
          style={mainPageStyleSheet.pageBackIcon}
          onPress={() => {
            navigation.navigate('EmailAuthentication');
          }}
        >
          <Icon name="chevron-back" size={24} color={'#000000'} />
        </TouchableOpacity>
        <Text style={mainPageStyleSheet.SignUpText}>인증 코드 확인</Text>
      </View>
      <View style={mainPageStyleSheet.emailCodeAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>인증코드</Text>
        <InputField
          autoFocus
          placeholder="인증코드를 입력해주세요"
          onChangeText={handleAuthencticationCodeChange}
          touched={emailAuthenticationCode.touched.password}
        />
        {!validateCode() && <Text style={mainPageStyleSheet.idPwInputErrorText}>코드가 일치하지 않습니다.</Text>}
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

export default AuthenticateCode;
