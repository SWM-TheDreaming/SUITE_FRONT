import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import mainPageStyleSheet from '../style/style';
import Attendance from '../Icons/Attendance.png';
import SuiteRoomStyleSheet from '../style/SuiteRoom';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SecretRoomCheckApi } from '../api/SuiteRoom/SecretRoomCheckApi';
import { AttendanceApi } from '../api/StudyRoom/AttendacneApi';
import { suiteRoomIdState, tokenState } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
interface ModalPopupProps {
  visible: boolean;
  roomNum: number;
  onClose: () => void;
  correct: () => void;
}

const SuiteRoomPasswordModal: React.FC<ModalPopupProps> = ({ visible, roomNum, onClose, correct }) => {
  const [attendanceNumber, setattendanceNumber] = useState('');
  const [incorrect, setIncorrect] = useState(false);
  const [okVisible, setOkVisible] = useState(false);
  const [errortext, setErrorText] = useState('');
  const tokenId = useRecoilValue(tokenState);
  const AttendanceHandler = async () => {
    try {
      const datalist = await SecretRoomCheckApi(tokenId, roomNum, parseInt(attendanceNumber));
      if (datalist == 200) {
        onClose();
        correct();
      } else {
        setIncorrect(true);
        setErrorText('비밀번호가 틀렸습니다!');
      }

      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  if (!visible) {
    return null;
  } else
    return (
      <View>
        <TouchableOpacity onPress={onClose}>
          <AntDesign name="close" size={20} color={'black'} />
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Image source={Attendance} style={mainPageStyleSheet.logoStyle} />
          </View>
          <Text style={SuiteRoomStyleSheet.AttendanceModal}>비밀 번호를 입력해 주세요</Text>
          <TextInput
            style={SuiteRoomStyleSheet.AttendanceInputContainer}
            onChangeText={setattendanceNumber}
            value={attendanceNumber}
            placeholder="비밀번호를 입력해주세요!"
            keyboardType="numeric"
            textAlign="center"
          />
          {incorrect == true ? <Text style={SuiteRoomStyleSheet.IncorrectAttendanceText}>{errortext}</Text> : null}
          <TouchableOpacity style={mainPageStyleSheet.imagemodalButton} onPress={AttendanceHandler}>
            <Text style={mainPageStyleSheet.SignmodalButtonText}>입장 하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default SuiteRoomPasswordModal;
