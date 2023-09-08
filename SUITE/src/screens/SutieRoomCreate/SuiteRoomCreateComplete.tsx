import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Logo from '../../Icons/Logo.png';
import brandingText from '../../Icons/brandingText.png';
import mainPageStyleSheet from '../../style/style';
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
} from '../../../recoil/atoms';
import convertStudyValue from '../../data/ChangeCategory';
import { SuiteRoomCreateApi } from '../../api/SuiteRoom/SuiteRoomCreateApi';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Header } from '../../hook/header';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoomCreateComplete = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
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
  const content = useRecoilValue(contentState);
  const channelLink = useRecoilValue(channelLinkState);
  const payName = useRecoilValue(payNameState);

  const SuiteRoomCreate = async () => {
    try {
      const code = await SuiteRoomCreateApi({
        title: suiteRoom,
        content: content,
        subject: convertStudyValue(subject),
        recruitmentDeadline: recruitmentDeadLine,
        studyDeadline: studyDeadLine,
        recruitmentLimit: recruitmentLimit,
        depositAmount: depositAmount,
        minAttendanceRate: minAttendanceRate,
        minMissionCompleteRate: minMissionCompleteRate,
        isPublic: isPublic,
        password: parseInt(studyPassword),
        isOpen: false,
        channelLink: channelLink,
        studyMethod: 'ONLINE',
        contractAddress: null,
      });
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  useEffect(() => {
    console.log(suiteRoom);
    console.log(convertStudyValue(subject));
    console.log(recruitmentDeadLine);
    console.log(studyDeadLine);
    console.log(recruitmentLimit);
    console.log(minAttendanceRate);
    console.log(minMissionCompleteRate);
    console.log(studyPassword);
    console.log(content);
    console.log(channelLink);
    console.log(payName);
    console.log(isPublic);
    SuiteRoomCreate();
  }, []);
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
