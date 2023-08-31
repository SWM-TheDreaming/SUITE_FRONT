import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import mainPageStyleSheet from '../../style/style';

interface ModalPopupProps {
  visible: boolean;
  onClose: () => void;
  text: string;
  onConfirm: () => void;
}

const AttendanceCheckOkModaPopup: React.FC<ModalPopupProps> = ({ visible, onClose, text, onConfirm }) => {
    const CloseModal = () => {
        onClose()
        onConfirm()
    }
  if (!visible) {
    return null;
  } else
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={mainPageStyleSheet.emailChecktext}>{text}</Text>
        <TouchableOpacity style={mainPageStyleSheet.SignmodalButton} onPress={CloseModal}>
          <Text style={mainPageStyleSheet.SignmodalButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
    );
};

export default AttendanceCheckOkModaPopup;
