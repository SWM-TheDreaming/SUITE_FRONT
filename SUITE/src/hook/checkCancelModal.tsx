import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import mainPageStyleSheet from '../style/style';

interface ModalPopupProps {
  visible: boolean;
  onClose: () => void;
  text: string;
  onConfirm: () => void;
}

const CheckCancelModal: React.FC<ModalPopupProps> = ({ visible, onClose, text, onConfirm }) => {
  if (!visible) {
    return null;
  } else
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={mainPageStyleSheet.emailChecktext}>{text}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={mainPageStyleSheet.CancelButton}
            onPress={() => {
              onClose();
            }}
          >
            <Text style={mainPageStyleSheet.SignmodalButtonText}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={mainPageStyleSheet.CheckButton}
            onPress={() => {
              onConfirm();
            }}
          >
            <Text style={mainPageStyleSheet.SignmodalButtonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default CheckCancelModal;
