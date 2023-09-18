import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import suiteRoomForm from '../../hook/suiteRoomForm';
import { useRecoilValue } from 'recoil';
import {
  suiteRoomState,
  recruitmentDeadLineState,
  studyDeadLineState,
  recruitmentLimitState,
  depositAmountState,
  minAttendanceRateState,
  minMissionCompleteRateState,
  studyPasswordState,
  isOnlineState,
  contentState,
  channelLinkState,
  payNameState,
  subjectState,
  tokenState,
} from '../../../recoil/atoms';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import convertStudyValue from '../../data/ChangeCategory';
import { SuiteRoomCreateApi } from '../../api/SuiteRoom/SuiteRoomCreateApi';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoompayCheck = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const suiteRoomPay = suiteRoomForm();
  const token = useRecoilValue(tokenState);
  const suiteRoom = useRecoilValue(suiteRoomState);
  const subject = useRecoilValue(subjectState);
  const recruitmentDeadLine = useRecoilValue(recruitmentDeadLineState);
  const studyDeadLine = useRecoilValue(studyDeadLineState);
  const recruitmentLimit = useRecoilValue(recruitmentLimitState);
  const depositAmount = useRecoilValue(depositAmountState);
  const payName = useRecoilValue(payNameState);

  const handleCopyToClipboard = () => {
    Clipboard.setString('농협 352-0514-9812-13');
  };

  const handleButtonPress = () => {
    navigation.navigate('Studylist');
  };
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.payInfoText}>아래내역으로 입금해주세요</Text>
        <Text style={mainPageStyleSheet.payInfosubText}>입금이 확인되면 카카오톡 채널로 알려드려요!</Text>
        <View style={mainPageStyleSheet.payCheckBox}>
          <Text style={mainPageStyleSheet.payCheckText}>입금자명 : {payName}</Text>
          <Text style={mainPageStyleSheet.payCheckText}>입금금액 : {depositAmount}원</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={mainPageStyleSheet.payCheckText}>계좌 정보 : 농협 352-0514-9812-13</Text>
            <View style={mainPageStyleSheet.accountNumberCopyBox}>
              <TouchableOpacity onPress={handleCopyToClipboard} style={mainPageStyleSheet.accountNumberCopyContainer}>
                <Text style={mainPageStyleSheet.accountNumberCopyText}>복사</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={mainPageStyleSheet.payCheckText}>예금주 : 유정협</Text>
        </View>
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
            • 3일 안에 입금하지 않으시면 자동 취소 됩니다
          </Text>
          <Text style={mainPageStyleSheet.depositDetailInformationText}>• 입금 완료 후 스터디 모집이 가능합니다</Text>
        </View>
      </View>
      <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        <TouchableOpacity
          style={mainPageStyleSheet.SignUpNextBtnBtn}
          onPress={() => {
            handleButtonPress();
          }}
        >
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>스터디 생성 완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuiteRoompayCheck;
