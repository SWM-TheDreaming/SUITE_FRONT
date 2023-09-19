import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Logo from '../../Icons/Logo.png';
import brandingText from '../../Icons/brandingText.png';
import mainPageStyleSheet from '../../style/style';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Header } from '../../hook/header';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoomCreateComplete = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={mainPageStyleSheet.loginContainer}>
      <Header title="Suite Room 체크인" backScreen="SuiteRoompay" />
      <View style={mainPageStyleSheet.signUpcompleteContainer}>
        <Image source={Logo} style={mainPageStyleSheet.logoStyle} />

        <View style={mainPageStyleSheet.brandingTextContainer}>
          <Image source={brandingText} />
        </View>
      </View>
      <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        <Text style={mainPageStyleSheet.signUpCompleteText}>
          스위트룸 생성이 완료되었습니다! 마이페이지에서 확인해보세요!
        </Text>
        <TouchableOpacity
          style={mainPageStyleSheet.SignUpNextBtnBtn}
          onPress={() => {
            navigation.navigate('Mystudy');
          }}
        >
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>마이페이지로 이동</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuiteRoomCreateComplete;
