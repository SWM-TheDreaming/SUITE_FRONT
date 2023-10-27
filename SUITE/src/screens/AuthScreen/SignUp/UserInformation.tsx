import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../../style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { RootStackNavigationProp } from '../Login';
import useForm from '../../../hook/useForm';
import InputField from '../../../components/presents/InputField';
import { SelectList } from 'react-native-dropdown-select-list';
import { Category } from '../../../data/Categoty';
import { useRecoilState } from 'recoil';
import { nameState, preferStudyState, securityNumState, studyMethodState, isIosState } from '../../../../recoil/atoms';
import convertStudyValue from '../../../data/ChangeCategory';
import convertStudyMethod from '../../../data/ChangeStudyMethod';
const UserInformation = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const signUp = useForm();
  const [selectedCategory, setselectedCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isIos, setIsIos] = useRecoilState(isIosState);
  const [name, setName] = useRecoilState(nameState);
  const [securityNum, setsecurityNum] = useRecoilState(securityNumState);
  const [preferStudy, setpreferStudy] = useRecoilState(preferStudyState);
  const [studyMethod, setstudyMethod] = useRecoilState(studyMethodState);

  const handleSelectItem = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };
  const handleButtonPress = () => {
    if (isIos == false) {
      const nameValue = signUp.getTextInputProps('name').value;
      setName(nameValue);
    }
    // const securityNumValue = signUp.getTextInputProps('birthday').value + '-' + signUp.getTextInputProps('sex').value;
    const preferStudyValue = convertStudyValue(selectedCategory);
    const studyMethodValue = convertStudyMethod(selectedItem);
    setsecurityNum('990304-1');
    setpreferStudy(preferStudyValue);
    setstudyMethod(studyMethodValue);
    navigation.navigate('Profile');
  };
  useEffect(() => {
    console.log(isIos);
    if (
      // signUp.errors.name == '' &&
      selectedItem != '' &&
      selectedCategory != ''
      // &&
      // signUp.getTextInputProps('birthday').value != '' &&
      // signUp.getTextInputProps('sex').value != ''
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [
    // signUp.errors.name,
    // signUp.getTextInputProps('birthday').value,
    // signUp.getTextInputProps('sex').value,
    selectedCategory,
    selectedItem,
  ]);
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <TouchableOpacity
          style={mainPageStyleSheet.pageBackIcon}
          onPress={() => {
            navigation.navigate('TermOfUse');
          }}
        >
          <Icon name="chevron-back" size={24} color={'#000000'} />
        </TouchableOpacity>
        <Text style={mainPageStyleSheet.SignUpText}>회원가입</Text>
      </View>

      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        {isIos == false ? (
          <View>
            <Text style={mainPageStyleSheet.idpwtext}>이름</Text>
            <InputField
              style={mainPageStyleSheet.idpwInputBox}
              autoFocus
              placeholder=" 본명을 입력해주세요"
              {...signUp.getTextInputProps('name')}
              touched={signUp.touched.name}
            />
            <Text>{<Text style={mainPageStyleSheet.idPwInputErrorText}>{signUp.errors.name}</Text>}</Text>
          </View>
        ) : null}
        {/* <Text style={mainPageStyleSheet.idpwtext}>주민번호</Text>
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
        </View> */}
        <Text style={mainPageStyleSheet.noValidateCheckText}>관심 스터디</Text>
        <SelectList
          boxStyles={mainPageStyleSheet.categoySelectBox}
          search={false}
          placeholder="선택"
          setSelected={(val: React.SetStateAction<string>) => setselectedCategory(val)}
          data={Category}
          save="value"
          maxHeight={120}
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
