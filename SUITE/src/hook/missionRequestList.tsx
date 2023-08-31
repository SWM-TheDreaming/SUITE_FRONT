import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalPopup from '../hook/modal';
import CheckCancelModal from '../hook/checkCancelModal';

type DataRow = {
  id: string;
  missionName: string;
  missionDate: string;
  nickname: string;
};

type DataListProps = {
  data: DataRow[];
};

const MissionRequestList: React.FC<DataRow> = ({ id, missionName, missionDate, nickname }) => {
    const [visible, setVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const [actionType, setActionType] = useState(null);

    const handleVPress = () => {
    setModalText('PR을 승인하시겠습니까?');
    setVisible(true);
    setActionType('send');
  };

  const handleXPress = () => {
    setModalText('PR을 거부하시겠습니까?');
    setVisible(true);
    setActionType('cancel');
  };
  const acceptPr = () => {
    console.log(id)
    console.log('PR 승인하기');
    setVisible(false);
  };
  const rejectPr = () => {
    console.log(id)
    console.log('PR 거부하기');
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.missionName}>{missionName}</Text>
        <View style = {{flexDirection : 'row'}}>
            <Text style={styles.nickname}>{nickname}</Text>
            <Text style={styles.middlebar}> | </Text>
            <Text style={styles.missionDate}>{missionDate}</Text>
        </View>
      </View>
        <View style={{flexDirection:'row'}}> 
            <TouchableOpacity onPress={handleXPress} style={styles.buttonStyle}>
                <AntDesign name="closecircle" size={28} color="#B8B8B8" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleVPress} style={styles.buttonStyle}>
            <AntDesign name="checkcircle" size={28} color="#005BA5" />
        </TouchableOpacity>
        </View>
      <ModalPopup visible={visible}>
        <CheckCancelModal
          visible={visible}
          onClose={() => setVisible(false)}
          text={modalText}
          onConfirm={() => (actionType === 'send' ? acceptPr() : rejectPr())}
        />
      </ModalPopup>
    </View>
  );
};
export default MissionRequestList;
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
    ...Platform.select({
        ios: {
          shadowColor: '#000000',
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1,
        },
        android: {
          elevation: 4,
        },
      }),
  },
  missionName: {
    paddingLeft: 20,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
  },
  nickname: {
    paddingLeft: 20,
    paddingRight : 5,
    marginTop: 5,
    fontSize: 14,
    color: '#888888',
    fontFamily: 'PretendardVariable',
  },
  middlebar: {
    marginTop: 5,
    fontSize: 14,
    color: '#888888',
    fontFamily: 'PretendardVariable',
  },
  missionDate: {
    paddingLeft : 5,
    marginTop: 5,
    fontSize: 14,
    color: '#888888',
    fontFamily: 'PretendardVariable',
  },
  buttonStyle: {
    paddingRight: 10,
  },
});
