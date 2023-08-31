import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRecoilValue } from 'recoil';
import { suiteRoomIdState } from '../../../recoil/atoms';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import ProgressCircle from 'react-native-progress-circle';
import StudyStatusTable from '../../hook/studyStatusTable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import mainPageStyleSheet from '../../style/style';
import ImageModalPopup from '../../hook/ImageModal';
import LeaderAttendanceModal from '../../components/presents/LeaderAttendanceModal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SuiteRoomLeaderDashboard = () => {
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const [visible, setVisible] = useState(false);
  const [number, setNumber] = useState<number>(0);
  const attendanceStart = () => {
    setNumber(Math.random())
  }
  useEffect(()=>{
    if(number!=0){
        setVisible(true)
    }
  },[number])
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
          <View style={{flexDirection : 'row'}}>
          <TouchableOpacity style={SuiteRoomStyleSheet.AttendanceCheckStart} onPress = {attendanceStart}>
            <Text style={mainPageStyleSheet.categortFilterApplyText}>출석 시작</Text>
          </TouchableOpacity>
          <TouchableOpacity style={SuiteRoomStyleSheet.ContractButtonConatiner}>
            <FontAwesome5 name="file-contract" size={20} color={'#050953'} />
            <Text style={SuiteRoomStyleSheet.ContractButtonText}>계약서 이력</Text>
          </TouchableOpacity>
          </View>
          <ImageModalPopup visible={visible}>
            <LeaderAttendanceModal
                visible={visible}
                onClose={() => setVisible(false)}
                text={'출석 번호는 10분 뒤 만료되니 \n 팀원들에게 빠르게 안내해주세요!'}
                number = {number}
            />
        </ImageModalPopup>
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
export default SuiteRoomLeaderDashboard;
