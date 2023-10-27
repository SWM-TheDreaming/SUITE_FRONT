import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../recoil/atoms';
import { setStorage } from '../hook/asyncStorage';
import AnpServiceStyleSheet from '../style/AnPservice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import defaultImage from '../Icons/profile.png';
import SuiteRoomStyleSheet from '../style/SuiteRoom';
import ProgressCircle from 'react-native-progress-circle';
import {
  emailState,
  memberIdState,
  nameState,
  nicknameState,
  isAuthState,
  phoneState,
  preferStudyState,
  profileImageState,
} from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserInformation } from '../api/Sign/getUserInformation';
import { MyPointApi } from '../api/SuiteRoom/MyPointApi';
import { UserDeleteApi } from '../api/Sign/UserDeleteApi';
import ModalPopup from '../hook/modal';
import CheckCancelModal from '../hook/checkCancelModal';
import SignModalPopup from '../components/presents/SignmodalPopup';
import { launchImageLibrary } from 'react-native-image-picker';
import { sendProfileImageApi } from '../api/Sign/sendProfileImageApi';
import Logo22Size from '../Icons/Logo22Size.png';
import mainPageStyleSheet from '../style/style';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const Mypage = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [token, setToken] = useRecoilState(tokenState);
  const [Authenticate, setAuthenticate] = useState(false);
  const [ExistAlarm, setExistAlarm] = useState(false);
  const [img, setImageSource] = useState('');
  const [email, setEmail] = useRecoilState(emailState);
  const [memberId, setMemebrId] = useRecoilState(memberIdState);
  const [name, setName] = useRecoilState(nameState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [point, setPoint] = useState(0);
  const [isAuth, setIsAuth] = useRecoilState(isAuthState);
  const [phone, setPhone] = useRecoilState(phoneState);
  const [preferStudy, setPreferStudy] = useRecoilState(preferStudyState);
  const [attendanceAvgRate, setAttendanceAvgRate] = useState(0);
  const [attendanceCompleteCount, setAttendanceCompleteCount] = useState(0);
  const [missionAvgRate, setMissionAvgRate] = useState(0);
  const [missionCompleteCount, setMissionCompleteCount] = useState(0);
  const isFocused = useIsFocused();
  const [visible, setVisible] = useState(false);
  const [betaVisible, setBetaVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [actionType, setActionType] = useState(null);
  const [profileImage, setProfileImage] = useRecoilState(profileImageState);

  const handleSignOutPress = () => {
    setModalText('로그아웃 하시겠습니까?');
    setVisible(true);
    setActionType('send');
  };

  const handleUserDeletePress = () => {
    setModalText('회원 탈퇴 하시겠습니까?');
    setVisible(true);
    setActionType('cancel');
  };
  const SignOut = async () => {
    await AsyncStorage.removeItem('token');
    setToken(null);
  };
  const UserDelete = async () => {
    const datalist = await UserDeleteApi(token);
    await AsyncStorage.removeItem('token');
    setToken(null);
  };
  const readPoint = async () => {
    const point = await MyPointApi(token);
    setPoint(point);
  };
  const getUserInfo = async (token: string) => {
    try {
      const code = await getUserInformation(token);
      setEmail(code.email);
      setMemebrId(code.memberId);
      setName(code.name);
      setNickname(code.nickName);
      setIsAuth(code.isAuth);
      setPhone(code.phone);
      setPreferStudy(code.preferStudy);
      setProfileImage(code.profileURL);
      setAttendanceAvgRate(code.attendanceAvgRate);
      setAttendanceCompleteCount(code.attendanceCompleteCount);
      setMissionAvgRate(code.missionAvgRate);
      setMissionCompleteCount(code.missionCompleteCount);
      console.log(code);
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  function pickImg() {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 188,
        maxHeight: 188,
      },
      (response) => {
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log('Image Error : ' + response.errorCode);
        }
        console.log('response', response.assets[0].uri);
        setImageSource(response.assets[0].uri);
      },
    );
  }
  useEffect(() => {
    if (img.length > 10) {
      sendProfileImageApi(parseInt(memberId), img);
      getUserInfo(token);
    }
  }, [img]);
  useEffect(() => {
    readPoint();
    getUserInfo(token);
  }, []);
  useEffect(() => {
    //페이지 새로고침시 다시 리렌더링 가능
    readPoint();
    getUserInfo(token);
  }, [isFocused]);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={AnpServiceStyleSheet.MypageContainer}>
      <View style={AnpServiceStyleSheet.MyPageHeader}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Image source={Logo22Size} />
          </View>
          <Text style={mainPageStyleSheet.MainTextPosition}>{'마이 페이지'}</Text>
        </View>
        <TouchableOpacity
          style={AnpServiceStyleSheet.MypageHeaderIcon}
          onPress={() => {
            navigation.navigate('Alarm');
          }}
        >
          {ExistAlarm === true ? (
            <MaterialCommunityIcons name="bell-badge-outline" size={24} color={'black'} />
          ) : (
            <MaterialCommunityIcons name="bell-outline" size={24} color={'black'} />
          )}
        </TouchableOpacity>
      </View>

      <View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => pickImg()}>
            {profileImage.length > 5 ? (
              <Image source={{ uri: profileImage }} style={AnpServiceStyleSheet.choiceProfileImage} />
            ) : (
              <Image source={defaultImage} style={AnpServiceStyleSheet.choiceProfileImage} />
            )}
          </TouchableOpacity>
          <View style={AnpServiceStyleSheet.profileTextContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={AnpServiceStyleSheet.profileFirstText}>{nickname}</Text>
              <Text style={AnpServiceStyleSheet.profileNameText}>{name}</Text>
            </View>
            <Text style={AnpServiceStyleSheet.profileSecondText}>{email}</Text>
            <Text style={AnpServiceStyleSheet.profileSecondText}>남은 포인트 : {point.toLocaleString()} P</Text>
            {Authenticate === true ? (
              <View style={AnpServiceStyleSheet.IsAuthenticateContainer}>
                <Text style={AnpServiceStyleSheet.IsAuthenticateText}>계좌 인증 완료</Text>
              </View>
            ) : (
              <TouchableOpacity
                style={AnpServiceStyleSheet.IsNotAuthenticateContainer}
                onPress={() => setBetaVisible(true)}
              >
                <Text style={AnpServiceStyleSheet.IsNotAuthenticateText}>계좌 인증 필요</Text>
              </TouchableOpacity>
            )}
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
              percent={attendanceAvgRate * 100}
              radius={65}
              borderWidth={45}
              color="#4CADA8"
              shadowColor="#E2FFFE"
              bgColor="white"
            >
              <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>{attendanceAvgRate * 100}%</Text>
            </ProgressCircle>
          </View>
        </View>
        <View style={SuiteRoomStyleSheet.MissionCircleBox}>
          <View>
            <Text style={SuiteRoomStyleSheet.DepositDayInfoText}>평균 미션달성률</Text>
          </View>
          <View style={SuiteRoomStyleSheet.AttendanceMissionBox}>
            <ProgressCircle
              percent={missionAvgRate * 100}
              radius={65}
              borderWidth={45}
              color="#A38AE7"
              shadowColor="#F0EBFF"
              bgColor="white"
            >
              <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>{missionAvgRate * 100}%</Text>
            </ProgressCircle>
          </View>
        </View>
      </View>
      {/* <View style={AnpServiceStyleSheet.TotalInfoContainer}>
        <View style={SuiteRoomStyleSheet.MyPageAttendanceBox}>
          <Text style={SuiteRoomStyleSheet.DepositDayInfoText}>전체 출석 횟수</Text>
          <Text style={SuiteRoomStyleSheet.DepositDayText}>{attendanceCompleteCount}회</Text>
        </View>
        <View style={SuiteRoomStyleSheet.MyPageMissionBox}>
          <Text style={SuiteRoomStyleSheet.DepositDayInfoText}>전체 달성 미션</Text>
          <Text style={SuiteRoomStyleSheet.DepositDayText}>{missionCompleteCount}개</Text>
        </View>
      </View> */}
      <View style={AnpServiceStyleSheet.MyPageUserChoice}>
        <TouchableOpacity style={AnpServiceStyleSheet.ChoiceContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={AnpServiceStyleSheet.ChoiceText}>전체 출석 횟수</Text>
          </View>
          <View>
            <Text style={SuiteRoomStyleSheet.DepositDayText}>{attendanceCompleteCount}회</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={AnpServiceStyleSheet.ChoiceContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={AnpServiceStyleSheet.ChoiceText}>전체 달성 미션</Text>
          </View>
          <View>
            <Text style={SuiteRoomStyleSheet.DepositDayText}>{missionCompleteCount}개</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={AnpServiceStyleSheet.ChoiceContainer}
          onPress={() => navigation.navigate('ContractFind')}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={AnpServiceStyleSheet.ChoiceText}>계약서 확인하기</Text>
          </View>
          <View>
            <MaterialIcons name="navigate-next" size={24} color={'black'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={AnpServiceStyleSheet.ChoiceContainer}
          onPress={() => {
            navigation.navigate('ScrabList');
          }}
        >
          <Text style={AnpServiceStyleSheet.ChoiceText}>스크랩한 스터디</Text>
          <MaterialIcons name="navigate-next" size={24} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={AnpServiceStyleSheet.ChoiceContainer} onPress={() => setBetaVisible(true)}>
          <Text style={AnpServiceStyleSheet.ChoiceText}>계좌 인증하러가기</Text>
          <MaterialIcons name="navigate-next" size={24} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={AnpServiceStyleSheet.ChoiceContainer}
          onPress={() => {
            handleSignOutPress();
          }}
        >
          <Text style={AnpServiceStyleSheet.ChoiceText}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={AnpServiceStyleSheet.ChoiceContainer}
          onPress={() => {
            handleUserDeletePress();
          }}
        >
          <Text style={AnpServiceStyleSheet.ChoiceText}>회원 탈퇴</Text>
        </TouchableOpacity>
        <ModalPopup visible={visible}>
          <CheckCancelModal
            visible={visible}
            onClose={() => setVisible(false)}
            text={modalText}
            onConfirm={() => (actionType === 'send' ? SignOut() : UserDelete())}
          />
        </ModalPopup>
        <ModalPopup visible={betaVisible}>
          <SignModalPopup visible={betaVisible} onClose={() => setBetaVisible(false)} text={'정식버전에 오픈됩니다!'} />
        </ModalPopup>
        <TouchableOpacity style={AnpServiceStyleSheet.ChoiceContainer}>
          <Text style={AnpServiceStyleSheet.ChoiceText}></Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Mypage;
