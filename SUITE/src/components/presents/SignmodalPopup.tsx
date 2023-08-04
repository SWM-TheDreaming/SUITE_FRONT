import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import mainPageStyleSheet from '../../style/style';

interface ModalPopupProps {
  visible: boolean;
  onClose: () => void;
}

const SignModalPopup: React.FC<ModalPopupProps> = ({ visible, onClose }) => {
  if (!visible) {
    return null;
  }
  else
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={mainPageStyleSheet.emailChecktext}>
        이미 등록된 이메일이 있습니다!
      </Text>
      <TouchableOpacity style={mainPageStyleSheet.SignmodalButton} onPress={onClose}>
        <Text style={mainPageStyleSheet.SignmodalButtonText}>확인</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignModalPopup;