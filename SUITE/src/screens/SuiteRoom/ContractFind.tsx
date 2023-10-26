import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { RootStackNavigationProp } from '../AuthScreen/Login';
import useForm from '../../hook/useForm';
import InputField from '../../components/presents/InputField';
import { useRecoilValue } from 'recoil';
import { tokenState } from '../../../recoil/atoms';
import ModalPopup from '../../hook/modal';
import SignModalPopup from '../../components/presents/SignmodalPopup';
import { ContractLinkApi } from '../../api/BlockChain/ContractLinkApi';
import { Linking } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ContractFind = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [visible, setVisible] = useState(false);
  const [isViewDisabled, setIsViewDisabled] = useState(true);
  const [pdf, setPdf] = useState('');
  const [message, setMessage] = useState('');
  const tokenId = useRecoilValue(tokenState);
  const signUp = useForm();
  const [phonAuthenticationButtonDisabled, setPhonAuthenticationButtonDisabled] = useState(true);

  const getPhoneAuthenticationCode = async () => {
    try {
      const code = await ContractLinkApi(tokenId, pdf);
      if (code == 200) {
        setIsViewDisabled(false);
        setPdf(code);
        setMessage('');
      } else {
        setMessage('계약서 번호를 확인해주세요!');
      }
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  useEffect(() => {
    if (signUp.getTextInputProps('phone').value != '') {
      setPhonAuthenticationButtonDisabled(false);
    } else {
      setPhonAuthenticationButtonDisabled(true);
    }
  }, [signUp.getTextInputProps('phone').value]);

  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <TouchableOpacity
          style={mainPageStyleSheet.pageBackIcon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="chevron-back" size={24} color={'#000000'} />
        </TouchableOpacity>
        <Text style={mainPageStyleSheet.SignUpText}>계약서 확인</Text>
      </View>
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>계약서 번호</Text>
        <View style={{ flexDirection: 'row' }}>
          <InputField
            style={mainPageStyleSheet.phoneNumInputBox}
            placeholder=" 계약서 번호를 입력해주세요"
            {...signUp.getTextInputProps('phone')}
            touched={signUp.touched.phone}
          />
          <View style={mainPageStyleSheet.phoneAuthenticateCodeContainer}>
            <TouchableOpacity
              style={[
                mainPageStyleSheet.phoneAuthenticateCodeButtonNotDisabled,
                phonAuthenticationButtonDisabled && mainPageStyleSheet.phoneAuthenticateCodeButton,
              ]}
              disabled={phonAuthenticationButtonDisabled}
              onPress={() => {
                getPhoneAuthenticationCode();
              }}
            >
              <Text style={mainPageStyleSheet.phonAuthenticateCodeText}>계약서 확인</Text>
            </TouchableOpacity>
          </View>
        </View>
        {isViewDisabled == false ? (
          <View>
            <Text style={mainPageStyleSheet.findEmailText}>{'아래 아이콘을 눌러 다운받아보세요'}</Text>
            <TouchableOpacity style={mainPageStyleSheet.pdfContainer} onPress={() => Linking.openURL(pdf)}>
              <FontAwesome name="file-pdf-o" size={50} color={'#050953'} />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={mainPageStyleSheet.idPwInputErrorText}>{message}</Text>
          </View>
        )}
      </View>
      <ModalPopup visible={visible}>
        <SignModalPopup visible={visible} onClose={() => setVisible(false)} text={'이미 등록된 번호입니다'} />
      </ModalPopup>
    </View>
  );
};

export default ContractFind;
