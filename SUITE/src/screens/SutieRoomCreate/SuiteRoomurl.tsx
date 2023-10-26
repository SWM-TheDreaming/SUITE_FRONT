import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import InputField from '../../components/presents/InputField';
import mainPageStyleSheet from '../../style/style';
import * as Progress from 'react-native-progress';
import suiteRoomForm from '../../hook/suiteRoomForm';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  channelLinkState,
  contentState,
  depositAmountState,
  isOnlineState,
  minAttendanceRateState,
  minMissionCompleteRateState,
  payNameState,
  recruitmentDeadLineState,
  recruitmentLimitState,
  studyDeadLineState,
  studyPasswordState,
  subjectState,
  suiteRoomState,
  tokenState,
  suiteRoomIdState,
} from '../../../recoil/atoms';
import { Header } from '../../hook/header';
import { SuiteRoomCreateApi } from '../../api/SuiteRoom/SuiteRoomCreateApi';
import convertStudyValue from '../../data/ChangeCategory';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoomurl = () => {
  const suiteRoomUrl = suiteRoomForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigation = useNavigation<RootStackNavigationProp>();
  const setcontentState = useSetRecoilState(contentState);
  const setchannelLinkState = useSetRecoilState(channelLinkState);
  const token = useRecoilValue(tokenState);
  const suiteRoom = useRecoilValue(suiteRoomState);
  const subject = useRecoilValue(subjectState);
  const recruitmentDeadLine = useRecoilValue(recruitmentDeadLineState);
  const studyDeadLine = useRecoilValue(studyDeadLineState);
  const recruitmentLimit = useRecoilValue(recruitmentLimitState);
  const depositAmount = useRecoilValue(depositAmountState);
  const minAttendanceRate = useRecoilValue(minAttendanceRateState);
  const minMissionCompleteRate = useRecoilValue(minMissionCompleteRateState);
  const studyPassword = useRecoilValue(studyPasswordState);
  const isPublic = useRecoilValue(isOnlineState);
  const setSuiteRomId = useSetRecoilState(suiteRoomIdState);
  const payName = useRecoilValue(payNameState);
  const suiteRoomCreate = async () => {
    try {
      const code = await SuiteRoomCreateApi(token, {
        title: suiteRoom,
        content: suiteRoomUrl.getTextInputProps('content').value,
        subject: convertStudyValue(subject),
        recruitmentDeadline: recruitmentDeadLine,
        studyDeadline: studyDeadLine,
        recruitmentLimit: recruitmentLimit,
        depositAmount: depositAmount,
        minAttendanceRate: minAttendanceRate,
        minMissionCompleteRate: minMissionCompleteRate,
        isPublic: isPublic,
        password: studyPassword,
        isOpen: false,
        channelLink: suiteRoomUrl.getTextInputProps('channelLink').value,
        studyMethod: 'ONLINE',
        contractAddress: null,
      });
      setSuiteRomId(code);
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  const handleButtonPress = () => {
    const content = suiteRoomUrl.getTextInputProps('content').value;
    const channelLink = suiteRoomUrl.getTextInputProps('channelLink').value;
    setcontentState(content);
    setchannelLinkState(channelLink); //할필요없음 나중에 코드 제거 필요
    suiteRoomCreate();
    navigation.navigate('SuiteRoomCreateComplete');
  };
  useEffect(() => {
    if (
      suiteRoomUrl.getTextInputProps('content').value != '' &&
      suiteRoomUrl.getTextInputProps('channelLink').value != ''
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [suiteRoomUrl.getTextInputProps('content').value, suiteRoomUrl.getTextInputProps('channelLink').value]);
  return (
    <KeyboardAwareScrollView>
      <View style={mainPageStyleSheet.categoryPageContainer}>
        <Header title="Suite Room 개설" backScreen="SuiteRoomRule" />
        <Progress.Bar
          progress={1.0}
          height={2}
          width={Dimensions.get('window').width}
          color={'#005BA5'}
          borderRadius={0}
          borderColor={'white'}
          unfilledColor={'#E8E8E8'}
        />

        <View style={mainPageStyleSheet.emailAuthenticationContainer}>
          <Text style={mainPageStyleSheet.idpwtext}>Suite Room 소개</Text>
          <InputField
            style={mainPageStyleSheet.roomInformationContainer}
            autoFocus
            placeholder=" Suite Room을 소개해주세요!"
            multiline={true}
            {...suiteRoomUrl.getTextInputProps('content')}
            touched={suiteRoomUrl.touched.content}
          />
          <Text style={mainPageStyleSheet.idPwInputErrorText}>{suiteRoomUrl.errors.content}</Text>

          <Text style={mainPageStyleSheet.idpwtext}>소통 창구</Text>
          <InputField
            style={mainPageStyleSheet.idpwInputBox}
            autoFocus
            placeholder=" 디스코드, 오픈 채팅방 등 소통 창구를 입력해주세요!"
            {...suiteRoomUrl.getTextInputProps('channelLink')}
            touched={suiteRoomUrl.touched.channelLink}
          />
          <Text style={mainPageStyleSheet.idPwInputErrorText}>{suiteRoomUrl.errors.channelLink}</Text>
        </View>

        <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
          <TouchableOpacity
            style={[
              mainPageStyleSheet.SignUpNextBtnBtn,
              isButtonDisabled && mainPageStyleSheet.disabledSignUpNextBtnBtn,
            ]}
            disabled={isButtonDisabled}
            onPress={() => {
              handleButtonPress();
            }}
          >
            <Text style={mainPageStyleSheet.SignUpNextBtnText}>Suite Room 개설하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SuiteRoomurl;
