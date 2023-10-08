import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalPopup from '../hook/modal';
import CheckCancelModal from '../hook/checkCancelModal';
import { useRecoilValue } from 'recoil';
import { suiteRoomIdState, tokenState, hostState } from '../../recoil/atoms';
import { MissionPullRequestApi } from '../api/StudyRoom/MissionPullReqeustApi';
import { DeleteMissionApi } from '../api/StudyRoom/DeleteMissionApi';
import { useIsFocused } from '@react-navigation/native';
type DataRow = {
  missionId: string;
  missionName: string;
  missionDeadLine: Date;
  missionStatus: string;
};

type DataListProps = {
  data: DataRow[];
};

const MissionItem: React.FC<DataRow> = ({ missionId, missionName, missionDeadLine, missionStatus }) => {
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const Ishost = useRecoilValue(hostState);
  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [actionType, setActionType] = useState(null);
  const isFocusued = useIsFocused();
  const DeleteMission = async () => {
    try {
      const data = await DeleteMissionApi(tokenId, parseInt(SuiteRoomId), missionName);
      Alert.alert(data);
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
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
  const LeaderXPress = () => {
    setModalText('미션을 춰소하시겠습니까?');
    setActionType('Delete');
    setVisible(true);
  };
  const SendPr = () => {
    MissionPullRequestApi(tokenId, parseInt(SuiteRoomId), missionName);
    setVisible(false);
  };
  const cancelPr = () => {
    if (actionType === 'Delete') {
      DeleteMission();
    } else {
    }
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.missionName}>{missionName}</Text>
        <Text style={styles.missionDate}>{missionDeadLine.toString().slice(0, 10)}</Text>
      </View>
      {Ishost == true ? (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={LeaderXPress} style={styles.buttonStyle}>
            <AntDesign name="closecircle" size={28} color="#B8B8B8" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleVPress} style={styles.buttonStyle}>
            <AntDesign name="checkcircle" size={28} color="#005BA5" />
          </TouchableOpacity>
        </View>
      ) : missionStatus == 'PROGRESS' ? (
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
