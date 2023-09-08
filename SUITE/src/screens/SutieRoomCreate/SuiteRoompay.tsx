import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Header } from '../../hook/header';
import suiteRoomForm from '../../hook/suiteRoomForm';
import { useRecoilValue } from 'recoil';
import { useSetRecoilState } from 'recoil';
import { depositAmountState, payNameState } from '../../../recoil/atoms';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoompay = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const suiteRoomPay = suiteRoomForm();
  const depositAmount = useRecoilValue(depositAmountState);
  const setPayNameState = useSetRecoilState(payNameState);
  const [point, setPoint] = useState(30000);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleButtonPress = () => {
    setPayNameState(suiteRoomPay.getTextInputProps('name').value);
    //스터디룸 생성 API 코드 연동 예정
    navigation.navigate('SuiteRoomCreateComplete');
  };
  useEffect(() => {
    if (point < depositAmount) {
      setIsButtonDisabled(true);
    }
  }, []);
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <Header title="Suite Room 체크인" backScreen="SuiteRoomurl" />
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>현재 포인트</Text>
        <View style={mainPageStyleSheet.depositCheckBox}>
          <Text>{point}원</Text>
        </View>
        <Text style={mainPageStyleSheet.noValidateCheckText}>보증 금액</Text>
        <View style={mainPageStyleSheet.depositCheckBox}>
          <Text>{depositAmount}원</Text>
        </View>
        <Text style={mainPageStyleSheet.noValidateCheckText}>차감후 남은 포인트</Text>
        <View style={mainPageStyleSheet.depositCheckBox}>
          <Text>{point - depositAmount}원</Text>
        </View>
        <Text style={mainPageStyleSheet.idPwInputErrorText}>{suiteRoomPay.errors.name}</Text>
        {isButtonDisabled === true ? (
          <View style={mainPageStyleSheet.depositInformationContainer}>
            <View style={mainPageStyleSheet.depositInformationTextContainer}>
              <Icon
                name="exclamation-circle"
                size={15}
                color={'#F14A4A'}
                style={mainPageStyleSheet.depositInformationIcon}
              />
              <Text style={mainPageStyleSheet.depositInformationText}>주의사항</Text>
            </View>
            <Text style={mainPageStyleSheet.depositDetailInformationText}>• 보증금을 확인해주세요!</Text>
            <Text style={mainPageStyleSheet.depositDetailInformationText}>
              • 포인트가 부족하여 방 생성이 불가합니다!
            </Text>
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
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>납부하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuiteRoompay;
