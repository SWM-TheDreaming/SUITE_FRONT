import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Header } from '../../hook/header';
import InputField from '../../components/presents/InputField';
import suiteRoomForm from '../../hook/suiteRoomForm';
import { useRecoilValue } from 'recoil';
import { tokenState, suiteRoomIdState, depositAmountState, payNameState } from '../../../recoil/atoms';
import { LeaderMissionCreateApi } from '../../api/StudyRoom/LeaderMissionCreateApi';
import DatePickerModal from '../../components/presents/DatePickermodal';
import { AttendanceCreateApi } from '../../api/StudyRoom/AttendanceCreateApi';
import LeaderAttendanceModal from '../../components/presents/LeaderAttendanceModal';
import ImageModalPopup from '../../hook/ImageModal';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const CreateAttendance = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [visible, setVisible] = useState(false);
  const suiteRoomAttendace = suiteRoomForm();
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const CreateButtonPress = () => {
    readDashBoard();
  };
  const readDashBoard = async () => {
    try {
      const AttendanceCode = suiteRoomAttendace.getTextInputProps('attendanceCode').value;
      const datalist = await AttendanceCreateApi(tokenId, parseInt(SuiteRoomId), parseInt(AttendanceCode));
      if (datalist == 200) {
        setVisible(true);
      } else if (datalist == 400) {
        Alert.alert('이미 출석을 진행한 상태입니다!');
      }
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  useEffect(() => {
    if (suiteRoomAttendace.getTextInputProps('attendanceCode').value != '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [suiteRoomAttendace.getTextInputProps('attendanceCode').value]);
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <Header title="출석 생성" backScreen="LeaderTabBarNavigation" />
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>인증코드</Text>
        <View>
          <InputField
            style={mainPageStyleSheet.idpwInputBox}
            placeholder=" 세자리 숫자을 입력해 주세요"
            {...suiteRoomAttendace.getTextInputProps('attendanceCode')}
            touched={suiteRoomAttendace.touched.attendanceCode}
          />
        </View>
        <Text style={mainPageStyleSheet.depositRuleErrorText}>{suiteRoomAttendace.errors.attendanceCode}</Text>
      </View>
      <View style={mainPageStyleSheet.categoryFilterButtonContainer}>
        <TouchableOpacity
          style={mainPageStyleSheet.categoryFilterResetButton}
          onPress={() => {
            navigation.navigate('LeaderTabBarNavigation');
          }}
        >
          <Text style={mainPageStyleSheet.categortFilterResetText}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            mainPageStyleSheet.categoryFilterApplyButton,
            isButtonDisabled && mainPageStyleSheet.disabledSignUpNextBtnSmall,
          ]}
          onPress={() => CreateButtonPress()}
          disabled={isButtonDisabled}
        >
          <Text style={mainPageStyleSheet.categortFilterApplyText}>생성</Text>
        </TouchableOpacity>
      </View>
      <ImageModalPopup visible={visible}>
        <LeaderAttendanceModal
          visible={visible}
          onClose={() => navigation.navigate('LeaderTabBarNavigation')}
          text={'출석 번호는 10분 뒤 만료되니 \n 팀원들에게 빠르게 안내해주세요!'}
          number={parseInt(suiteRoomAttendace.getTextInputProps('attendanceCode').value)}
        />
      </ImageModalPopup>
    </View>
  );
};

export default CreateAttendance;
