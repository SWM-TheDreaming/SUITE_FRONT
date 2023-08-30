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
import { useSetRecoilState } from 'recoil';
import { depositAmountState, payNameState } from '../../../recoil/atoms';
import DatePickerModal from '../../components/presents/DatePickermodal';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const CreateMission = () => {
const navigation = useNavigation<RootStackNavigationProp>();
const [missionDeadLine, setMissionDeadLine] = useState(new Date());
const suiteRoomMission = suiteRoomForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleButtonPress = () => {
    const missionName = suiteRoomMission.getTextInputProps('missionName').value
    console.log(missionName)
    console.log(missionDeadLine)
    navigation.navigate('LeaderTabBarNavigation')
  };
  useEffect(() => {
    if (
        suiteRoomMission.getTextInputProps('missionName').value != '' 
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [
    suiteRoomMission.getTextInputProps('missionName').value
  ]);
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
        <TouchableOpacity style={mainPageStyleSheet.categoryFilterResetButton} onPress={()=>{navigation.navigate('LeaderTabBarNavigation')}}>
          <Text style={mainPageStyleSheet.categortFilterResetText}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={[mainPageStyleSheet.categoryFilterApplyButton, isButtonDisabled && mainPageStyleSheet.disabledSignUpNextBtnSmall]}
            onPress={handleButtonPress}
            disabled={isButtonDisabled}
            >
          <Text style={mainPageStyleSheet.categortFilterApplyText}>생성</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateMission;
