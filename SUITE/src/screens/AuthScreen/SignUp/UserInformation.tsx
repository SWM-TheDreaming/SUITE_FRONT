import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../../style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { RootStackNavigationProp } from '../Login';
import useForm from '../../../hook/useForm';
import InputField from '../../../components/presents/InputField';
import { SelectList } from 'react-native-dropdown-select-list';

const UserInformation = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const signUp = useForm();
  const [selectedCategory, setselectedCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState(''); // State to keep track of the selected item
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSelectItem = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };
  const handleButtonPress = () => {
    navigation.navigate('AuthenticateCode'); //로그인 API 연동
  };
  useEffect(() => {
    if (
      signUp.errors.name == '' &&
      signUp.errors.phone == '' &&
      selectedItem != '' &&
      selectedCategory != '' &&
      signUp.getTextInputProps('birthday').value != '' &&
      signUp.getTextInputProps('sex').value != ''
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [
    signUp.errors.name,
    signUp.errors.phone,
    signUp.errors.phone,
    signUp.getTextInputProps('birthday').value,
    signUp.getTextInputProps('sex').value,
    selectedCategory,
    selectedItem,
  ]);

  const Category = [
    { key: '1', value: '토스' },
    { key: '2', value: '오픽' },
    { key: '3', value: '공무원' },
    { key: '4', value: '법학' },
    { key: '5', value: '경찰고시' },
    { key: '6', value: '임용시험' },
    { key: '7', value: '소방고시' },
    { key: '8', value: '회계/세무' },
    { key: '9', value: '자격증' },
    { key: '10', value: '공인중개사' },
    { key: '11', value: '대학' },
    { key: '12', value: 'IT' },
  ];
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <TouchableOpacity
          style={mainPageStyleSheet.pageBackIcon}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          <Icon name="chevron-back" size={24} color={'#000000'} />
        </TouchableOpacity>
        <Text style={mainPageStyleSheet.SignUpText}>회원가입</Text>
      </View>
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>이름</Text>
        <InputField
          style={mainPageStyleSheet.idpwInputBox}
          autoFocus
          placeholder=" 본명을 입력해주세요"
          {...signUp.getTextInputProps('name')}
          touched={signUp.touched.name}
        />
        <Text>{<Text style={mainPageStyleSheet.idPwInputErrorText}>{signUp.errors.name}</Text>}</Text>
        <Text style={mainPageStyleSheet.idpwtext}>전화번호</Text>
        <InputField
          style={mainPageStyleSheet.idpwInputBox}
          placeholder=" 전화번호 입력해주세요"
          {...signUp.getTextInputProps('phone')}
          touched={signUp.touched.phone}
        />
        <Text>{<Text style={mainPageStyleSheet.idPwInputErrorText}>{signUp.errors.phone}</Text>}</Text>
        <Text style={mainPageStyleSheet.idpwtext}>주민번호</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column' }}>
            <InputField
              style={mainPageStyleSheet.securityNumBox}
              placeholder=" YYMMDD"
              {...signUp.getTextInputProps('birthday')}
              touched={signUp.touched.birthday}
              maxLength={6}
            />
          </View>
          <View style={{ flexDirection: 'column', marginLeft: 20 }}>
            <InputField
              style={mainPageStyleSheet.securityNumBox}
              placeholder=" 1●●●●●●"
              {...signUp.getTextInputProps('sex')}
              touched={signUp.touched.sex}
              maxLength={1}
            />
          </View>
        </View>
        <Text style={mainPageStyleSheet.noValidateCheckText}>관심 스터디</Text>
        <SelectList
          boxStyles={mainPageStyleSheet.categoySelectBox}
          search={false}
          placeholder="선택"
          setSelected={(val: React.SetStateAction<string>) => setselectedCategory(val)}
          data={Category}
          save="value"
          maxHeight = {120}
        />
        <Text style={mainPageStyleSheet.noValidateCheckText}>선호 스터디 방식</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[
              mainPageStyleSheet.selectStudymethod,
              selectedItem === '온라인' && mainPageStyleSheet.selectedStudymethod,
            ]}
            onPress={() => handleSelectItem('온라인')}
          >
            <Text>온라인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              mainPageStyleSheet.selectStudymethod,
              selectedItem === '오프라인' && mainPageStyleSheet.selectedStudymethod,
            ]}
            onPress={() => handleSelectItem('오프라인')}
          >
            <Text>오프라인</Text>
          </TouchableOpacity>
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
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInformation;
