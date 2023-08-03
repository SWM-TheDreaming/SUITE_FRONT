import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import mainPageStyleSheet from '../../../style/style';
import { useRecoilState } from 'recoil';
import { emailState, nameState, passwordState, phoneState, preferStudyState, securityNumState, studyMethodState } from '../../../../recoil/atoms';

const Profile = () => {
  const [email, setEmail] = useRecoilState(emailState)
  const [password, setPassword] = useRecoilState(passwordState)
  const [name, setName] = useRecoilState(nameState);
  const [phone, setPhone] = useRecoilState(phoneState);
  const [securityNum, setsecurityNum] = useRecoilState(securityNumState);
  const [preferStudy, setpreferStudy] = useRecoilState(preferStudyState);
  const [studyMethod, setstudyMethod] = useRecoilState(studyMethodState);

  useEffect(()=> {
  }
  ,[])

  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <Text>Profile page</Text>
    </View>
  );
};

export default Profile;
