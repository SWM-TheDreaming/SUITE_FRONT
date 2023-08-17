import React from 'react';
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import {Header} from "../../hook/header"
import SuiteRoomStyleSheet from "../../style/SuiteRoom"
import TagComponent from "../../components/presents/TagComponent"
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProgressCircle from 'react-native-progress-circle'
import mainPageStyleSheet from '../../style/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-clipboard/clipboard';

type SuiteRoomDetailRouteProp = RouteProp<RootStackParamList, 'SuiteRoomDetail'>;

interface SuiteRoomDetailProps {
  route: SuiteRoomDetailRouteProp;
}
const mockdata = 
    {
      id: '123',
      title: '임용 시험 합격 준비반 스터디 모집',
      content : `안녕하세요 임용 시험 합격 준비반 스터디 모집 합니다. 인원은 6명 정도 구할 예정이고요, 매주 월요일 대면으로 진행할 생각입니다.${'\n'} 모두 열심히 해서 보증금도 돌려받고, 임용시험도 합격해요!`,
      link :'open.kakao.talk/yujeonghyeop/testsafewafefdsvvdsvasvdfa',
      studyDeadLine: '2023-06-13',
      recruitmentDeadLine: '2023-06-13',
      category: '공무원',
      depositAmount: 10000,
      recruitmentLimit: 5,
      presentRecruitment: 2,
      writeDate: new Date('2023-06-13'),
      scrab: 5,
      minAttendanceRate : 80,
      minMissionCompleteRate : 90
    }
  ;
const SuiteRoomDetail: React.FunctionComponent<SuiteRoomDetailProps> = ({ route }) => {
  const { SuiteRoomid } = route.params;
  const handleCopyToClipboard = () => {
    Clipboard.setString(mockdata.link);
  };
  return (
    <ScrollView >
      <View style={SuiteRoomStyleSheet.SuiteRoomDetailContainer}>
          <Header title={''} backScreen= 'Studylist'/>
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailupperBox}>
          <TagComponent
              dDay="D-12"
              category={mockdata.category}
              depositAmount={`${mockdata.depositAmount.toString().slice(0, 2)}K`}
          />
          <Text style={SuiteRoomStyleSheet.SuiteRoomDetailTitle}>{mockdata.title}</Text>
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailUpperBox}>
              <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
                  <Feather name="users" size={20} color={'#686868'}/>
                  <Text style = {SuiteRoomStyleSheet.SuiteRoomBoxText}>참여인원</Text>
                  <Text style = {SuiteRoomStyleSheet.SuiteRoomBoxData}>{mockdata.presentRecruitment}/{mockdata.recruitmentLimit}</Text>
              </View>
              <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
                  <MaterialCommunityIcons name="timer-outline" size={20} color={'#686868'}/>
                  <Text style = {SuiteRoomStyleSheet.SuiteRoomBoxText}>모집기간</Text>
                  <Text style = {SuiteRoomStyleSheet.SuiteRoomBoxData}>{mockdata.recruitmentDeadLine}</Text>
              </View>
              <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
                  <MaterialCommunityIcons name="calendar-clock-outline" size={20} color={'#686868'}/>
                  <Text style = {SuiteRoomStyleSheet.SuiteRoomBoxText}>스터디기간</Text>
                  <Text style = {SuiteRoomStyleSheet.SuiteRoomBoxData}>{mockdata.studyDeadLine}</Text>
              </View>
              <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
                  <MaterialIcons name="payment" size={20} color={'#686868'}/>
                  <Text style = {SuiteRoomStyleSheet.SuiteRoomBoxText}>보증금</Text>
                  <Text style = {SuiteRoomStyleSheet.SuiteRoomBoxData}>{mockdata.depositAmount}원</Text>
              </View>
          </View>
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailContentContainer}>
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailContent}>{mockdata.content}</Text>
          </View>
          <View style={SuiteRoomStyleSheet.SuiteRoomLinkContainer}>
            <View style= {SuiteRoomStyleSheet.SuiteRoomLinkBox}>
              <TouchableOpacity onPress={handleCopyToClipboard}>
                <Feather name="clipboard" size={20} color={'black'}/>
              </TouchableOpacity>
              <Text numberOfLines={1} style={SuiteRoomStyleSheet.SuiteRoomLinkText}>{mockdata.link}</Text>
            </View>
          </View>
          <Text style={SuiteRoomStyleSheet.SuiteRoomDepositRuleText}>보증금 반환 조건</Text>
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarContainer}>
            <View style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBar}>
            <ProgressCircle
              percent={mockdata.minAttendanceRate}
              radius={65}
              borderWidth={45}
              color="#4CADA8"
              shadowColor="#E2FFFE"
              bgColor="white"
          >
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>{mockdata.minAttendanceRate}</Text>
          </ProgressCircle>
          <View style={SuiteRoomStyleSheet.SuiteRoomCirculaBarInfoContainer}>
            <Text style={SuiteRoomStyleSheet.SuiteRoomCircularBarInfoText}>최소 출석률</Text>
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInfoText}><Text style={SuiteRoomStyleSheet.SuiteRoomDetailminAttendanceText}>{mockdata.minAttendanceRate}%</Text> 이상 달성</Text>
            </View>
          </View>
            <View style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBar}>
          <ProgressCircle
              percent={mockdata.minMissionCompleteRate}
              radius={65}
              borderWidth={45}
              color="#A38AE7"
              shadowColor="#F0EBFF"
              bgColor="white"
          >
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>{mockdata.minMissionCompleteRate}%</Text>
           </ProgressCircle>
           <View style={SuiteRoomStyleSheet.SuiteRoomCirculaBarInfoContainer}>
              <Text style={SuiteRoomStyleSheet.SuiteRoomCircularBarInfoText}>최소 출석률</Text>
              <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInfoText}><Text style={SuiteRoomStyleSheet.SuiteRoomDetailminMissionCompleteRate}>{mockdata.minMissionCompleteRate}%</Text> 이상 달성</Text>
            </View>
          </View>
          </View>
          
          
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailInformationContainer}>
            <View style={mainPageStyleSheet.depositInformationTextContainer}>
              <FontAwesome name="exclamation-circle" size={15} color={'#F14A4A'} style={mainPageStyleSheet.depositInformationIcon}/>
              <Text style={mainPageStyleSheet.depositInformationText}>주의사항</Text>
            </View>
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInformationText}>전체 출석과 미션에 대해 최소 수치 이상 완료해야 보증금을 반환 받으실 수 있습니다.</Text>
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInformationText}>환급되지 못한 금액은 다른 스터디원들에게 나누어 집니다.</Text>
          </View>
          </View>
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailReaderButtonContainer}>
          {/* <TouchableOpacity style={SuiteRoomStyleSheet.SuiteRoomDetailCancelButton}>
            <Text style={mainPageStyleSheet.categortFilterResetText}>스터디 취소</Text>
          </TouchableOpacity>
          <TouchableOpacity style={SuiteRoomStyleSheet.SuiteRoomDetailUpdateyButton}>
            <Text style={mainPageStyleSheet.categortFilterApplyText}>스터디 수정</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={SuiteRoomStyleSheet.SuiteRoomDetailScrabButton}>
          <FontAwesome name="star-o" size={20} color={'#888888'}/>
          </TouchableOpacity>
          <TouchableOpacity style={SuiteRoomStyleSheet.SutieRoomDetailCheckinButton}>
            <Text style={mainPageStyleSheet.categortFilterApplyText}>체크인하기</Text>
          </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

export default SuiteRoomDetail;