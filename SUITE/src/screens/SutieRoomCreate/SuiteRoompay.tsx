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
import { depositAmountState, suiteRoomIdState, tokenState } from '../../../recoil/atoms';
import { SuiteRoomPay } from '../../api/SuiteRoom/SuiteRoomPay';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoompay = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const suiteRoomNum = useRecoilValue(suiteRoomIdState);
  const suiteRoomPay = suiteRoomForm();
  const depositAmount = useRecoilValue(depositAmountState);
  const token = useRecoilValue(tokenState);
  const [point, setPoint] = useState(30000);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleButtonPress = () => {
    payCheck();
    navigation.navigate('SuiteRoomCreateComplete');
  };
  const payCheck = () => {
    SuiteRoomPay(token, parseInt(suiteRoomNum));
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
            <Text style={mainPageStyleSheet.depositDetailInformationText}>
              • 포인트가 부족하여 방 생성이 불가합니다!
            </Text>
            <Text style={mainPageStyleSheet.depositDetailInformationText}>
              • 포인트 충전 후 스위트룸 생성을 완료해주세요!
            </Text>
          </View>
        ) : null}
      </View>
      <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        {isButtonDisabled === false ? (
          <TouchableOpacity
            style={mainPageStyleSheet.SignUpNextBtnBtn}
            onPress={() => {
              handleButtonPress();
            }}
          >
            <Text style={mainPageStyleSheet.SignUpNextBtnText}>납부하기</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={mainPageStyleSheet.SignUpNextBtnBtn}
            onPress={() => {
              handleButtonPress();
            }}
          >
            <Text style={mainPageStyleSheet.SignUpNextBtnText}>포인트 충전하기</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SuiteRoompay;
