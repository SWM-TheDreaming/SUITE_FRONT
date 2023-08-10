import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import suiteRoomForm from '../../hook/suiteRoomForm';
import InputField from '../../components/presents/InputField';
import * as Progress from 'react-native-progress';
import { useSetRecoilState } from 'recoil';
import { Dimensions } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Category } from '../../data/Categoty';
import DatePickerModal from '../../components/presents/DatePickermodal';
import NumberInputField from '../../components/presents/NumberInputField';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoomRule = () => {
  const suiteRoomRule = suiteRoomForm();
  const [selectedCategory, setselectedCategory] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [recruitmentDeadLine, setrecruitmentDeadLine] = useState(new Date());
  const [studyDeadLine, setstudyDeadLine] = useState(new Date());
  const [participantCount, setParticipantCount] = useState(1);
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleButtonPress = () => {
    navigation.navigate('SuiteRoomurl');
  };
  useEffect(() => {
    if (
      suiteRoomRule.getTextInputProps('depositAmount').value != '' &&
      selectedCategory != '' &&
      participantCount >= 2 &&
      recruitmentDeadLine != null &&
      studyDeadLine != null
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [
    suiteRoomRule.getTextInputProps('depositAmount').value,
    selectedCategory,
    recruitmentDeadLine,
    studyDeadLine,
    participantCount,
  ]);
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <TouchableOpacity
          style={mainPageStyleSheet.pageBackIcon}
          onPress={() => {
            navigation.navigate('Studylist');
          }}
        >
          <Icon name="chevron-back" size={24} color={'#000000'} />
        </TouchableOpacity>
        <Text style={mainPageStyleSheet.SignUpText}>Suite Room 개설</Text>
      </View>
      <Progress.Bar
        progress={0.6}
        height={2}
        width={Dimensions.get('window').width}
        color={'#005BA5'}
        borderRadius={0}
        borderColor={'white'}
        unfilledColor={'#E8E8E8'}
      />

      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>보증 금액</Text>
        <InputField
          style={mainPageStyleSheet.idpwInputBox}
          autoFocus
          placeholder=" 보증금액을 입력해주세요"
          keyboardType="number-pad"
          {...suiteRoomRule.getTextInputProps('depositAmount')}
          touched={suiteRoomRule.touched.title}
        />
      </View>
      <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        <TouchableOpacity
          style={[mainPageStyleSheet.SignUpNextBtnBtn, isButtonDisabled && mainPageStyleSheet.disabledSignUpNextBtnBtn]}
          disabled={isButtonDisabled}
          onPress={() => {
            handleButtonPress();
          }}
        >
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuiteRoomRule;
