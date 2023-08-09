import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../../style/style';
import Logo from '../../../Icons/Logo.png';
import brandingText from '../../../Icons/brandingText.png';
import { useNavigation } from '@react-navigation/core';
import { RootStackNavigationProp } from '../Login';

const SignUp = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={mainPageStyleSheet.loginContainer}>
      <View style={mainPageStyleSheet.signUpcompleteContainer}>
        <Image source={Logo} style={mainPageStyleSheet.logoStyle} />

        <View style={mainPageStyleSheet.brandingTextContainer}>
          <Image source={brandingText} />
        </View>
      </View>
      <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        <Text style={mainPageStyleSheet.signUpCompleteText}>회원가입이 완료되었습니다! 로그인 하러 가볼까요?</Text>
        <TouchableOpacity
          style={mainPageStyleSheet.SignUpNextBtnBtn}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>로그인 페이지로 이동</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
