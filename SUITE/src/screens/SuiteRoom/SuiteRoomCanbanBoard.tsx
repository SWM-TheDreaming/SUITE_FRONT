import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../../hook/header';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import MissionItem from '../../hook/missionList';

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
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const buttons: string[] = ['progress', 'request', 'complete'];
  const handlePress = (type: string) => {
    switch (type) {
      case 'progress':
        setSelectedButton('progress');
        setContent('진행 중');
        setData(ProgressData);
        break;
      case 'request':
        setSelectedButton('request');
        setContent('승인 대기중');
        setData(RequestData);
        break;
      case 'complete':
        setSelectedButton('complete');
        setContent('완료');
        setData(CompleteData);
        break;
    }
  };
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
                {button === 'progress' ? '진행중' : button === 'request' ? '승인 대기 중' : '완료'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={SuiteRoomStyleSheet.MissionStatusContainer}>
          <Text style={SuiteRoomStyleSheet.MissionStatusText}>{content}</Text>
          <Text style={SuiteRoomStyleSheet.MissionLengthText}>{data.length}</Text>
        </View>
        <View style={SuiteRoomStyleSheet.MissionContainer}>
          {data.map((item) => (
            <MissionItem key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SuiteRoomCanbanBoard;
