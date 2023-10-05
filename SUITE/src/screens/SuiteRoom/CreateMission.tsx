import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
import ModalPopup from '../../hook/modal';
import CheckCancelModal from '../../hook/checkCancelModal';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const CreateMission = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [visible, setVisible] = useState(false);
  const [missionDeadLine, setMissionDeadLine] = useState(new Date());
  const suiteRoomMission = suiteRoomForm();
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const MissionCreate = () => {
    const missionName = suiteRoomMission.getTextInputProps('missionName').value;
    LeaderMissionCreateApi(tokenId, parseInt(SuiteRoomId), missionName, missionDeadLine);
    navigation.navigate('LeaderTabBarNavigation');
  };
  useEffect(() => {
    if (suiteRoomMission.getTextInputProps('missionName').value != '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [suiteRoomMission.getTextInputProps('missionName').value]);
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <Header title="미션 상세" backScreen="LeaderTabBarNavigation" />
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>제목</Text>
        <View>
          <InputField
            style={mainPageStyleSheet.idpwInputBox}
            placeholder=" 제목을 입력해 주세요"
            {...suiteRoomMission.getTextInputProps('missionName')}
            touched={suiteRoomMission.touched.missionName}
          />
        </View>
        <Text style={mainPageStyleSheet.depositRuleErrorText}>{suiteRoomMission.errors.missionName}</Text>
        <Text style={mainPageStyleSheet.idpwtext}>미션 마감일</Text>
        <DatePickerModal selectedDate={missionDeadLine} onDateChange={setMissionDeadLine} />
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
          onPress={() => setVisible(true)}
          disabled={isButtonDisabled}
        >
          <Text style={mainPageStyleSheet.categortFilterApplyText}>생성</Text>
        </TouchableOpacity>
      </View>
      <ModalPopup visible={visible}>
        <CheckCancelModal
          visible={visible}
          onClose={() => setVisible(false)}
          text={'미션을 생성하시겠습니까?'}
          onConfirm={() => MissionCreate()}
        />
      </ModalPopup>
    </View>
  );
};

export default CreateMission;
