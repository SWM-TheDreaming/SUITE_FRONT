import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRecoilValue } from 'recoil';
import { suiteRoomIdState } from '../../../recoil/atoms';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import ProgressCircle from 'react-native-progress-circle';
import StudyStatusTable from '../../hook/studyStatusTable';
const SuiteRoomDashboard = () => {
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={SuiteRoomStyleSheet.MyStudyRoomContainer}>
        <View style={SuiteRoomStyleSheet.dashBoardContainer}>
          <View style={SuiteRoomStyleSheet.DepositDayContainer}>
            <View style={SuiteRoomStyleSheet.DepositBox}>
              <Text style={SuiteRoomStyleSheet.DepositDayInfoText}>내 환급액</Text>
              <Text style={SuiteRoomStyleSheet.DepositDayText}>100,000원</Text>
            </View>
            <View style={SuiteRoomStyleSheet.DayBox}>
              <Text style={SuiteRoomStyleSheet.DepositDayInfoText}>체크아웃</Text>
              <Text style={SuiteRoomStyleSheet.DepositDayText}>D-12</Text>
            </View>
          </View>
          <View style={SuiteRoomStyleSheet.CircleProgressContainer}>
            <View style={SuiteRoomStyleSheet.AttendanceCircleBox}>
              <View>
                <Text style={SuiteRoomStyleSheet.DepositDayInfoText}>내 출석률</Text>
              </View>
              <View style={SuiteRoomStyleSheet.AttendanceMissionBox}>
                <ProgressCircle
                  percent={80}
                  radius={65}
                  borderWidth={45}
                  color="#4CADA8"
                  shadowColor="#E2FFFE"
                  bgColor="white"
                >
                  <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>80%</Text>
                </ProgressCircle>
              </View>
            </View>
            <View style={SuiteRoomStyleSheet.MissionCircleBox}>
              <View>
                <Text style={SuiteRoomStyleSheet.DepositDayInfoText}>내 미션달성률</Text>
              </View>
              <View style={SuiteRoomStyleSheet.AttendanceMissionBox}>
                <ProgressCircle
                  percent={90}
                  radius={65}
                  borderWidth={45}
                  color="#A38AE7"
                  shadowColor="#F0EBFF"
                  bgColor="white"
                >
                  <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>90%</Text>
                </ProgressCircle>
              </View>
            </View>
          </View>
          <View style={SuiteRoomStyleSheet.StudyDashboardContainer}>
            <View style={SuiteRoomStyleSheet.StudyInfoContainer}>
              <Text style={SuiteRoomStyleSheet.StudyInfoText}>팀 스터디 현황</Text>
              <Text style={SuiteRoomStyleSheet.DepositText}>보증금 10,000원</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={SuiteRoomStyleSheet.StudyStatusContainer}>
        <StudyStatusTable />
      </View>
    </ScrollView>
  );
};
export default SuiteRoomDashboard;
