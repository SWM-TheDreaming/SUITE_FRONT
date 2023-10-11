import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import { useRecoilValue } from 'recoil';
import { suiteRoomIdState, tokenState } from '../../../recoil/atoms';
import MyAttendanceTable from '../../hook/myAttendanceTable';
import * as Progress from 'react-native-progress';
import { AttendanceListApi } from '../../api/StudyRoom/AttendanceListApi';
import { useIsFocused } from '@react-navigation/native';

const SuiteRoomMyAttendance = () => {
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const [myAttendanceRate, setMyAttendanceRate] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [attendanceList, setAttendanceList] = useState([]);
  const isFocused = useIsFocused();

  const readAttendanceList = async () => {
    try {
      const datalist = await AttendanceListApi(tokenId, parseInt(SuiteRoomId));
      console.log(datalist);
      setMyAttendanceRate(datalist.data.myAttendanceRate * 100);
      setDeposit(datalist.data.depositAmount.toLocaleString());
      setAttendanceList(datalist.data.attendanceBoardDtoList);
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  useEffect(() => {
    readAttendanceList();
  }, []);
  useEffect(() => {
    readAttendanceList();
  }, [isFocused]);
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={SuiteRoomStyleSheet.MyStudyRoomContainer}>
        <View style={SuiteRoomStyleSheet.dashBoardContainer}>
          <View style={SuiteRoomStyleSheet.AttendanceBoxContainer}>
            <View style={SuiteRoomStyleSheet.MyattendaceTextContainer}>
              <Text style={SuiteRoomStyleSheet.MyattendanceText}>내 출석률</Text>
              <Text style={SuiteRoomStyleSheet.MyAttendanceRate}>{myAttendanceRate}%</Text>
            </View>
            {/* <View style={SuiteRoomStyleSheet.MyattendanceProgressBarContainer}>
              <Progress.Bar
                progress={myAttendanceRate === 0 ? 0 : myAttendanceRate / 100}
                width={288}
                height={30}
                color={'#4CADA8'}
                unfilledColor={'#E2FFFE'}
              />
            </View> */}
          </View>

          <View style={SuiteRoomStyleSheet.StudyDashboardContainer}>
            <View style={SuiteRoomStyleSheet.StudyInfoContainer}>
              <Text style={SuiteRoomStyleSheet.StudyInfoText}>출석 내역</Text>
              <Text style={SuiteRoomStyleSheet.DepositText}>보증금 {deposit}원</Text>
            </View>
          </View>
        </View>
      </View>
      {/* <View style={SuiteRoomStyleSheet.StudyStatusContainer}>
        <MyAttendanceTable data={[{}, ...attendanceList]} />
      </View> */}
    </ScrollView>
  );
};

export default SuiteRoomMyAttendance;
