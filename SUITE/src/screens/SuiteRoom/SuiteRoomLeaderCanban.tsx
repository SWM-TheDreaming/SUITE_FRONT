import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import MissionRequestList from '../../hook/missionRequestList';
import mainPageStyleSheet from '../../style/style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

type DataRow = {
  id: string;
  missionName: string;
  missionDate: string;
  nickname: string;
};

const RequestData: DataRow[] = [
  { id: '0', missionName: '영어 독해', missionDate: '2023-07-15', nickname: 'son' },
  { id: '1', missionName: '영어 독해', missionDate: '2023-07-15', nickname: 'kim' },
  { id: '2', missionName: '영어 독해', missionDate: '2023-07-15', nickname: 'Lee' },
  { id: '3', missionName: '2장 외워오기', missionDate: '2023-07-18', nickname: 'You' },
  { id: '4', missionName: '2장 연습문제 풀이', missionDate: '2023-07-19', nickname: 'Hwang' },
  { id: '5', missionName: '3장 예습', missionDate: '2023-07-20', nickname: 'Ki' },
];

const SuiteRoomLeaderCanbanBoard = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View>
      <ScrollView>
        <View style={SuiteRoomStyleSheet.LeaderMissionStatusContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={SuiteRoomStyleSheet.MissionStatusText}>{'미션완료 요청'}</Text>
            <Text style={SuiteRoomStyleSheet.MissionLengthText}>{RequestData.length}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={SuiteRoomStyleSheet.CreateMissionButton}
              onPress={() => navigation.navigate('CreateMission')}
            >
              <Text style={SuiteRoomStyleSheet.CreateMissionText}>미션 생성</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={SuiteRoomStyleSheet.MissionContainer}>
          {RequestData.map((item) => (
            <MissionRequestList key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SuiteRoomLeaderCanbanBoard;
