import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useRecoilValue } from 'recoil';
import { suiteRoomIdState, tokenState, suiteRoomStatusState } from '../../../recoil/atoms';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import ProgressCircle from 'react-native-progress-circle';
import StudyStatusTable from '../../hook/studyStatusTable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import mainPageStyleSheet from '../../style/style';
import ImageModalPopup from '../../hook/ImageModal';
import LeaderAttendanceModal from '../../components/presents/LeaderAttendanceModal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { SuiteRoomStart } from '../../api/SuiteRoom/SuiteRoomStartAPi';
import ModalPopup from '../../hook/modal';
import CheckCancelModal from '../../hook/checkCancelModal';
import PayCheckModal from '../../components/presents/PayCheckModalPresent';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const SuiteRoomLeaderDashboard = () => {
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const [visible, setVisible] = useState(false);
  const [startVisible, setStartVisible] = useState(false);
  const [number, setNumber] = useState<number>(0);
  const suiteRoomStatus = useRecoilValue(suiteRoomStatusState);
  const navigation = useNavigation<RootStackNavigationProp>();

  const attendanceStart = () => {
    setNumber(Math.random());
  };
  const studyStartButtonHandler = () => {
    SuiteRoomStart(tokenId, parseInt(SuiteRoomId));
    setStartVisible(false);
    Alert.alert('스터디가 시작되었습니다!');
    //다시 API 불러오는 코드
  };
  useEffect(() => {
    if (number != 0) {
      setVisible(true);
    }
  }, [number]);
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <ModalPopup visible={startVisible}>
        <CheckCancelModal
          visible={startVisible}
          onClose={() => setStartVisible(false)}
          text={'스터디를 시작하시겠습니까?'}
          onConfirm={studyStartButtonHandler}
        />
      </ModalPopup>
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
          <View style={{ flexDirection: 'row' }}>
            {suiteRoomStatus == 'START' ? (
              <TouchableOpacity style={SuiteRoomStyleSheet.AttendanceCheckStart} onPress={attendanceStart}>
                <Text style={mainPageStyleSheet.categortFilterApplyText}>출석 시작</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={SuiteRoomStyleSheet.AttendanceCheckStart} onPress={() => setStartVisible(true)}>
                <Text style={mainPageStyleSheet.categortFilterApplyText}>스터디 시작</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={SuiteRoomStyleSheet.ContractButtonConatiner}
              onPress={() => navigation.navigate('ContractTabNavigation')}
            >
              <FontAwesome5 name="file-contract" size={20} color={'#050953'} />
              <Text style={SuiteRoomStyleSheet.ContractButtonText}>계약서 이력</Text>
            </TouchableOpacity>
          </View>
          <ImageModalPopup visible={visible}>
            <LeaderAttendanceModal
              visible={visible}
              onClose={() => setVisible(false)}
              text={'출석 번호는 10분 뒤 만료되니 \n 팀원들에게 빠르게 안내해주세요!'}
              number={number}
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
