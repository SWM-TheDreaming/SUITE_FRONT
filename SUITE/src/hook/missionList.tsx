import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalPopup from '../hook/modal';
import CheckCancelModal from '../hook/checkCancelModal';

type DataRow = {
  id: string;
  missionName: string;
  missionDeadLine: Date;
  missionStatus: string;
};

type DataListProps = {
  data: DataRow[];
};

const MissionItem: React.FC<DataRow> = ({ id, missionName, missionDeadLine, missionStatus }) => {
  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [actionType, setActionType] = useState(null);

  const handleVPress = () => {
    setModalText('PR을 요청하시겠습니까?');
    setVisible(true);
    setActionType('send');
  };

  const handleXPress = () => {
    setModalText('PR을 춰소하시겠습니까?');
    setVisible(true);
    setActionType('cancel');
  };
  const SendPr = () => {
    console.log('pr날리기');
    setVisible(false);
  };
  const cancelPr = () => {
    console.log('pr취소하기');
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.missionName}>{missionName}</Text>
        <Text style={styles.missionDate}>{missionDeadLine.toString().slice(0, 10)}</Text>
      </View>
      {missionStatus == 'PROGRESS' ? (
        <TouchableOpacity onPress={handleVPress} style={styles.buttonStyle}>
          {missionStatus === 'PROGRESS' && <AntDesign name="checkcircle" size={28} color="#005BA5" />}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleXPress} style={styles.buttonStyle}>
          {missionStatus === 'CHECKING' && <AntDesign name="closecircle" size={28} color="#B8B8B8" />}
        </TouchableOpacity>
      )}
      <ModalPopup visible={visible}>
        <CheckCancelModal
          visible={visible}
          onClose={() => setVisible(false)}
          text={modalText}
          onConfirm={() => (actionType === 'send' ? SendPr() : cancelPr())}
        />
      </ModalPopup>
    </View>
  );
};
export default MissionItem;
const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 90,
    backgroundColor: 'white',
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  missionName: {
    paddingLeft: 20,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
  },
  missionDate: {
    paddingLeft: 20,
    marginTop: 5,
    fontSize: 14,
    color: '#888888',
    fontFamily: 'PretendardVariable',
  },
  buttonStyle: {
    paddingRight: 20,
  },
});
