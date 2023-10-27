import React, { useEffect, useState } from 'react';
import { sendProfileImageApi } from '../../../api/Sign/sendProfileImageApi';
import { View, Image, Text } from 'react-native';
import mainPageStyleSheet from '../../../style/style';
import {
  emailState,
  isAuthState,
  nameState,
  passwordState,
  phoneState,
  preferStudyState,
  securityNumState,
  studyMethodState,
} from '../../../../recoil/atoms';
import { launchImageLibrary } from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { RootStackNavigationProp } from '../Login';
import InputField from '../../../components/presents/InputField';
import useForm from '../../../hook/useForm';
import defaultImage from '../../../Icons/profile.png';
import { signUpAPI } from '../../../api/Sign/signup';
import { useRecoilValue } from 'recoil';
import { OauthsignUpAPI } from '../../../api/Sign/Oauthsignup';
const Profile = () => {
  const email = useRecoilValue(emailState);
  const password = useRecoilValue(passwordState);
  let name = useRecoilValue(nameState);
  const phone = useRecoilValue(phoneState);
  const securityNum = useRecoilValue(securityNumState);
  const preferStudy = useRecoilValue(preferStudyState);
  const studyMethod = useRecoilValue(studyMethodState);
  const isOauth = useRecoilValue(isAuthState);
  const [img, setImageSource] = useState('');
  const navigation = useNavigation<RootStackNavigationProp>();
  const profile = useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [memberId, setMemberId] = useState('');

  const getEmailCode = async () => {
    if (name == null) {
      name = '익명';
    }
    try {
      const code = await signUpAPI({
        email: email,
        password: password,
        name: name,
        nickname: profile.getTextInputProps('nickname').value,
        phone: phone,
        securityNum: securityNum,
        preferStudy: preferStudy,
        studyMethod: studyMethod,
        isOauth: isOauth,
        fcmToken: '1234',
      });
      console.log(code);
      await sendProfileImageApi(parseInt(String(code)), img);
      navigation.navigate('SignUp');
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  const OauthApi = async () => {
    try {
      const code = await OauthsignUpAPI({
        email: email,
        password: password,
        name: name,
        nickname: profile.getTextInputProps('nickname').value,
        phone: phone,
        securityNum: securityNum,
        preferStudy: preferStudy,
        studyMethod: studyMethod,
        isOauth: isOauth,
        fcmToken: '1234',
      });
      console.log(code);
      await sendProfileImageApi(parseInt(String(code)), img);
      navigation.navigate('SignUp');
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  const handleButtonPress = () => {
    if (isOauth == true) {
      OauthApi();
    } else {
      getEmailCode();
    }
  };
  function pickImg() {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 188,
        maxHeight: 188,
      },
      (response) => {
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log('Image Error : ' + response.errorCode);
        }
        console.log('response', response.assets[0].uri);
        setImageSource(response.assets[0].uri);
      },
    );
  }
  useEffect(() => {
    if (profile.getTextInputProps('nickname').value != '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [profile.getTextInputProps('nickname').value]);
  useEffect(() => {
    console.log(img);
    console.log(isOauth);
  }, [img]);
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <TouchableOpacity
          style={mainPageStyleSheet.pageBackIcon}
          onPress={() => {
            navigation.navigate('UserInformation');
          }}
        >
          <Icon name="chevron-back" size={24} color={'#000000'} />
        </TouchableOpacity>
        <Text style={mainPageStyleSheet.SignUpText}>프로필 설정</Text>
      </View>

      <View style={mainPageStyleSheet.choiceProfileContainer}>
        {img ? (
          <TouchableOpacity style={mainPageStyleSheet.choiceProfile} onPress={() => pickImg()}>
            <Image source={{ uri: img }} style={mainPageStyleSheet.choiceProfileImage} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={mainPageStyleSheet.choiceProfile} onPress={() => pickImg()}>
            <Image source={defaultImage} style={mainPageStyleSheet.choiceProfileImage} />
          </TouchableOpacity>
        )}
        <InputField
          style={mainPageStyleSheet.profileInputBox}
          placeholder=" 닉네임을 입력해주세요"
          maxLength={8}
          {...profile.getTextInputProps('nickname')}
          touched={profile.touched.nickname}
        />
        <Text>{<Text style={mainPageStyleSheet.idPwInputErrorText}>{profile.errors.nickname}</Text>}</Text>
      </View>
      <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        <TouchableOpacity
          style={[mainPageStyleSheet.SignUpNextBtnBtn, isButtonDisabled && mainPageStyleSheet.disabledSignUpNextBtnBtn]}
          disabled={isButtonDisabled}
          onPress={() => {
            handleButtonPress();
          }}
        >
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>회원가입 완료하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
