import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import mainPageStyleSheet from '../../style/style';

interface ModalPopupProps {
  visible: boolean;
  onClose: () => void;
  number: string;
  text: string;
  onConfirm: () => void;
}

const AttendanceCheckNumberModaPopup: React.FC<ModalPopupProps> = ({ visible, onClose, number, text, onConfirm }) => {
  const CloseModal = () => {
    onClose();
    onConfirm();
  };
  if (!visible) {
    return null;
  } else
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={mainPageStyleSheet.showNumberText}>{number}</Text>
        <Text style={mainPageStyleSheet.emailChecktextaligncenter}>{text}</Text>
        <TouchableOpacity style={mainPageStyleSheet.SignmodalButton} onPress={CloseModal}>
          <Text style={mainPageStyleSheet.SignmodalButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
    );
};

export default AttendanceCheckNumberModaPopup;
