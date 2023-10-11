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

const SuiteRoomCanbanBoard = () => {
  const [content, setContent] = useState('진행 중');
  const [mission, setMission] = useState([]);
  const [selectedButton, setSelectedButton] = useState<string | null>('PROGRESS');
  const buttons: string[] = ['PROGRESS', 'CHECKING', 'COMPLETE'];
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const isFocused = useIsFocused();

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
        break;
      case 'CHECKING':
        setSelectedButton('CHECKING');
        setContent('승인 대기중');
        break;
      case 'COMPLETE':
        setSelectedButton('COMPLETE');
        setContent('완료');
        break;
    }
  };
  useEffect(() => {
    readMissionList();
  }, [selectedButton]);
  useEffect(() => {
    readMissionList();
  }, [isFocused]);
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
            <MissionItem
              key={item.missionId}
              missionId={item.missionId}
              missionName={item.missionName}
              missionDeadLine={item.missionDeadLine}
              missionStatus={selectedButton}
              afterPR={() => readMissionList()}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SuiteRoomCanbanBoard;
