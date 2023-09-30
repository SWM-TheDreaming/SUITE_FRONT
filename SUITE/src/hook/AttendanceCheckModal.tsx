import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import mainPageStyleSheet from '../style/style';
import Attendance from '../Icons/Attendance.png';
import SuiteRoomStyleSheet from '../style/SuiteRoom';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalPopup from './modal';
import AttendanceCheckOkModaPopup from '../components/presents/AttendanceCheckOkModal';

interface ModalPopupProps {
  visible: boolean;
  onClose: () => void;
  text: string;
  number: number;
}

const AttendanceCheckModal: React.FC<ModalPopupProps> = ({ visible, onClose, text, number }) => {
  const [attendanceNumber, setattendanceNumber] = useState('');
  const [incorrect, setIncorrect] = useState(false);
  const [okVisible, setOkVisible] = useState(false);
  console.log(number);
  const checkAttendanceNumber = () => {
    if (number == parseInt(attendanceNumber)) {
      console.log('correct');
      setIncorrect(false);
      //출석체크 완료 API 세팅
      setOkVisible(true);
    } else {
      setIncorrect(true);
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
          <Text style={SuiteRoomStyleSheet.AttendanceModal}>출석 번호를 입력해 주세요</Text>
          <TextInput
            style={SuiteRoomStyleSheet.AttendanceInputContainer}
            onChangeText={setattendanceNumber}
            value={attendanceNumber}
            placeholder="출석번호를 입력해주세요!"
            keyboardType="numeric"
            textAlign="center"
          />
          {incorrect == true ? (
            <Text style={SuiteRoomStyleSheet.IncorrectAttendanceText}>출석번호가 일치하지 않습니다!</Text>
          ) : null}
          <TouchableOpacity style={mainPageStyleSheet.imagemodalButton} onPress={checkAttendanceNumber}>
            <Text style={mainPageStyleSheet.SignmodalButtonText}>출석 하기</Text>
          </TouchableOpacity>
        </View>
        <ModalPopup visible={okVisible}>
          <AttendanceCheckOkModaPopup
            visible={okVisible}
            onClose={() => setOkVisible(false)}
            text="출석이 완료되었습니다!"
            onConfirm={() => onClose()}
          />
        </ModalPopup>
      </View>
    );
};

export default AttendanceCheckModal;
