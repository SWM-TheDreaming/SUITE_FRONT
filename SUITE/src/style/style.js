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
  },
  titletext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 12,
    marginBottom: 8,
  },
  detailtext: {
    fontSize: 12,
    color: '#686868',
    marginTop: 8,
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
  },
});

export default mainPageStyleSheet;
