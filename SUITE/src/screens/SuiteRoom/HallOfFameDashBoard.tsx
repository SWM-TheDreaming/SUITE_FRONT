import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProgressCircle from 'react-native-progress-circle';
import mainPageStyleSheet from '../../style/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { suiteRoomIdState, tokenState } from '../../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { SuiteRoomDetailView } from '../../api/SuiteRoom/SuiteroomDetail';
import convertStudyValueFromEngish from '../../data/ChangeCategoryFromEnglish';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import StudyStatusTable from '../../hook/studyStatusTable';
import { DashBoardApi } from '../../api/StudyRoom/DashBoardApi';
import HallofFameTagComponent from '../../components/presents/HallofFameTagComponent';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const HallOfFameDashboard = () => {
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const storedToken = useRecoilValue(tokenState);
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
  const navigation = useNavigation<RootStackNavigationProp>();
  const [member, setMember] = useState([]);

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
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  const readDashBoard = async () => {
    try {
      const datalist = await DashBoardApi(storedToken, parseInt(SuiteRoomId));
      setMember(datalist.otherDashBoardDto);
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  useEffect(() => {
    fetchData();
    readDashBoard();
  }, []);
  return (
    <ScrollView bounces={false} style={{ backgroundColor: 'white' }}>
      <View style={SuiteRoomStyleSheet.SuiteRoomDetailContainer}>
        <View style={SuiteRoomStyleSheet.SuiteRoomDetailupperBox}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <HallofFameTagComponent
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
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={SuiteRoomStyleSheet.AttendanceCheckStart}>
              <Text style={mainPageStyleSheet.categortFilterApplyText}>계약서 확인</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={SuiteRoomStyleSheet.ContractButtonConatiner}
              onPress={() => navigation.navigate('ContractTabNavigation')}
            >
              <FontAwesome5 name="file-contract" size={20} color={'#050953'} />
              <Text style={SuiteRoomStyleSheet.ContractButtonText}>계약서 이력</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={SuiteRoomStyleSheet.StudyStatusContainer}>
          <StudyStatusTable data={[{}, ...member]} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HallOfFameDashboard;
