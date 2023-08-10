import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';
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
import { Header } from '../../hook/header';
import {
  recruitmentDeadLineState,
  recruitmentLimitState,
  studyDeadLineState,
  subjectState,
  suiteRoomState,
} from '../../../recoil/atoms';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoomInfo = () => {
  const suiteRoomInfo = suiteRoomForm();
  const [selectedCategory, setselectedCategory] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [recruitmentDeadLine, setrecruitmentDeadLine] = useState(new Date());
  const [studyDeadLine, setstudyDeadLine] = useState(new Date());
  const [participantCount, setParticipantCount] = useState(1);
  const navigation = useNavigation<RootStackNavigationProp>();
  const setSuiteRoomState = useSetRecoilState(suiteRoomState);
  const setSubjectState = useSetRecoilState(subjectState);
  const setRecruitmentDeadLineState = useSetRecoilState(recruitmentDeadLineState);
  const setStudyDeadLineState = useSetRecoilState(studyDeadLineState);
  const setRecruitmentLimitState = useSetRecoilState(recruitmentLimitState);

  const handleButtonPress = () => {
    setSuiteRoomState(suiteRoomInfo.getTextInputProps('title').value);
    setSubjectState(selectedCategory);
    setRecruitmentDeadLineState(recruitmentDeadLine);
    setStudyDeadLineState(studyDeadLine);
    setRecruitmentLimitState(participantCount);
    navigation.navigate('SuiteRoomRule');
  };
  useEffect(() => {
    if (
      suiteRoomInfo.getTextInputProps('title').value != '' &&
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
    suiteRoomInfo.getTextInputProps('title').value,
    selectedCategory,
    recruitmentDeadLine,
    studyDeadLine,
    participantCount,
  ]);
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <Header title="Suite Room 개설" backScreen="Studylist" />
      <Progress.Bar
        progress={0.3}
        height={2}
        width={Dimensions.get('window').width}
        color={'#005BA5'}
        borderRadius={0}
        borderColor={'white'}
        unfilledColor={'#E8E8E8'}
      />

      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>제목</Text>
        <InputField
          style={mainPageStyleSheet.idpwInputBox}
          autoFocus
          placeholder=" 제목을 입력해주세요"
          maxLength={50}
          {...suiteRoomInfo.getTextInputProps('title')}
          touched={suiteRoomInfo.touched.title}
        />
        <Text style={mainPageStyleSheet.noValidateCheckText}>스터디 주제</Text>
        <SelectList
          boxStyles={mainPageStyleSheet.categoySelectBox}
          search={false}
          placeholder="선택"
          setSelected={(val: React.SetStateAction<string>) => setselectedCategory(val)}
          data={Category}
          save="value"
          maxHeight={120}
        />
        <Text style={mainPageStyleSheet.idpwtext}>모집 마감일</Text>
        <DatePickerModal selectedDate={recruitmentDeadLine} onDateChange={setrecruitmentDeadLine} />
        <Text style={mainPageStyleSheet.idpwtext}>스터디 종료일</Text>
        <DatePickerModal selectedDate={studyDeadLine} onDateChange={setstudyDeadLine} />

        <Text style={mainPageStyleSheet.idpwtext}>모집 인원</Text>
        <NumberInputField
          value={participantCount}
          onPlusPress={() => setParticipantCount((prevCount) => prevCount + 1)}
          onMinusPress={() => setParticipantCount((prevCount) => Math.max(prevCount - 1, 1))}
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

export default SuiteRoomInfo;
