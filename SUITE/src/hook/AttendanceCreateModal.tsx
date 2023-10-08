import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import mainPageStyleSheet from '../style/style';
import Attendance from '../Icons/Attendance.png';
import SuiteRoomStyleSheet from '../style/SuiteRoom';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalPopup from './modal';
import AttendanceCheckOkModaPopup from '../components/presents/AttendanceCheckOkModal';
import AttendanceCheckNumberModaPopup from '../components/presents/AttendanceCheckNumberModal';
import { suiteRoomIdState, tokenState } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { AttendanceCreateApi } from '../api/StudyRoom/AttendanceCreateApi';
import ImageModalPopup from './ImageModal';
import AttendanceModalPopup from './AttendanceModal';
interface ModalPopupProps {
  visible: boolean;
  onClose: () => void;
  text: string;
  number: number;
}

const AttendanceCreateModal: React.FC<ModalPopupProps> = ({ visible, onClose, text, number }) => {
  const [attendanceNumber, setattendanceNumber] = useState('');
  const [incorrect, setIncorrect] = useState(false);
  const [okVisible, setOkVisible] = useState(false);
  const [errortext, setErrorText] = useState('');
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const AttendanceHandler = async () => {
    try {
      const datalist = await AttendanceCreateApi(tokenId, parseInt(SuiteRoomId), parseInt(attendanceNumber));
      console.log(datalist);
      if (datalist == 200) {
        setOkVisible(true);
      } else if (datalist == 400) {
        setIncorrect(true);
        setErrorText('출석 시작한 뒤 5분이 지나지 않았습니다!');
      } else if (datalist == 403) {
        setIncorrect(true);
        setErrorText('출석 권한이 없습니다!');
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
          <Text style={SuiteRoomStyleSheet.AttendanceModal}>출석 번호를 입력해 주세요</Text>
          <TextInput
            style={SuiteRoomStyleSheet.AttendanceInputContainer}
            onChangeText={setattendanceNumber}
            value={attendanceNumber}
            placeholder="출석번호를 입력해주세요!"
            keyboardType="numeric"
            textAlign="center"
          />
          {incorrect == true ? <Text style={SuiteRoomStyleSheet.IncorrectAttendanceText}>{errortext}</Text> : null}
          <TouchableOpacity style={mainPageStyleSheet.imagemodalButton} onPress={AttendanceHandler}>
            <Text style={mainPageStyleSheet.SignmodalButtonText}>출석 시작</Text>
          </TouchableOpacity>
        </View>
        <AttendanceModalPopup visible={okVisible}>
          <AttendanceCheckNumberModaPopup
            visible={okVisible}
            onClose={() => setOkVisible(false)}
            text={`출석 번호는 10분 뒤 만료되니 \n 팀원들에게 빠르게 안내해주세요!`}
            onConfirm={() => onClose()}
            number={attendanceNumber}
          />
        </AttendanceModalPopup>
      </View>
    );
};

export default AttendanceCreateModal;
