import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import {Header} from "../../hook/header"
import SuiteRoomStyleSheet from "../../style/SuiteRoom"
import TagComponent from "../../components/presents/TagComponent"
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


type SuiteRoomDetailRouteProp = RouteProp<RootStackParamList, 'SuiteRoomDetail'>;

interface SuiteRoomDetailProps {
  route: SuiteRoomDetailRouteProp;
}
const mockdata = 
    {
      id: '123',
      title: '임용 시험 합격 준비반 스터디 모집',
      studyDeadLine: '2023-06-13',
      recruitmentDeadLine: '2023-06-13',
      category: '공무원',
      depositAmount: 10000,
      recruitmentLimit: 5,
      presentRecruitment: 2,
      writeDate: new Date('2023-06-13'),
      scrab: 5,
    }
  ;
const SuiteRoomDetail: React.FunctionComponent<SuiteRoomDetailProps> = ({ route }) => {
  const { SuiteRoomid } = route.params;
  return (
    <ScrollView>
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
        </View>
    </View>
    </ScrollView>
  );
};

export default SuiteRoomDetail;