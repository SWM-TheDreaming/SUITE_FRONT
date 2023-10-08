import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Header } from '../../hook/header';
import suiteRoomForm from '../../hook/suiteRoomForm';
import { useRecoilValue } from 'recoil';
import { depositAmountState, suiteRoomIdState, tokenState } from '../../../recoil/atoms';
import { SuiteRoomAttendance } from '../../api/SuiteRoom/SuiteRoomAttendance';
import CheckBox from '@react-native-community/checkbox';
import ImageModalPopup from '../../hook/ImageModal';
import PayCheckModal from '../../components/presents/PayCheckModalPresent';
import { MyPointApi } from '../../api/SuiteRoom/MyPointApi';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoomUserAttendPay = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const suiteRoomNum = useRecoilValue(suiteRoomIdState);
  const suiteRoomPay = suiteRoomForm();
  const depositAmount = useRecoilValue(depositAmountState);
  const token = useRecoilValue(tokenState);
  const [point, setPoint] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleButtonPress = () => {
    payCheck();
    setVisible(true);
  };
  const payCheck = () => {
    SuiteRoomAttendance(token, parseInt(suiteRoomNum));
  };
  const outModal = () => {
    setVisible(false);
    navigation.navigate('Mystudy');
  };
  const readPoint = async () => {
    const point = await MyPointApi(token);
    if (point < depositAmount) {
      setIsButtonDisabled(true);
    }
    setPoint(point);
  };
  useEffect(() => {
    readPoint();
  }, []);

  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <Header title="Suite Room 체크인" />
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>현재 포인트</Text>
        <View style={mainPageStyleSheet.depositCheckBox}>
          <Text>{point.toLocaleString()}원</Text>
        </View>
        <Text style={mainPageStyleSheet.noValidateCheckText}>보증 금액</Text>
        <View style={mainPageStyleSheet.depositCheckBox}>
          <Text>{depositAmount.toLocaleString()}원</Text>
        </View>
        <Text style={mainPageStyleSheet.noValidateCheckText}>차감후 남은 포인트</Text>
        <View style={mainPageStyleSheet.depositCheckBox}>
          <Text>{(point - depositAmount).toLocaleString()}원</Text>
        </View>
        <Text style={mainPageStyleSheet.idPwInputErrorText}>{suiteRoomPay.errors.name}</Text>
        {isButtonDisabled === true ? (
          <View style={mainPageStyleSheet.depositInformationContainer}>
            <View style={mainPageStyleSheet.depositInformationTextContainer}>
              <Icon
                name="exclamation-circle"
                size={15}
                color={'#F14A4A'}
                style={mainPageStyleSheet.depositInformationIcon}
              />
              <Text style={mainPageStyleSheet.depositInformationText}>주의사항</Text>
            </View>
            <Text style={mainPageStyleSheet.depositDetailInformationText}>
              • 포인트가 부족하여 방 생성이 불가합니다!
            </Text>
            <Text style={mainPageStyleSheet.depositDetailInformationText}>
              • 포인트 충전 후 스위트룸 생성을 완료해주세요!
            </Text>
          </View>
        ) : (
          <View>
            <View style={mainPageStyleSheet.depositOKInformationContainer}>
              <View style={mainPageStyleSheet.depositInformationTextContainer}>
                <Icon
                  name="exclamation-circle"
                  size={15}
                  color={'#F14A4A'}
                  style={mainPageStyleSheet.depositInformationIcon}
                />
                <Text style={mainPageStyleSheet.depositInformationText}>주의사항</Text>
              </View>
              <Text style={mainPageStyleSheet.depositDetailInformationText}>
                • 스터디 정보를 잘 확인하고 보증금 납부를 해주세요!
              </Text>
              <Text style={mainPageStyleSheet.depositDetailInformationText}>
                • 아래 확인 버튼 클릭 후 납부가 가능합니다!
              </Text>
            </View>
            <View style={mainPageStyleSheet.PaycheckboxContainer}>
              <TouchableOpacity>
                <CheckBox
                  value={checked}
                  onValueChange={setChecked}
                  tintColors={{ true: '#005BA5', false: '#686868' }}
                  style={{ width: 25, height: 20 }}
                />
              </TouchableOpacity>
              <Text style={mainPageStyleSheet.AllcheckboxText}>차감 포인트를 확인하였습니다</Text>
            </View>
          </View>
        )}
      </View>
      <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        {isButtonDisabled === false ? (
          <TouchableOpacity
            style={[mainPageStyleSheet.SignUpNextBtnBtn, !checked && mainPageStyleSheet.disabledSignUpNextBtnBtn]}
            disabled={!checked}
            onPress={() => {
              handleButtonPress();
            }}
          >
            <Text style={mainPageStyleSheet.SignUpNextBtnText}>납부하기</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={mainPageStyleSheet.SignUpNextBtnBtn}
            onPress={() => {
              handleButtonPress();
            }}
          >
            <Text style={mainPageStyleSheet.SignUpNextBtnText}>포인트 충전하기</Text>
          </TouchableOpacity>
        )}
      </View>
      <ImageModalPopup visible={visible}>
        <PayCheckModal
          visible={visible}
          onClose={outModal}
          text={'스터디 참가가 완료되었습니다! \n 마이페이지에서 확인해보세요!'}
        />
      </ImageModalPopup>
    </View>
  );
};

export default SuiteRoomUserAttendPay;
