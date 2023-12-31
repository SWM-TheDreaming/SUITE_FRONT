import { StyleSheet, Platform } from 'react-native';
import { heightPercentage, widthPercentage } from '../responsive/ResponsiveSize';
import { Dimensions } from 'react-native';
const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height; //스크린 높이 초기화
const AnpServiceStyleSheet = StyleSheet.create({
  AlarmContainer: {
    width: widthPercentage(60),
    flexDirection: 'row',
    height: heightPercentage(130),
    borderTopColor: '#E8E8E8',
    borderBottomColor: '#E8E8E8',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: heightPercentage(20),
    justifyContent: 'center',
  },
  AlarmPageContainer: {
    width: Width,
    height: heightPercentage(130),
    borderTopColor: '#E8E8E8',
    borderBottomColor: '#E8E8E8',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: heightPercentage(20),
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  AlarmTopText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'PretendardVariable',
  },
  AlarmMiddleText: {
    marginTop: 7,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
    color: 'black',
  },
  AlarmThirdText: {
    marginTop: 7,
    fontSize: 12,
    color: '#B8B8B8',
  },
  MypageContainer: {
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
  },
  MyPageHeader: {
    height: heightPercentage(70),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MypageHeaderIcon: {
    // marginRight: 10,
  },
  choiceProfileImage: {
    width: 120,
    height: 120,
    borderRadius: heightPercentage(100),
  },
  profileTextContainer: {
    marginLeft: 20,
    flexDirection: 'column',
    marginTop: 15,
  },
  profileFirstText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'PretendardVariable',
    color: 'black',
    marginRight: 4,
  },
  profileNameText: {
    fontSize: 14,
    fontFamily: 'PretendardVariable',
    color: '#686868',
  },
  profileSecondText: {
    marginTop: 6,
    fontSize: 14,
    fontFamily: 'PretendardVariable',
    color: 'black',
  },
  IsAuthenticateContainer: {
    width: widthPercentage(100),
    height: heightPercentage(25),
    marginTop: 6,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#005BA5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IsAuthenticateText: {
    fontSize: 12,
    fontFamily: 'PretendardVariable',
    color: '#005BA5',
    fontWeight: 'bold',
  },
  IsNotAuthenticateContainer: {
    width: widthPercentage(100),
    height: heightPercentage(25),
    marginTop: 6,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#B92E5A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IsNotAuthenticateText: {
    fontSize: 12,
    fontFamily: 'PretendardVariable',
    color: '#B92E5A',
    fontWeight: 'bold',
  },
  TotalInfoContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  MyPageUserChoice: {
    marginTop: 24,
  },
  ChoiceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: heightPercentage(60),
    justifyContent: 'space-between',
  },
  ChoiceText: {
    fontSize: 16,
    fontFamily: 'PretendardVariable',
    color: 'black',
    fontWeight: 'bold',
  },
  ChoiceNumber: {
    fontSize: 16,
    fontFamily: 'PretendardVariable',
    color: '#005BA5',
    fontWeight: 'bold',
    marginLeft: 6,
  },
});

export default AnpServiceStyleSheet;
