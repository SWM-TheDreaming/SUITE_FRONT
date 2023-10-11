import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../../hook/header';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import MissionItem from '../../hook/missionList';
import { MissionListApi } from '../../api/StudyRoom/MissionListApi';
import { useRecoilValue } from 'recoil';
import { suiteRoomIdState, tokenState, suiteRoomStatusState } from '../../../recoil/atoms';
import { useIsFocused } from '@react-navigation/native';

type DataRow = {
  id: string;
  missionName: string;
  missionDate: string;
  status: string;
};

const HallOfFameCanbanBoard = () => {
  const [mission, setMission] = useState([]);
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const isFocused = useIsFocused();

  const readMissionList = async () => {
    try {
      const datalist = await MissionListApi(tokenId, parseInt(SuiteRoomId), 'COMPLETE');
      setMission(datalist);
      console.log(datalist);
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  useEffect(() => {
    readMissionList();
  }, []);
  useEffect(() => {
    readMissionList();
  }, [isFocused]);
  return (
    <View>
      <View style={SuiteRoomStyleSheet.ChoiceMissionContainer}></View>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={SuiteRoomStyleSheet.MissionStatusContainer}>
          <Text style={SuiteRoomStyleSheet.MissionStatusText}>완료된 미션</Text>
          <Text style={SuiteRoomStyleSheet.MissionLengthText}>{mission.length}</Text>
        </View>
        <View style={SuiteRoomStyleSheet.MissionContainer}>
          {mission.map((item) => (
            <MissionItem
              key={item.missionId}
              missionId={item.missionId}
              missionName={item.missionName}
              missionDeadLine={item.missionDeadLine}
              afterPR={() => readMissionList()}
              missionStatus={'COMPLETE'}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HallOfFameCanbanBoard;
