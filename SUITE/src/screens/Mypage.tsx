import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../recoil/atoms';
import { setStorage } from '../hook/asyncStorage';
import AnpServiceStyleSheet from '../style/AnPservice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';
import defaultImage from '../Icons/profile.png';
import SuiteRoomStyleSheet from '../style/SuiteRoom';
import ProgressCircle from 'react-native-progress-circle';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const Mypage = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [token, setToken] = useRecoilState(tokenState);
  const [Authenticate, setAuthenticate] = useState(false)
  const [ExistAlarm, setExistAlarm] = useState(false)
  const [img, setImageSource] = useState('');
  const SignOut = async () => {
    setStorage('token', JSON.stringify(null));
    setToken('');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={AnpServiceStyleSheet.MypageContainer}>
      <View style={AnpServiceStyleSheet.MyPageHeader}>
        <TouchableOpacity style={AnpServiceStyleSheet.MypageHeaderIcon} onPress = {() =>{navigation.navigate('Alarm')}}>
          {ExistAlarm === true ?
              <MaterialCommunityIcons name="bell-badge-outline" size={24} color={'black'} />
            : <MaterialCommunityIcons name="bell-outline" size={24} color={'black'} />
          }
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="setting" size={24} color={'black'} />
        </TouchableOpacity>
      </View>

      <View>
        <View style={{flexDirection :'row'}}>
        {img ?
        <Image source={{ uri: img }} style={AnpServiceStyleSheet.choiceProfileImage} />
        : 
        <Image source={defaultImage} style={AnpServiceStyleSheet.choiceProfileImage} />
        }
        <View style={AnpServiceStyleSheet.profileTextContainer}>
          <View style= {{flexDirection :'row', alignItems : 'center'}}>
            <Text style={AnpServiceStyleSheet.profileFirstText}>hwany</Text>
            <Text style={AnpServiceStyleSheet.profileNameText}>반영환</Text>
          </View>
          <Text style={AnpServiceStyleSheet.profileSecondText}>hwany@gmail.com</Text>
          { Authenticate === true ?
          <View style={AnpServiceStyleSheet.IsAuthenticateContainer}>
            <Text style={AnpServiceStyleSheet.IsAuthenticateText}>계좌 인증 완료</Text>
          </View>
          :
          <View style={AnpServiceStyleSheet.IsNotAuthenticateContainer}>
            <Text style={AnpServiceStyleSheet.IsNotAuthenticateText}>계좌 인증 필요</Text>
          </View>
      }
          </View> 
      </View>
      </View>
      <View style={SuiteRoomStyleSheet.CircleProgressContainer}>
            <View style={SuiteRoomStyleSheet.AttendanceCircleBox}>
              <View>
                <Text style={SuiteRoomStyleSheet.DepositDayInfoText}>평균 출석률</Text>
              </View>
              <View style={SuiteRoomStyleSheet.AttendanceMissionBox}>
                <ProgressCircle
                  percent={80}
                  radius={65}
                  borderWidth={45}
                  color="#4CADA8"
                  shadowColor="#E2FFFE"
                  bgColor="white"
                >
                  <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>80%</Text>
                </ProgressCircle>
              </View>
            </View>
            <View style={SuiteRoomStyleSheet.MissionCircleBox}>
              <View>
                <Text style={SuiteRoomStyleSheet.DepositDayInfoText}>평균 미션달성률</Text>
              </View>
              <View style={SuiteRoomStyleSheet.AttendanceMissionBox}>
                <ProgressCircle
                  percent={90}
                  radius={65}
                  borderWidth={45}
                  color="#A38AE7"
                  shadowColor="#F0EBFF"
                  bgColor="white"
                >
                  <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>90%</Text>
                </ProgressCircle>
              </View>
            </View>
          </View>
          <View style={AnpServiceStyleSheet.TotalInfoContainer}>
            <View style={SuiteRoomStyleSheet.DepositBox}>
              <Text style={SuiteRoomStyleSheet.DepositDayInfoText}>전체 출석 횟수</Text>
              <Text style={SuiteRoomStyleSheet.DepositDayText}>133회</Text>
            </View>
            <View style={SuiteRoomStyleSheet.DayBox}>
              <Text style={SuiteRoomStyleSheet.DepositDayInfoText}>전체 달성 미션</Text>
              <Text style={SuiteRoomStyleSheet.DepositDayText}>470개</Text>
            </View>
          </View>
          <View style={AnpServiceStyleSheet.MyPageUserChoice}>
            <TouchableOpacity style={AnpServiceStyleSheet.ChoiceContainer}>
              <View style={{flexDirection : 'row'}}>
                <Text style={AnpServiceStyleSheet.ChoiceText}>진행중인 계약서</Text>
                <Text style={AnpServiceStyleSheet.ChoiceNumber}>6</Text>
              </View>
              <View>
                <MaterialIcons name="navigate-next" size={24} color={'black'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={AnpServiceStyleSheet.ChoiceContainer}>
              <View style={{flexDirection : 'row'}}>
                <Text style={AnpServiceStyleSheet.ChoiceText}>완료된 계약서</Text>
                <Text style={AnpServiceStyleSheet.ChoiceNumber}>32</Text>
              </View>
              <View>
                <MaterialIcons name="navigate-next" size={24} color={'black'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={AnpServiceStyleSheet.ChoiceContainer}>
              <Text style={AnpServiceStyleSheet.ChoiceText}>스크랩한 스터디</Text>
              <MaterialIcons name="navigate-next" size={24} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={AnpServiceStyleSheet.ChoiceContainer}>
              <Text style={AnpServiceStyleSheet.ChoiceText}>계좌 인증하러가기</Text>
              <MaterialIcons name="navigate-next" size={24} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={AnpServiceStyleSheet.ChoiceContainer} onPress = {()=>{SignOut}}>
              <Text style={AnpServiceStyleSheet.ChoiceText}>로그아웃</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AnpServiceStyleSheet.ChoiceContainer}>
              <Text style={AnpServiceStyleSheet.ChoiceText}></Text>
            </TouchableOpacity>
          </View>
    </ScrollView>
  );
};

export default Mypage;
