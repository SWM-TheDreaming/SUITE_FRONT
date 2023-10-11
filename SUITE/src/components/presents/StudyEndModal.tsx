import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import StudyEnd from '../../Icons/StudyEnd.png';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
interface ModalPopupProps {
  visible: boolean;
  onClose: () => void;
}

const StudyEndModal: React.FC<ModalPopupProps> = ({ visible, onClose }) => {
  if (!visible) {
    return null;
  } else
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={StudyEnd} style={mainPageStyleSheet.logoStyle} />
        </View>
        <Text style={SuiteRoomStyleSheet.StudyEndModal}>축하합니다!</Text>
        <Text style={SuiteRoomStyleSheet.StudyEndModal}>스터디를 끝까지 해내셨군요?</Text>
        <Text style={SuiteRoomStyleSheet.StdudyEndDetailModal}>내 스터디 결과를 확인해보세요!</Text>

        <TouchableOpacity style={mainPageStyleSheet.imagemodalButton} onPress={onClose}>
          <Text style={mainPageStyleSheet.SignmodalButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
    );
};

export default StudyEndModal;
