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
import { useNavigation } from '@react-navigation/native';
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
  const [isAuth, setIsAuth] = useRecoilState(isAuthState);
  const [phone, setPhone] = useRecoilState(phoneState);
  const [preferStudy, setPreferStudy] = useRecoilState(preferStudyState);
  const [profileImage, setProfileImage] = useRecoilState(profileImageState);
  const SignOut = async () => {
    await AsyncStorage.removeItem('token');
    setToken(null);
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
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  useEffect(() => {
    getUserInfo(token);
  }, []);
  useEffect(() => {
    console.log(profileImage);
  }, [profileImage]);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={AnpServiceStyleSheet.MypageContainer}>
      <View style={AnpServiceStyleSheet.MyPageHeader}>
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
        <TouchableOpacity>
          <AntDesign name="setting" size={24} color={'black'} />
        </TouchableOpacity>
      </View>

      <View>
        <View style={{ flexDirection: 'row' }}>
          {profileImage.length > 5 ? (
            <Image source={{ uri: profileImage }} style={AnpServiceStyleSheet.choiceProfileImage} />
          ) : (
            <Image source={defaultImage} style={AnpServiceStyleSheet.choiceProfileImage} />
          )}
          <View style={AnpServiceStyleSheet.profileTextContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={AnpServiceStyleSheet.profileFirstText}>{nickname}</Text>
              <Text style={AnpServiceStyleSheet.profileNameText}>{name}</Text>
            </View>
            <Text style={AnpServiceStyleSheet.profileSecondText}>{email}</Text>
            {Authenticate === true ? (
              <View style={AnpServiceStyleSheet.IsAuthenticateContainer}>
                <Text style={AnpServiceStyleSheet.IsAuthenticateText}>계좌 인증 완료</Text>
              </View>
            ) : (
              <View style={AnpServiceStyleSheet.IsNotAuthenticateContainer}>
                <Text style={AnpServiceStyleSheet.IsNotAuthenticateText}>계좌 인증 필요</Text>
              </View>
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
          <View style={{ flexDirection: 'row' }}>
            <Text style={AnpServiceStyleSheet.ChoiceText}>진행중인 계약서</Text>
            <Text style={AnpServiceStyleSheet.ChoiceNumber}>6</Text>
          </View>
          <View>
            <MaterialIcons name="navigate-next" size={24} color={'black'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={AnpServiceStyleSheet.ChoiceContainer}>
          <View style={{ flexDirection: 'row' }}>
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
        <TouchableOpacity
          style={AnpServiceStyleSheet.ChoiceContainer}
          onPress={() => {
            SignOut();
          }}
        >
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

// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import mainPageStyleSheet from '../../style/style';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/core';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../types';
// import { Header } from '../../hook/header';
// import InputField from '../../components/presents/InputField';
// import suiteRoomForm from '../../hook/suiteRoomForm';
// import { useRecoilValue } from 'recoil';
// import { useSetRecoilState } from 'recoil';
// import { depositAmountState, payNameState } from '../../../recoil/atoms';
// export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

// const SuiteRoompay = () => {
//   const navigation = useNavigation<RootStackNavigationProp>();
//   const suiteRoomPay = suiteRoomForm();
//   const depositAmount = useRecoilValue(depositAmountState);
//   const setPayNameState = useSetRecoilState(payNameState);
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const handleButtonPress = () => {
//     setPayNameState(suiteRoomPay.getTextInputProps('name').value);
//     //스터디룸 생성 API 코드 연동 예정
//     navigation.navigate('SuiteRoompayCheck');
//   };
//   useEffect(() => {
//     if (suiteRoomPay.getTextInputProps('name').value != '') {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   }, [suiteRoomPay.getTextInputProps('name').value]);
//   return (
//     <View style={mainPageStyleSheet.categoryPageContainer}>
//       <Header title="Suite Room 체크인" backScreen="SuiteRoomurl" />
//       <View style={mainPageStyleSheet.emailAuthenticationContainer}>
//         <Text style={mainPageStyleSheet.idpwtext}>보증 금액</Text>
//         <View style={mainPageStyleSheet.depositCheckBox}>
//           <Text>{depositAmount}원</Text>
//         </View>
//         <Text style={mainPageStyleSheet.noValidateCheckText}>입금자명</Text>
//         <InputField
//           style={mainPageStyleSheet.idpwInputBox}
//           placeholder=" 입금자명을 입력해주세요"
//           {...suiteRoomPay.getTextInputProps('name')}
//           touched={suiteRoomPay.touched.name}
//         />
//         <Text style={mainPageStyleSheet.idPwInputErrorText}>{suiteRoomPay.errors.name}</Text>

//         <View style={mainPageStyleSheet.depositInformationContainer}>
//           <View style={mainPageStyleSheet.depositInformationTextContainer}>
//             <Icon
//               name="exclamation-circle"
//               size={15}
//               color={'#F14A4A'}
//               style={mainPageStyleSheet.depositInformationIcon}
//             />
//             <Text style={mainPageStyleSheet.depositInformationText}>주의사항</Text>
//           </View>
//           <Text style={mainPageStyleSheet.depositDetailInformationText}>• 입금은 즉시 해주세요!</Text>
//           <Text style={mainPageStyleSheet.depositDetailInformationText}>• 입금이 확인되면 체크인이 완료됩니다.</Text>
//         </View>
//       </View>
//       <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
//         <TouchableOpacity
//           style={[mainPageStyleSheet.SignUpNextBtnBtn, isButtonDisabled && mainPageStyleSheet.disabledSignUpNextBtnBtn]}
//           disabled={isButtonDisabled}
//           onPress={() => {
//             handleButtonPress();
//           }}
//         >
//           <Text style={mainPageStyleSheet.SignUpNextBtnText}>납부하기</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SuiteRoompay;
