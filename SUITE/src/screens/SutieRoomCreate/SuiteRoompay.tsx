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
import { depositAmountState } from '../../../recoil/atoms';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoompay = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const suiteRoomPay = suiteRoomForm();
  const depositAmount = useRecoilValue(depositAmountState)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleButtonPress = () => {
  
  };
  useEffect(() => {
    if (suiteRoomPay.getTextInputProps('name').value != ''){
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [suiteRoomPay.getTextInputProps('name').value]);
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <Header title="Suite Room 체크인" backScreen="Studylist" />
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>보증 금액</Text>
        <View style = {mainPageStyleSheet.depositCheckBox}>
            <Text>{depositAmount}원</Text>
        </View>
        <Text style={mainPageStyleSheet.noValidateCheckText}>입금자명</Text>
        <InputField
          style={mainPageStyleSheet.idpwInputBox}
          placeholder=" 입금자명을 입력해주세요"
          {...suiteRoomPay.getTextInputProps('name')}
          touched={suiteRoomPay.touched.name}
        />
        <Text style={mainPageStyleSheet.idPwInputErrorText}>{suiteRoomPay.errors.name}</Text>

        <View style={mainPageStyleSheet.depositInformationContainer}>
          <View style={mainPageStyleSheet.depositInformationTextContainer}>
             <Icon name="exclamation-circle" size={15} color={'#F14A4A'} style={mainPageStyleSheet.depositInformationIcon}/>
            <Text style={mainPageStyleSheet.depositInformationText}>주의사항</Text>
          </View>
          <Text style={mainPageStyleSheet.depositDetailInformationText}>• 입금은 즉시 해주세요!</Text>
          <Text style={mainPageStyleSheet.depositDetailInformationText}>• 입금이 확인되면 체크인이 완료됩니다.</Text>
        </View>
        </View>
        <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        <TouchableOpacity
          style={[mainPageStyleSheet.SignUpNextBtnBtn, isButtonDisabled && mainPageStyleSheet.disabledSignUpNextBtnBtn]}
          disabled={isButtonDisabled}
          onPress={() => {
            handleButtonPress();
          }}
        >
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>납부하기</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
};

export default SuiteRoompay;
