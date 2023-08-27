import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import { useRecoilValue } from 'recoil';
import { suiteRoomIdState } from '../../../recoil/atoms';
import MyAttendanceTable from '../../hook/myAttendanceTable';
import * as Progress from 'react-native-progress';

const SuiteRoomMyAttendance = () => {
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={SuiteRoomStyleSheet.MyStudyRoomContainer}>
        <View style={SuiteRoomStyleSheet.dashBoardContainer}>
          <View style={SuiteRoomStyleSheet.AttendanceBoxContainer}>
            <View style={SuiteRoomStyleSheet.MyattendaceTextContainer}>
              <Text style={SuiteRoomStyleSheet.MyattendanceText}>내 출석률</Text>
              <Text style={SuiteRoomStyleSheet.MyAttendanceRate}>80%</Text>
            </View>
            <View style={SuiteRoomStyleSheet.MyattendanceProgressBarContainer}>
              <Progress.Bar progress={0.8} width={288} height={30} color={'#4CADA8'} unfilledColor={'#E2FFFE'} />
            </View>
          </View>

          <View style={SuiteRoomStyleSheet.StudyDashboardContainer}>
            <View style={SuiteRoomStyleSheet.StudyInfoContainer}>
              <Text style={SuiteRoomStyleSheet.StudyInfoText}>출석 내역</Text>
              <Text style={SuiteRoomStyleSheet.DepositText}>보증금 10,000원</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={SuiteRoomStyleSheet.StudyStatusContainer}>
        <MyAttendanceTable />
      </View>
    </ScrollView>
  );
};

export default SuiteRoomMyAttendance;
