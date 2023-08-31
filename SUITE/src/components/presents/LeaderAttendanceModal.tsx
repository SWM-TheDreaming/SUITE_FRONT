import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import Attendance from '../../Icons/Attendance.png';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
interface ModalPopupProps {
  visible: boolean;
  onClose: () => void;
  text: string;
  number : number;
}

const LeaderAttendanceModal: React.FC<ModalPopupProps> = ({ visible, onClose, text, number }) => {
  if (!visible) {
    return null;
  } else
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={Attendance} style={mainPageStyleSheet.logoStyle} />
        </View>
        <Text style={SuiteRoomStyleSheet.AttendanceModal}>{text}</Text>
        <Text style={SuiteRoomStyleSheet.AttendanceModalNumberText}>{number}</Text>
        <TouchableOpacity style={mainPageStyleSheet.imagemodalButton} onPress={onClose}>
          <Text style={mainPageStyleSheet.SignmodalButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
    );
};

export default LeaderAttendanceModal;
