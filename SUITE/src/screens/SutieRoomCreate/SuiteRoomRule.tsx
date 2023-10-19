import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import suiteRoomForm from '../../hook/suiteRoomForm';
import InputField from '../../components/presents/InputField';
import * as Progress from 'react-native-progress';
import { useSetRecoilState } from 'recoil';
import { Dimensions } from 'react-native';
import {
  depositAmountState,
  isOnlineState,
  minAttendanceRateState,
  minMissionCompleteRateState,
  studyPasswordState,
} from '../../../recoil/atoms';
import { Header } from '../../hook/header';
import ImageModalPopup from '../../hook/ImageModal';
import ImageModal from '../../components/presents/ImageModalPopup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoomRule = () => {
  const suiteRoomRule = suiteRoomForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedItem, setSelectedItem] = useState('');
  const setdepositAmountState = useSetRecoilState(depositAmountState);
  const setminAttendanceRateState = useSetRecoilState(minAttendanceRateState);
  const setminMissionCompleteRateState = useSetRecoilState(minMissionCompleteRateState);
  const setstudyPasswordState = useSetRecoilState(studyPasswordState);
  const setisOnline = useSetRecoilState(isOnlineState);
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation<RootStackNavigationProp>();

  const handleButtonPress = () => {
    const depositAmount = parseInt(suiteRoomRule.getTextInputProps('depositAmount').value);
    const minAttendanceRate = parseInt(suiteRoomRule.getTextInputProps('minAttendanceRate').value);
    const minMissionCompleteRate = parseInt(suiteRoomRule.getTextInputProps('minMissionCompleteRate').value);
    const password = suiteRoomRule.getTextInputProps('password').value;
    const isOnline = selectedItem == '공개방' ? true : false;

    setdepositAmountState(5000);
    setminAttendanceRateState(minAttendanceRate);
    setminMissionCompleteRateState(minMissionCompleteRate);
    setstudyPasswordState(password);
    setisOnline(isOnline);
    navigation.navigate('SuiteRoomurl');
  };
  const handleSelectItem = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };
  useEffect(() => {
    if (selectedItem == '비공개방') {
      if (
        // suiteRoomRule.getTextInputProps('depositAmount').value != '' &&
        suiteRoomRule.errors.minMissionCompleteRate == '' &&
        suiteRoomRule.errors.minAttendanceRate == '' &&
        // suiteRoomRule.errors.depositAmount == '' &&
        suiteRoomRule.errors.password == ''
      ) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    } else if (selectedItem == '공개방') {
      if (
        // suiteRoomRule.getTextInputProps('depositAmount').value != '' &&
        suiteRoomRule.errors.minMissionCompleteRate == '' &&
        suiteRoomRule.errors.minAttendanceRate == ''
        // && suiteRoomRule.errors.depositAmount == ''
      ) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    }
  }, [
    suiteRoomRule.errors.minAttendanceRate,
    suiteRoomRule.errors.minMissionCompleteRate,
    suiteRoomRule.errors.depositAmount,
    suiteRoomRule.errors.password,
    selectedItem,
  ]);
  return (
    <KeyboardAwareScrollView>
      <View style={mainPageStyleSheet.categoryPageContainer}>
        <Header title="Suite Room 개설" backScreen="SuiteRoomInfo" />
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
          {/* <Text style={mainPageStyleSheet.idpwtext}>보증 금액</Text>
          <InputField
            style={mainPageStyleSheet.idpwInputBox}
            autoFocus
            placeholder=" 보증금액을 입력해주세요"
            keyboardType="number-pad"
            {...suiteRoomRule.getTextInputProps('depositAmount')}
            touched={suiteRoomRule.touched.depositAmount}
          />
          <Text>{<Text style={mainPageStyleSheet.idPwInputErrorText}>{suiteRoomRule.errors.depositAmount}</Text>}</Text> */}
          <Text style={mainPageStyleSheet.noValidateCheckText}>보증 금액</Text>
          <View style={mainPageStyleSheet.depositCheckBox}>
            <Text>5,000</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={mainPageStyleSheet.idpwtext}>보증금 반환 조건</Text>
            <TouchableOpacity style={mainPageStyleSheet.depositRuleIcon} onPress={() => setVisible(true)}>
              <Icon name="info-circle" size={16} color={'#888888'} />
            </TouchableOpacity>
          </View>
          <ImageModalPopup visible={visible}>
            <ImageModal
              visible={visible}
              onClose={() => setVisible(false)}
              text={'최소 출석율과 미션 달성률을 달성하지 못한다면 보증금이 몰수 되니 신중히 조건을 입력해주세요!'}
            />
          </ImageModalPopup>
          <View style={mainPageStyleSheet.depositRuleInputContainer}>
            <Text style={mainPageStyleSheet.idpwtext}>최소 출석율</Text>
            <View style={{ flexDirection: 'column' }}>
              <InputField
                style={mainPageStyleSheet.depositRuleBox}
                placeholder=" 최소 출석률(%)"
                maxLength={3}
                keyboardType="number-pad"
                {...suiteRoomRule.getTextInputProps('minAttendanceRate')}
                touched={suiteRoomRule.touched.minAttendanceRate}
              />
              <Text style={mainPageStyleSheet.depositRuleErrorText}>{suiteRoomRule.errors.minAttendanceRate}</Text>
            </View>
          </View>
          <View style={mainPageStyleSheet.depositRuleInputContainer}>
            <Text style={mainPageStyleSheet.idpwtext}>미션 달성률</Text>
            <View style={{ flexDirection: 'column' }}>
              <InputField
                style={mainPageStyleSheet.depositRuleBox}
                placeholder=" 미션 달성률(%)"
                maxLength={3}
                keyboardType="number-pad"
                {...suiteRoomRule.getTextInputProps('minMissionCompleteRate')}
                touched={suiteRoomRule.touched.minMissionCompleteRate}
              />
              <Text style={mainPageStyleSheet.depositRuleErrorText}>{suiteRoomRule.errors.minMissionCompleteRate}</Text>
            </View>
          </View>

          <Text style={mainPageStyleSheet.noValidateCheckText}>공개 여부</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={[
                mainPageStyleSheet.selectStudymethod,
                selectedItem === '공개방' && mainPageStyleSheet.selectedStudymethod,
              ]}
              onPress={() => handleSelectItem('공개방')}
            >
              <Text>공개방</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                mainPageStyleSheet.selectStudymethod,
                selectedItem === '비공개방' && mainPageStyleSheet.selectedStudymethod,
              ]}
              onPress={() => handleSelectItem('비공개방')}
            >
              <Text>비공개방</Text>
            </TouchableOpacity>
          </View>
          {selectedItem === '비공개방' && (
            <>
              <Text style={mainPageStyleSheet.idpwtext}>비공개방 비밀번호</Text>
              <InputField
                style={mainPageStyleSheet.idpwInputBox}
                placeholder=" 비밀번호를 입력해주세요"
                maxLength={4}
                keyboardType="number-pad"
                {...suiteRoomRule.getTextInputProps('password')}
                touched={suiteRoomRule.touched.password}
              />

              <Text>
                <Text style={mainPageStyleSheet.idPwInputErrorText}>{suiteRoomRule.errors.password}</Text>
              </Text>
            </>
          )}
        </View>
        <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
          <TouchableOpacity
            style={[
              mainPageStyleSheet.SignUpNextBtnBtn,
              isButtonDisabled && mainPageStyleSheet.disabledSignUpNextBtnBtn,
            ]}
            disabled={isButtonDisabled}
            onPress={() => {
              handleButtonPress();
            }}
          >
            <Text style={mainPageStyleSheet.SignUpNextBtnText}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SuiteRoomRule;
