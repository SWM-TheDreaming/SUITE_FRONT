import { StyleSheet, Platform } from 'react-native';
import { heightPercentage, widthPercentage } from '../responsive/ResponsiveSize';
import { Dimensions } from 'react-native';
const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height; //스크린 높이 초기화
const SuiteRoomStyleSheet = StyleSheet.create({
  SuiteRoomDetailContainer: {
    backgroundColor: 'white',
  },
  MyStudyRoomContainer: {
    backgroundColor: 'white',
  },
  SuiteRoomDetailupperBox: {
    marginLeft: widthPercentage(20),
    marginRight: widthPercentage(20),
    marginTop: heightPercentage(40),
  },
  SuiteRoomDetailTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: heightPercentage(14),
  },
  SuiteRoomDetailUpperBox: {
    height: heightPercentage(100),
    width: widthPercentage(320),
    marginTop: heightPercentage(16),
    backgroundColor: '#F8F8F8',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SuiteRoomBoxIconContainer: {
    marginLeft: widthPercentage(15),
    marginRight: widthPercentage(15),
    marginTop: heightPercentage(20),
    flexDirection: 'column',
    alignItems: 'center',
  },
  SuiteRoomBoxText: {
    fontSize: 10,
    fontFamily: 'PretendardVariable',
    color: '#686868',
    marginTop: 2,
  },
  SuiteRoomBoxData: {
    fontSize: 10,
    fontFamily: 'PretendardVariable',
    color: 'black',
    marginTop: 2,
  },
  SuiteRoomDetailContentContainer: {
    marginBottom: heightPercentage(20),
    marginTop: heightPercentage(24),
  },
  SuiteRoomDetailContent: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'PretendardVariable',
    textAlign: 'justify',
  },
  SuiteRoomLinkContainer: {
    marginBottom: heightPercentage(40),
    width: widthPercentage(320),
    height: heightPercentage(60),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 4,
  },
  SuiteRoomLinkBox: {
    flexDirection: 'row',
    paddingLeft: 7,
  },
  SuiteRoomLinkText: {
    width: widthPercentage(260),
    color: 'black',
    marginLeft: 5,
    fontFamily: 'PretendardVariable',
    fontSize: 16,
  },
  SuiteRoomDepositRuleText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
  },
  SuiteRoomDetailCircularBarContainer: {
    marginTop: heightPercentage(24),
    flexDirection: 'row',
  },
  SuiteRoomDetailCircularBar: {
    marginLeft: widthPercentage(20),
    marginRight: widthPercentage(20),
    flexDirection: 'column',
  },
  SuiteRoomDetailCircularBarText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
    color: 'black',
  },
  SuiteRoomCirculaBarInfoContainer: {
    marginTop: heightPercentage(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  SuiteRoomCircularBarInfoText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 14,
    fontFamily: 'PretendardVariable',
  },
  SuiteRoomDetailminAttendanceText: {
    color: '#4CADA8',
    fontSize: 12,
  },
  SuiteRoomDetailminMissionCompleteRate: {
    color: '#7072E6',
    fontSize: 12,
  },
  SuiteRoomDetailInfoText: {
    color: 'black',
    fontSize: 12,
  },
  SuiteRoomDetailInformationContainer: {
    marginTop: heightPercentage(40),
    width: widthPercentage(310),
    height: heightPercentage(170),
    backgroundColor: '#FFF4F4',
    marginBottom : heightPercentage(40)
  },
  SuiteRoomDetailInformationText: {
    marginTop: heightPercentage(10),
    paddingLeft: 25,
    paddingRight: 25,
    fontFamily: 'PretendardVariable',
    fontSize: 13,
    color: '#484848',
  },
  SuiteRoomDetailReaderButtonContainer: {
    marginBottom: heightPercentage(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SuiteRoomDetailCancelButton: {
    width: widthPercentage(150),
    height: heightPercentage(60),
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  SuiteRoomDetailUpdateyButton: {
    width: widthPercentage(150),
    height: heightPercentage(60),
    backgroundColor: '#050953',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SuiteRoomDetailScrabButton: {
    width: widthPercentage(50),
    height: heightPercentage(50),
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  SutieRoomDetailCheckinButton: {
    width: widthPercentage(260),
    height: heightPercentage(60),
    backgroundColor: '#050953',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MySuiteRoomStatusBarContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  MySuiteRoomStatusText: {
    width: Dimensions.get('window').width / 4,
    textAlign: 'center',
  },
  dashBoardContainer: {
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DepositDayContainer: {
    flexDirection: 'row',
  },
  DepositBox: {
    width: widthPercentage(160),
    height: heightPercentage(80),
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    marginRight: 7,
  },
  DepositDayInfoText: {
    fontSize: 14,
    fontFamily: 'PretendardVariable',
    color: 'black',
    paddingLeft: 20,
    paddingTop: 10,
  },
  DepositDayText: {
    fontSize: 18,
    fontFamily: 'PretendardVariable',
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 20,
    marginTop: 7,
  },
  DayBox: {
    width: widthPercentage(160),
    height: heightPercentage(80),
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
  },
  CircleProgressContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  AttendanceCircleBox: {
    width: widthPercentage(160),
    height: heightPercentage(230),
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    marginRight: 7,
  },
  MissionCircleBox: {
    width: widthPercentage(160),
    height: heightPercentage(230),
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
  },
  AttendanceMissionBox: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  StudyDashboardContainer: {
    marginTop: 32,
  },
  StudyInfoContainer: {
    width: widthPercentage(320),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  StudyInfoText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    fontFamily: 'PretendardVariable',
  },
  DepositText: {
    fontSize: 14,
    color: '#005BA5',
    fontFamily: 'PretendardVariable',
  },
  StudyStatusContainer: {
    marginBottom: 30,
  },
  AttendanceBoxContainer: {
    backgroundColor: '#F8F8F8',
    width: widthPercentage(320),
    height: heightPercentage(110),
  },
  MyattendaceTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  MyattendanceText: {
    color: 'black',
    fontFamily: 'PretendardVariable',
    fontSize: 14,
    paddingLeft: 24,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  MyAttendanceRate: {
    color: '#050953',
    fontFamily: 'PretendardVariable',
    fontSize: 20,
    paddingRight: 24,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  MyattendanceProgressBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  MissionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  MissionStatusContainer: {
    marginTop: 24,
    marginLeft: 20,
    marginRight : 20,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  LeaderMissionStatusContainer: {
    marginTop: 24,
    marginLeft: 20,
    marginRight : 20,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'space-between'
  },
  MissionStatusText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
  },
  MissionLengthText: {
    marginLeft: 5,
    color: '#00ACCF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
  },
  ChoiceMissionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  ChoiceMissionBox: {
    width: widthPercentage(320),
    height: heightPercentage(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 24,
  },
  SelectedMissionButton: {
    width: widthPercentage(100),
    height: heightPercentage(35),
    borderRadius: 24,
    backgroundColor: '#050953',
  },
  MissionButton: {
    width: widthPercentage(100),
    height: heightPercentage(35),
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SelectedMissionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'PretendardVariable',
  },
  MissionText: {
    color: '#D8D8D8',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'PretendardVariable',
  },
  MissionScrollView: {
    height: Height,
  },
  CreateMissionButton : {
    width : widthPercentage(100),
    height : heightPercentage (40),
    backgroundColor : '#050953',
    borderRadius : 24,
    justifyContent : 'center',
    alignItems : 'center'
  },
  CreateMissionText : {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'PretendardVariable',  
  },
  AttendanceCheckStart: {
    width: widthPercentage(260),
    height: heightPercentage(50),
    marginTop : 20,
    backgroundColor: '#050953',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AttendanceModal: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: heightPercentage(20),
    textAlign: 'center',
    color: 'black',
  },
  AttendanceModalNumberText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: heightPercentage(10),
    textAlign: 'center',
    color: 'black',
  },
}
);

export default SuiteRoomStyleSheet;
