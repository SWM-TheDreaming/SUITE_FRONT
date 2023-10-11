import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import MissionRequestList from '../../hook/missionRequestList';
import mainPageStyleSheet from '../../style/style';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { MissionPullRequestListApi } from '../../api/StudyRoom/MissionPullRequestListApi';
import { useRecoilValue } from 'recoil';
import { suiteRoomIdState, tokenState } from '../../../recoil/atoms';
import { IsStudyEndApi } from '../../api/SuiteRoom/StudyEndApi';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

type DataRow = {
  missionId: string;
  missionName: string;
  missionDeadLine: string;
  nickname: string;
};

const SuiteRoomLeaderCanbanBoard = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const [PRList, setPRList] = useState([]);
  const [endVisible, setEndVisible] = useState(false);

  const isFocused = useIsFocused();

  const readMissionRequest = async () => {
    try {
      const datalist = await MissionPullRequestListApi(tokenId, parseInt(SuiteRoomId));
      setPRList(datalist);
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  const IsStudyEnd = async () => {
    const statusCode = await IsStudyEndApi(tokenId, parseInt(SuiteRoomId));
    if (statusCode == true) {
      setEndVisible(true);
    }
  };
  useEffect(() => {
    readMissionRequest();
    IsStudyEnd();
  }, []);
  useEffect(() => {
    readMissionRequest();
    IsStudyEnd();
  }, [isFocused]);
  return (
    <View>
      <ScrollView bounces={false}>
        <View style={SuiteRoomStyleSheet.LeaderMissionStatusContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={SuiteRoomStyleSheet.MissionStatusText}>{'미션완료 요청'}</Text>
            <Text style={SuiteRoomStyleSheet.MissionLengthText}>{PRList.length}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={[
                SuiteRoomStyleSheet.CreateMissionButton,
                endVisible && SuiteRoomStyleSheet.disabledCreateMissionButton, // endVisible 값에 따라 스타일 조건부 적용
              ]}
              onPress={() => navigation.navigate('CreateMission')}
              disabled={endVisible}
            >
              <Text style={SuiteRoomStyleSheet.CreateMissionText}>미션 생성</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={SuiteRoomStyleSheet.MissionContainer}>
          {PRList.map((item) => (
            <MissionRequestList
              key={item.missionId}
              missionId={item.missionId}
              missionName={item.missionName}
              missionDeadLine={item.missionDeadLine}
              nickname={item.nickname}
              afterApprove={() => readMissionRequest()}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SuiteRoomLeaderCanbanBoard;
