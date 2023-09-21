import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import suiteRoomForm from '../../hook/suiteRoomForm';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Header } from '../../hook/header';
import { RouteProp } from '@react-navigation/native';
import { SuiteRoomEditApi } from '../../api/SuiteRoom/SuiteRoomEditAPi';
import { tokenState } from '../../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import ModalPopup from '../../hook/modal';
import SignModalPopup from '../../components/presents/SignmodalPopup';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
type SuiteRoomEditRouteProp = RouteProp<RootStackParamList, 'SuiteRoomEdit'>;
interface SuiteRoomEditProps {
  route: SuiteRoomEditRouteProp;
}
const SuiteRoomEdit: React.FunctionComponent<SuiteRoomEditProps> = ({ route }) => {
  const suiteRoomUrl = suiteRoomForm();
  const navigation = useNavigation<RootStackNavigationProp>();
  const token = useRecoilValue(tokenState);
  const [content, setContent] = useState(route.params.content);
  const [link, setLink] = useState(route.params.url);
  const [visible, setVisible] = useState(false);
  const handleButtonPress = () => {
    // navigation.navigate('SuiteRoomCreateComplete');
    setVisible(true);
    Edit();
  };
  const closeModal = () => {
    setVisible(false);
    navigation.navigate('SuiteRoomDetail', { SuiteRoomid: route.params.roomId });
  };
  const Edit = () => {
    console.log(content);
    console.log(link);
    SuiteRoomEditApi(token, route.params.roomId, content, link);
  };
  const handleTextChange = (content: string) => {
    setContent(content);
  };
  const handleLinkChange = (link: string) => {
    setLink(link);
  };
  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <Header title="Suite Room 수정" />
      <View style={mainPageStyleSheet.emailAuthenticationContainer}>
        <Text style={mainPageStyleSheet.idpwtext}>Suite Room 소개</Text>
        <TextInput
          style={mainPageStyleSheet.roomInformationContainer}
          value={content}
          onChangeText={handleTextChange}
        />
        <Text style={mainPageStyleSheet.idPwInputErrorText}>{suiteRoomUrl.errors.content}</Text>

        <Text style={mainPageStyleSheet.idpwtext}>소통 창구</Text>
        <TextInput style={mainPageStyleSheet.idpwInputBox} value={link} onChangeText={handleLinkChange} />
        <Text style={mainPageStyleSheet.idPwInputErrorText}>{suiteRoomUrl.errors.channelLink}</Text>
      </View>
      <ModalPopup visible={visible}>
        <SignModalPopup visible={visible} onClose={() => closeModal()} text="수정이 완료되었습니다" />
      </ModalPopup>
      <View style={mainPageStyleSheet.SignUpNextBtnContainer}>
        <TouchableOpacity
          style={mainPageStyleSheet.SignUpNextBtnBtn}
          onPress={() => {
            handleButtonPress();
          }}
        >
          <Text style={mainPageStyleSheet.SignUpNextBtnText}>수정완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuiteRoomEdit;
