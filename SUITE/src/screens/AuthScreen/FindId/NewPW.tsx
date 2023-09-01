import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import useForm from '../../../hook/useForm';
import mainPageStyleSheet from '../../../style/style';
import { RootStackNavigationProp } from '../Login';
import Icon from 'react-native-vector-icons/Ionicons';
import InputField from '../../../components/presents/InputField';
import { useRecoilState } from 'recoil';
import { emailState } from '../../../../recoil/atoms'; // Recoil 상태를 정의한 파일 임포트
import ModalPopup from '../../../hook/modal';
import SignModalPopup from '../../../components/presents/SignmodalPopup';
import { FindPWApi } from '../../../api/Sign/FindPWApi';
const NewPW = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const emailAuthentication = useForm();
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useRecoilState(emailState);
  const [visible, setVisible] = useState(false);

  const handlePasswordConfirmationChange = (text: string) => {
    setPasswordConfirmation(text);
  };
  const closeModalAction = () =>{
      setVisible(false)
      navigation.navigate('Login')
  }

  const validatePassword = () => {
    return emailAuthentication.getTextInputProps('password').value === passwordConfirmation;
  };
  const handleButtonPress = () => {
    const emailValue = emailAuthentication.getTextInputProps('username').value;
    const passWordValue = emailAuthentication.getTextInputProps('password').value;
    FindPWApi(emailValue,passWordValue)
    setVisible(true)
  };

  useEffect(() => {
    if (emailAuthentication.errors.password == '' && validatePassword()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [emailAuthentication.errors.password, validatePassword]);

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
        <Text style={mainPageStyleSheet.SignUpText}>비밀번호 변경</Text>
      </View>
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>이메일</Text>
            <View style={mainPageStyleSheet.depositCheckBox}>
            <Text>{email}</Text>
            </View>
        <Text style={mainPageStyleSheet.idPwInputErrorText}>{emailAuthentication.errors.username}</Text>
        <Text style={mainPageStyleSheet.idpwtext}>새로운 비밀번호</Text>
        <InputField
          style={mainPageStyleSheet.idpwInputBox}
          placeholder=" 새로운 비밀번호를 입력해주세요"
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
        <SignModalPopup visible={visible} onClose={() => closeModalAction()} text={'비밀번호 변경이 완료되었습니다'} />
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

export default NewPW;
