import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../../hook/header';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import MissionItem from '../../hook/missionList';
import { MissionListApi } from '../../api/StudyRoom/MissionListApi';
import { useRecoilValue } from 'recoil';
import { suiteRoomIdState, tokenState, suiteRoomStatusState } from '../../../recoil/atoms';

type DataRow = {
  id: string;
  missionName: string;
  missionDate: string;
  status: string;
};

const ProgressData: DataRow[] = [
  { id: '0', missionName: '영어 독해', missionDate: '2023-07-15', status: 'progress' },
  { id: '1', missionName: '단어 외우기', missionDate: '2023-07-16', status: 'progress' },
  { id: '2', missionName: '영작', missionDate: '2023-07-17', status: 'progress' },
  { id: '3', missionName: '2장 외워오기', missionDate: '2023-07-18', status: 'progress' },
  { id: '4', missionName: '2장 연습문제 풀이', missionDate: '2023-07-19', status: 'progress' },
  { id: '5', missionName: '3장 예습', missionDate: '2023-07-20', status: 'progress' },
];
const RequestData: DataRow[] = [{ id: '1', missionName: '단어 외우기', missionDate: '2023-07-16', status: 'request' }];
const CompleteData: DataRow[] = [
  { id: '0', missionName: '영어 독해', missionDate: '2023-07-15', status: 'complete' },
  { id: '2', missionName: '영작', missionDate: '2023-07-17', status: 'complete' },
  { id: '4', missionName: '2장 연습문제 풀이', missionDate: '2023-07-19', status: 'complete' },
];

const SuiteRoomCanbanBoard = () => {
  const [content, setContent] = useState('진행 중');
  const [data, setData] = useState(ProgressData);
  const [mission, setMission] = useState([]);
  const [selectedButton, setSelectedButton] = useState<string | null>('PROGRESS');
  const buttons: string[] = ['PROGRESS', 'CHECKING', 'COMPLETE'];
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const readMissionList = async () => {
    try {
      const datalist = await MissionListApi(tokenId, parseInt(SuiteRoomId), selectedButton);
      setMission(datalist);
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  const handlePress = (type: string) => {
    switch (type) {
      case 'PROGRESS':
        setSelectedButton('PROGRESS');
        setContent('진행 중');
        setData(ProgressData);
        break;
      case 'CHECKING':
        setSelectedButton('CHECKING');
        setContent('승인 대기중');
        setData(RequestData);
        break;
      case 'COMPLETE':
        setSelectedButton('COMPLETE');
        setContent('완료');
        setData(CompleteData);
        break;
    }
  };
  useEffect(() => {
    readMissionList();
  }, [selectedButton]);
  return (
    <View>
      <View style={SuiteRoomStyleSheet.ChoiceMissionContainer}>
        <View style={SuiteRoomStyleSheet.ChoiceMissionBox}>
          {buttons.map((button) => (
            <TouchableOpacity
              key={button}
              style={[
                SuiteRoomStyleSheet.MissionButton,
                selectedButton === button && SuiteRoomStyleSheet.SelectedMissionButton,
              ]}
              onPress={() => handlePress(button)}
            >
              <Text
                style={[
                  SuiteRoomStyleSheet.MissionText,
                  selectedButton === button && SuiteRoomStyleSheet.SelectedMissionText,
                ]}
              >
                {button === 'PROGRESS' ? '진행중' : button === 'CHECKING' ? '승인 대기 중' : '완료'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={SuiteRoomStyleSheet.MissionStatusContainer}>
          <Text style={SuiteRoomStyleSheet.MissionStatusText}>{content}</Text>
          <Text style={SuiteRoomStyleSheet.MissionLengthText}>{mission.length}</Text>
        </View>
        <View style={SuiteRoomStyleSheet.MissionContainer}>
          {mission.map((item) => (
            <MissionItem key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SuiteRoomCanbanBoard;
