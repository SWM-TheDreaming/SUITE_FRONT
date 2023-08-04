import { StyleSheet, Platform } from 'react-native';
import { heightPercentage, widthPercentage } from '../responsive/ResponsiveSize';
import { Dimensions } from 'react-native';
const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height; //스크린 높이 초기화
const mainPageStyleSheet = StyleSheet.create({
  container: {
    //전체 컨테이너
    flex: 1,
    alignItems: 'center',
  },
  box: {
    //컴포넌트 박스 설정
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    width: widthPercentage(328),
    height: 140,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  innerbox: {
    // 내부 컴포넌트들 정렬
    paddingLeft: widthPercentage(20),
    paddingTop: heightPercentage(18),
  },
  tag: {
    //ddaybox, categorybox, depositamountbox 정렬
    flexDirection: 'row',
  },
  ddaybox: {
    //ddaybox
    width: widthPercentage(37),
    height: heightPercentage(20),
    backgroundColor: '#4CADA8',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4, //옆 컴포넌트와의 거리 조절
  },
  mainPageSmallBoxtext: {
    //dday, category text 스타일
    fontSize: 12,
    color: 'white',
  },
  categorybox: {
    //categorybox
    width: widthPercentage(44),
    height: heightPercentage(20),
    backgroundColor: '#3380F9',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4, //옆 컴포넌트와의 거리 조절
  },
  depositamountbox: {
    //depositamountbox
    width: widthPercentage(32),
    height: heightPercentage(20),
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#050953',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4, //옆 컴포넌트와의 거리 조절
  },
  depositamounttext: {
    fontSize: 12,
    color: '#050953',
    fontFamily: 'PretendardVariable',
  },
  titletext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 12,
    marginBottom: 8,
    fontFamily: 'PretendardVariable',
  },
  detailtext: {
    fontSize: 12,
    color: '#686868',
    marginTop: 8,
    fontFamily: 'PretendardVariable',
  },
  searchAndalarmbox: {
    backgroundColor: 'white',
    height: heightPercentage(70),
    width: Width,
  },
  statuscontainer: {
    flex: 1,
    paddingTop: 60, // statusBar만큼 높이 설정
  },
  searchBorder: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    fontSize: 13,
    justifyContent: 'space-between',
    marginLeft: widthPercentage(20),
    marginTop: heightPercentage(12),
    marginBottom: heightPercentage(12),
    width: widthPercentage(280),
    height: heightPercentage(40),
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    paddingLeft: widthPercentage(10),
    paddingRight: widthPercentage(10),
  },
  categoryPageContainer: {
    backgroundColor: 'white',
    width: Width,
    height: Height,
  },
  selectCategoryContainer: {
    flexDirection: 'row',
    marginTop: heightPercentage(16),
  },
  selectCategoryBox: {
    width: widthPercentage(65),
    height: heightPercentage(28),
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#D8D8D8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectCategoryText: {
    fontSize: 12,
    color: '#686868',
    fontFamily: 'PretendardVariable',
  },
  filterBox: {
    flexDirection: 'row',
    height: heightPercentage(48),
    justifyContent: 'center',
    alignItems: 'center', // 수직 방향 가운데 정렬
    position: 'relative', // position을 설정해야 하위 컴포넌트의 position 속성이 적용됨
  },
  filterText: {
    flex: 1, // Text 컴포넌트가 남은 공간을 모두 차지하도록 설정
    fontSize: 16,
    textAlign: 'center', // 수평 방향 가운데 정렬
    paddingTop: heightPercentage(15),
    fontFamily: 'PretendardVariable',
  },
  filterOutIcon: {
    position: 'absolute',
    right: widthPercentage(25), // 우측 끝과 아이콘 사이 간격
    top: '70%', // 수직 방향 가운데 정렬
    transform: [{ translateY: -12 }], // 세로 중앙 위치 조정
  },
  filterInfoBox: {
    flexDirection: 'row',
    height: heightPercentage(48),
    marginTop: heightPercentage(20),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: widthPercentage(20),
    paddingLeft: widthPercentage(20),
  },
  categoryChoiceText: {
    fontSize: 16,
    color: '#686868',
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
  },
  choiceInfoText: {
    fontSize: 12,
    color: '#005BA5',
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
  },
  categoryButtonContainner: {
    marginTop: heightPercentage(24),
    paddingRight: widthPercentage(20),
    paddingLeft: widthPercentage(20),
  },
  categoryButtonBox: {
    width: widthPercentage(102),
    height: heightPercentage(40),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: widthPercentage(7),
    marginTop: heightPercentage(7),
  },
  categoryButtonText: {
    fontSize: 12,
    fontFamily: 'PretendardVariable',
  },
  loginContainer: {
    width: Width,
    height: Height,
    backgroundColor: 'white',
  },
  logoContainer: {
    marginTop:heightPercentage(50),
    height: heightPercentage(140),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle : {
    width : 120,
    height : 120
  },
  idpwInputContainer: {
    marginLeft: widthPercentage(24),
    marginRight: widthPercentage(24),
    marginTop: heightPercentage(24),
  },
  idpwtext: {
    fontSize: 14,
    color: '#888888',
    marginTop: heightPercentage(10),
    fontFamily: 'PretendardVariable',
  },
  idpwInputBox: {
    width: widthPercentage(310),
    height: heightPercentage(50),
    marginTop: heightPercentage(10),
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 13,
  },
  loginButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    height: heightPercentage(50),
    width: widthPercentage(310),
    marginTop: heightPercentage(20),
    backgroundColor: '#050953',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
  },
  idPwInputErrorText: {
    color: 'red',
    fontSize: 10,
    marginTop: 4,
    fontFamily: 'PretendardVariable',
  },
  authInfoContainer: {
    marginTop: heightPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  authInfoText: {
    color: '#686868',
    fontSize: 11,
    fontFamily: 'PretendardVariable',
  },
  authInfobar: {
    color: '#686868',
    fontSize: 11,
    marginRight: widthPercentage(25),
    marginLeft: widthPercentage(25),
  },
  snsLoginButtonContainer: {
    marginTop: heightPercentage(30),
    marginBottom: heightPercentage(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  kakaoLoginButton: {
    backgroundColor: '#FEE500',
    borderRadius: 5,
    width: widthPercentage(312),
    height: heightPercentage(48),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentage(10),
    flexDirection: 'row',
  },
  googleLoginButton: {
    backgroundColor: 'white',
    borderColor: '#D8D8D8',
    borderRadius: 5,
    borderWidth: 1,
    width: widthPercentage(312),
    height: heightPercentage(48),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentage(10),
    flexDirection: 'row',
  },
  snsLoginButtonText: {
    fontSize: 14,
    color: 'black',
    paddingLeft: 5,
    fontFamily: 'PretendardVariable',
  },
  underStatusBar: {
    width: Width,
    height: heightPercentage(48),
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageBackIcon: {
    marginTop: 12,
    marginLeft: 12,
  },
  termOfUseInfoBox: {
    marginTop: heightPercentage(60),
    justifyContent: 'center',
    paddingLeft: 15,
  },
  termOfUseInfoText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'PretendardVariable',
  },
  AllcheckboxContainer: {
    marginTop: heightPercentage(40),
    flexDirection: 'row',
    marginLeft: 17,
  },
  AllcheckboxText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
  },
  IndividualCheckBoxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentage(30),
  },
  IndividualCheckBox: {
    backgroundColor: '#F4FAFF',
    width: widthPercentage(312),
    height: heightPercentage(266),
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 12,
  },
  IndividualCheck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentage(20),
  },
  IndivdualCheckText: {
    color: '#686868',
    fontSize: 14,
    marginLeft: 12,
    fontFamily: 'PretendardVariable',
  },
  checkBoxTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  termOfUseDetailClick: {
    justifyContent: 'center',
    paddingRight: 15,
  },
  SignUpNextBtnContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignUpNextBtnBtn: {
    width: widthPercentage(320),
    height: heightPercentage(50),
    backgroundColor: '#050953',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  disabledSignUpNextBtnBtn: {
    width: widthPercentage(320),
    height: heightPercentage(50),
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  SignUpNextBtnText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
  },
  SignUpText: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 16,
    color: '#000000',
    fontFamily: 'PretendardVariable',
  },
  emailAuthenticationContainer: {
    marginTop: heightPercentage(40),
    marginLeft: widthPercentage(24),
    marginRight: widthPercentage(24),
  },
  emailCodeAuthenticationContainer: {
    marginTop: heightPercentage(100),
    marginLeft: widthPercentage(24),
    marginRight: widthPercentage(24),
  },
  securityNumBox: {
    width: widthPercentage(140),
    height: heightPercentage(50),
    marginTop: heightPercentage(10),
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 13,
  },
  categoySelectBox: {
    borderColor: '#E8E8E8',
    borderRadius: 3,
    borderWidth: 1,
    marginTop: heightPercentage(10),
  },
  selectStudymethod: {
    width: widthPercentage(160),
    height: heightPercentage(50),
    marginTop: heightPercentage(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8E8',
    borderRadius: 3,
    borderWidth: 1,
  },
  selectedStudymethod: {
    width: widthPercentage(160),
    height: heightPercentage(50),
    marginTop: heightPercentage(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#050953',
    borderRadius: 3,
    borderWidth: 1,
  },
  onOfflineText: {
    fontSize: 16,
    color: 'black',
  },
  noValidateCheckText: {
    fontSize: 14,
    color: '#888888',
    marginTop: heightPercentage(20),
    fontFamily: 'PretendardVariable',
  },
  choiceProfileContainer: {
    flex : 1,
    alignItems:'center',
    marginTop : heightPercentage(75)
  },
  choiceProfile : {
    width : 188,
    height : 188,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
  },
  choiceProfileImage : {
    width:188,
    height:188,
    borderRadius:100,
  },
  profileInputBox: {
    width: widthPercentage(310),
    height: heightPercentage(50),
    marginTop: heightPercentage(50),
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 13,
  },
  signUpCompleteText : {
    fontsize : 10,
    color : "#B3ADAD",
    fontFamily: 'PretendardVariable',
  },
  modalContainer : {
    zIndex:3,
    position:'absolute',
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    paddingTop: 50,
    width : widthPercentage(280),
    height : heightPercentage(352),
    backgroundColor : '#050953',

  },
  modalButton : {
    width : widthPercentage(240),
    height : heightPercentage(50),
    backgroundColor : '#050953',
    borderRadius : 25
  }
});

export default mainPageStyleSheet;
