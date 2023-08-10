import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import Congratulations from '../../Icons/congratulations.png';
interface ModalPopupProps {
  visible: boolean;
  onClose: () => void;
  text: string;
}

const ImageModal: React.FC<ModalPopupProps> = ({ visible, onClose, text }) => {
  if (!visible) {
    return null;
  } else
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={Congratulations} style={mainPageStyleSheet.logoStyle} />
        </View>
        <Text style={mainPageStyleSheet.imageModalText}>{text}</Text>
        <TouchableOpacity style={mainPageStyleSheet.imagemodalButton} onPress={onClose}>
          <Text style={mainPageStyleSheet.SignmodalButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
    );
};

export default ImageModal;
