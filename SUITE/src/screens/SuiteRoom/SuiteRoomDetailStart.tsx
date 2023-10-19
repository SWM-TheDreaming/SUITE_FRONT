import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from '../../hook/header';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import TagComponent from '../../components/presents/TagComponent';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProgressCircle from 'react-native-progress-circle';
import mainPageStyleSheet from '../../style/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Clipboard from '@react-native-clipboard/clipboard';
import {
  depositAmountState,
  hostState,
  suiteRoomIdState,
  suiteRoomStatusState,
  suiteRoomState,
  tokenState,
} from '../../../recoil/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { SuiteRoomDetailView } from '../../api/SuiteRoom/SuiteroomDetail';
import convertStudyValueFromEngish from '../../data/ChangeCategoryFromEnglish';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const mockdata = {
  id: '123',
  title: '임용 시험 합격 준비반 스터디 모집',
  content: `안녕하세요 임용 시험 합격 준비반 스터디 모집 합니다. 인원은 6명 정도 구할 예정이고요, 매주 월요일 대면으로 진행할 생각입니다.${'\n'} 모두 열심히 해서 보증금도 돌려받고, 임용시험도 합격해요!`,
  link: 'open.kakao.talk/yujeonghyeop/testsafewafefdsvvdsvasvdfa',
  studyDeadLine: '2023-06-13',
  recruitmentDeadLine: '2023-06-13',
  category: '공무원',
  depositAmount: 10000,
  recruitmentLimit: 5,
  presentRecruitment: 2,
  writeDate: new Date('2023-06-13'),
  scrab: 5,
  minAttendanceRate: 80,
  minMissionCompleteRate: 90,
};
const SuiteRoomDetailStart = () => {
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const [visible, setVisible] = useState(false);
  const [cancelVisible, setCancelVisible] = useState(false);
  const storedToken = useRecoilValue(tokenState);
  const setSuiteRoomTitleState = useSetRecoilState(suiteRoomState);
  const [channelLink, setChannelLink] = useState('');
  const [content, setContent] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [host, setHost] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [markCount, setMarkCount] = useState(0);
  const [minAttendanceRate, setMinAttendanceRate] = useState(0);
  const [minMissionCompleteRate, setMinMissionCompleteRate] = useState(0);
  const [participantCount, setParticipantCount] = useState(0);
  const [password, setPassword] = useState(0);
  const [recruitmentDeadLine, setRecruitmentDeadLine] = useState<string>('');
  const [recruitmentLimit, setRecruitmentLimit] = useState(0);
  const [studyDeadLine, setStudyDeadline] = useState<string>('');
  const [studyMethod, setStudyMethod] = useState('');
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [dday, setDday] = useState('');
  const [checkInVisible, setcheckInVisible] = useState(false);
  const setMoney = useSetRecoilState(depositAmountState);
  const setRoomId = useSetRecoilState(suiteRoomIdState);
  const fetchData = async () => {
    try {
      const datalist = await SuiteRoomDetailView(storedToken, parseInt(SuiteRoomId));
      setChannelLink(datalist.channelLink);
      setContent(datalist.content);
      setContractAddress(datalist.contractAddress);
      setDepositAmount(datalist.depositAmount);
      setHost(datalist.host);
      setIsOpen(datalist.isOpen);
      setIsPublic(datalist.isPublic);
      setMarkCount(datalist.markCount);
      setMinAttendanceRate(datalist.minAttendanceRate);
      setMinMissionCompleteRate(datalist.minMissionCompleteRate);
      setParticipantCount(datalist.participantCount);
      setPassword(datalist.password);
      setRecruitmentDeadLine(datalist.recruitmentDeadline);
      setRecruitmentLimit(datalist.recruitmentLimit);
      setStudyDeadline(datalist.studyDeadline);
      setStudyMethod(datalist.studyMethod);
      setSubject(datalist.subject);
      setTitle(datalist.title);
      setSuiteRoomTitleState(datalist.title);
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  const handleCopyToClipboard = () => {
    Clipboard.setString(channelLink);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(title);
  }, [title]);
  return (
    <ScrollView bounces={false}>
      <View style={SuiteRoomStyleSheet.SuiteRoomDetailContainer}>
        <View style={SuiteRoomStyleSheet.SuiteRoomDetailupperBox}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TagComponent
              dDay={'진행중'}
              category={convertStudyValueFromEngish(subject)}
              depositAmount={`${depositAmount.toString().slice(0, 2)}K`}
              isPublic={isPublic}
            />
          </View>
          <Text style={SuiteRoomStyleSheet.SuiteRoomDetailTitle}>{title}</Text>
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailUpperBox}>
            <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
              <Feather name="users" size={20} color={'#686868'} />
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxText}>참여인원</Text>
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxData}>
                {participantCount}/{recruitmentLimit}
              </Text>
            </View>
            <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
              <MaterialCommunityIcons name="timer-outline" size={20} color={'#686868'} />
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxText}>모집기간</Text>
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxData}>{recruitmentDeadLine.slice(0, 10)}</Text>
            </View>
            <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
              <MaterialCommunityIcons name="calendar-clock-outline" size={20} color={'#686868'} />
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxText}>스터디기간</Text>
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxData}>{studyDeadLine?.slice(0, 10)}</Text>
            </View>
            <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
              <MaterialIcons name="payment" size={20} color={'#686868'} />
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxText}>보증금</Text>
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxData}>{depositAmount}원</Text>
            </View>
          </View>
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailContentContainer}>
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailContent}>{content}</Text>
          </View>
          <View style={SuiteRoomStyleSheet.SuiteRoomLinkContainer}>
            <View style={SuiteRoomStyleSheet.SuiteRoomLinkBox}>
              <TouchableOpacity onPress={handleCopyToClipboard}>
                <Feather name="clipboard" size={20} color={'black'} />
              </TouchableOpacity>
              <Text numberOfLines={1} style={SuiteRoomStyleSheet.SuiteRoomLinkText}>
                {channelLink}
              </Text>
            </View>
          </View>
          <Text style={SuiteRoomStyleSheet.SuiteRoomDepositRuleText}>보증금 반환 조건</Text>
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarContainer}>
            <View style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBar}>
              <ProgressCircle
                percent={minAttendanceRate}
                radius={65}
                borderWidth={45}
                color="#4CADA8"
                shadowColor="#E2FFFE"
                bgColor="white"
              >
                <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>{minAttendanceRate}%</Text>
              </ProgressCircle>
              <View style={SuiteRoomStyleSheet.SuiteRoomCirculaBarInfoContainer}>
                <Text style={SuiteRoomStyleSheet.SuiteRoomCircularBarInfoText}>최소 출석률</Text>
                <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInfoText}>
                  <Text style={SuiteRoomStyleSheet.SuiteRoomDetailminAttendanceText}>{minAttendanceRate}%</Text> 이상
                  이상 달성
                </Text>
              </View>
            </View>
            <View style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBar}>
              <ProgressCircle
                percent={minMissionCompleteRate}
                radius={65}
                borderWidth={45}
                color="#A38AE7"
                shadowColor="#F0EBFF"
                bgColor="white"
              >
                <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>{minMissionCompleteRate}%</Text>
              </ProgressCircle>
              <View style={SuiteRoomStyleSheet.SuiteRoomCirculaBarInfoContainer}>
                <Text style={SuiteRoomStyleSheet.SuiteRoomCircularBarInfoText}>미션 달성률</Text>
                <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInfoText}>
                  <Text style={SuiteRoomStyleSheet.SuiteRoomDetailminMissionCompleteRate}>
                    {minMissionCompleteRate}%
                  </Text>{' '}
                  이상 달성
                </Text>
              </View>
            </View>
          </View>

          <View style={SuiteRoomStyleSheet.SuiteRoomDetailInformationContainer}>
            <View style={mainPageStyleSheet.depositInformationTextContainer}>
              <FontAwesome
                name="exclamation-circle"
                size={15}
                color={'#F14A4A'}
                style={mainPageStyleSheet.depositInformationIcon}
              />
              <Text style={mainPageStyleSheet.depositInformationText}>주의사항</Text>
            </View>
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInformationText}>
              전체 출석과 미션에 대해 최소 수치 이상 완료해야 보증금을 반환 받으실 수 있습니다.
            </Text>
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInformationText}>
              환급되지 못한 금액은 다른 스터디원들에게 나누어 집니다.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SuiteRoomDetailStart;
