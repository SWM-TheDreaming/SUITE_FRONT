import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import mainPageStyleSheet from '../../../style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../Login';
import CheckBox from '@react-native-community/checkbox';

interface CheckboxItemProps {
  checked: boolean;
  onPress: () => void;
  label: string;
  required?: boolean;
  onCheckboxChange: (checked: boolean) => void;
  checkedBtn: boolean;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  checked,
  onPress,
  label,
  required = false,
  onCheckboxChange,
  checkedBtn,
}) => {
  const handleCheckboxChange = () => {
    onCheckboxChange(!checked);
    onPress();
  };

  return (
    <View style={mainPageStyleSheet.IndividualCheck}>
      <View style={mainPageStyleSheet.checkBoxTextContainer}>
        <TouchableOpacity onPress={handleCheckboxChange}>
          <CheckBox
            value={checked}
            onValueChange={handleCheckboxChange}
            tintColors={{ true: '#005BA5', false: '#686868' }}
            style={{ width: 25, height: 20 }}
          />
        </TouchableOpacity>
        <Text
          style={[
            mainPageStyleSheet.IndivdualCheckText,
            { color: checked ? '#005BA5' : checkedBtn == false && required && !checked ? '#FF0000' : '#686868' },
          ]}
        >
          {label}
        </Text>
      </View>
      <View style={mainPageStyleSheet.termOfUseDetailClick}>
        <TouchableOpacity>
          <Icon name="chevron-forward" size={16} color={checked ? '#005BA5' : '#686868'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OauthTermOfUse = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [allChecked, setAllChecked] = useState(false);
  const [ageChecked, setAgeChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [sensitiveInfoChecked, setSensitiveInfoChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [CheckedBtn, setCheckedBtn] = useState(true);

  const handleAllCheck = () => {
    setAllChecked(!allChecked);
    setAgeChecked(!allChecked);
    setTermsChecked(!allChecked);
    setPrivacyChecked(!allChecked);
    setSensitiveInfoChecked(!allChecked);
    setEmailChecked(!allChecked);
  };

  const handleNextPage = () => {
    if (!ageChecked || !termsChecked || !privacyChecked) {
      setCheckedBtn(false);
    } else {
      navigation.navigate('UserInformation');
    }
  };
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <TouchableOpacity
          style={mainPageStyleSheet.pageBackIcon}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Icon name="chevron-back" size={24} color={'#000000'} />
        </TouchableOpacity>
      </View>
      <View style={mainPageStyleSheet.termOfUseInfoBox}>
        <Text style={mainPageStyleSheet.termOfUseInfoText}>SUITE 이용약관에</Text>
        <Text style={mainPageStyleSheet.termOfUseInfoText}>동의해주세요</Text>
      </View>
      <View style={mainPageStyleSheet.AllcheckboxContainer}>
        <TouchableOpacity onPress={handleAllCheck}>
          <CheckBox
            value={allChecked}
            onValueChange={handleAllCheck}
            tintColors={{ true: '#005BA5', false: '#686868' }}
            style={{ width: 25, height: 20 }}
          />
        </TouchableOpacity>
        <Text style={mainPageStyleSheet.AllcheckboxText}>모두 동의합니다</Text>
      </View>
      <View style={mainPageStyleSheet.IndividualCheckBoxContainer}>
        <View style={mainPageStyleSheet.IndividualCheckBox}>
          <CheckboxItem
            checked={ageChecked}
            onPress={() => setAgeChecked(!ageChecked)}
            label="[필수] 만 14세 이상입니다"
            required
            onCheckboxChange={setAgeChecked}
            checkedBtn={CheckedBtn}
          />
          <CheckboxItem
            checked={termsChecked}
            onPress={() => setTermsChecked(!termsChecked)}
            label="[필수] 이용약관 동의"
            required
            onCheckboxChange={setTermsChecked}
            checkedBtn={CheckedBtn}
          />
          <CheckboxItem
            checked={privacyChecked}
            onPress={() => setPrivacyChecked(!privacyChecked)}
            label="[필수] 개인정보 수집 및 이용 동의"
            required
            onCheckboxChange={setPrivacyChecked}
            checkedBtn={CheckedBtn}
          />
          <CheckboxItem
            checked={sensitiveInfoChecked}
            onPress={() => setSensitiveInfoChecked(!sensitiveInfoChecked)}
            label="[선택] 민감 정보 수집 및 이용 동의"
            onCheckboxChange={setSensitiveInfoChecked}
            checkedBtn={CheckedBtn}
          />
          <CheckboxItem
            checked={emailChecked}
            onPress={() => setEmailChecked(!emailChecked)}
            label="[선택] 이메일 수신 동의"
            onCheckboxChange={setEmailChecked}
            checkedBtn={CheckedBtn}
          />
        </View>
      </View>
      <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        <TouchableOpacity style={mainPageStyleSheet.SignUpNextBtnBtn} onPress={handleNextPage}>
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>SUITE 시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OauthTermOfUse;
