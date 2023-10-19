import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../../style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { RootStackNavigationProp } from '../Login';
import useForm from '../../../hook/useForm';
import InputField from '../../../components/presents/InputField';
import { FindIdApi } from '../../../api/Sign/FindIdApi';
const FindId = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const signUp = useForm();
  const [phonAuthenticationButtonDisabled, setPhonAuthenticationButtonDisabled] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [infoText, setInfoText] = useState('');
  const [isViewDisabled, setIsViewDisabled] = useState(true);

  const getPhoneAuthenticationCode = async () => {
    try {
      const code = await FindIdApi(signUp.getTextInputProps('phone').value);
      if (code.statusCode == 200) {
        setInfoText('이메일 정보는 아래와 같습니다');
        setUserEmail(code.data.email);
      } else {
        setInfoText('가입한 이메일 내력이 존재하지 않습니다.');
        setUserEmail('');
      }
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  const handleSendButtonPress = () => {
    getPhoneAuthenticationCode();
    setIsViewDisabled(false);
  };

  const handleButtonPress = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    if (signUp.errors.phone == '') {
      setPhonAuthenticationButtonDisabled(false);
    } else {
      setPhonAuthenticationButtonDisabled(true);
    }
  }, [signUp.errors.phone]);

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
        <Text style={mainPageStyleSheet.SignUpText}>아이디 찾기</Text>
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
              <Text style={mainPageStyleSheet.phonAuthenticateCodeText}>입력 완료</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text>{<Text style={mainPageStyleSheet.idPwInputErrorText}>{signUp.errors.phone}</Text>}</Text>
        {isViewDisabled == false ? (
          <View>
            <Text style={mainPageStyleSheet.findEmailText}>{infoText}</Text>
            <View style={mainPageStyleSheet.findIdContainer}>
              <Text>{userEmail}</Text>
            </View>
          </View>
        ) : null}
      </View>
      <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        <TouchableOpacity
          style={mainPageStyleSheet.SignUpNextBtnBtn}
          onPress={() => {
            handleButtonPress();
          }}
        >
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>홈 화면으로 이동</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FindId;
