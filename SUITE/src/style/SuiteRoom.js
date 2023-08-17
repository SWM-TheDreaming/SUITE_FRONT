import { StyleSheet, Platform } from 'react-native';
import { heightPercentage, widthPercentage } from '../responsive/ResponsiveSize';
import { Dimensions } from 'react-native';
const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height; //스크린 높이 초기화
const SuiteRoomStyleSheet = StyleSheet.create({
    SuiteRoomDetailContainer:{
        backgroundColor:'white',
    },
    SuiteRoomDetailupperBox:{
        marginLeft : widthPercentage(20),
        marginRight : widthPercentage(20),
        marginTop : heightPercentage(40)
    },
    SuiteRoomDetailTitle:{
        fontSize : 18,
        color : 'black',
        fontWeight : 'bold',
        marginTop : heightPercentage(14)
    },
    SuiteRoomDetailUpperBox :{
        height: heightPercentage(100),
        width: widthPercentage(320),
        marginTop : heightPercentage(16),
        backgroundColor : "#F8F8F8",
        borderRadius : 4,
        flexDirection : 'row',
        justifyContent : 'center',
    },
    SuiteRoomBoxIconContainer : {
        marginLeft : widthPercentage(15),
        marginRight : widthPercentage(15),
        marginTop : heightPercentage(20),
        flexDirection : 'column',
        alignItems : 'center'
    },
    SuiteRoomBoxText : {
        fontSize : 10,
        fontFamily: 'PretendardVariable',
        color : '#686868',
        marginTop : 2,
    },
    SuiteRoomBoxData:{
        fontSize : 10,
        fontFamily: 'PretendardVariable',
        color : 'black',
        marginTop : 2,
    },
    SuiteRoomDetailContentContainer:{
        marginBottom : heightPercentage(20),
        marginTop : heightPercentage(24)
    },
    SuiteRoomDetailContent: {
        color : 'black',
        fontSize : 16,
        fontFamily: 'PretendardVariable',
        textAlign : 'justify'
    },
    SuiteRoomLinkContainer: {
        marginBottom: heightPercentage(40),
        width : widthPercentage(320),
        height : heightPercentage(60),
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#F8F8F8',
        borderRadius : 4,
    },
    SuiteRoomLinkBox:{
        flexDirection : 'row',
        paddingLeft : 7
    },
    SuiteRoomLinkText:{
        width: widthPercentage(260),
        color : 'black',
        marginLeft : 5,
        fontFamily: 'PretendardVariable',
        fontSize : 16,
    },
    SuiteRoomDepositRuleText : {
        fontSize : 16,
        color : 'black',
        fontWeight : 'bold',
        fontFamily: 'PretendardVariable',
    },
    SuiteRoomDetailCircularBarContainer : {
        marginTop : heightPercentage(24),
        flexDirection : 'row'
    },
    SuiteRoomDetailCircularBar:{
        marginLeft : widthPercentage(20),
        marginRight : widthPercentage(20),
        flexDirection: "column"
    },
    SuiteRoomDetailCircularBarText:{
        fontSize : 12,
        fontWeight :"bold",
        fontFamily: 'PretendardVariable',
        color : 'black'
    },
    SuiteRoomCirculaBarInfoContainer:{
        marginTop: heightPercentage(12),
        justifyContent : 'center',
        alignItems : 'center'
    },
    SuiteRoomCircularBarInfoText:{
        fontWeight:'bold',
        color : 'black',
        fontSize : 14,
        fontFamily: 'PretendardVariable',
    },
    SuiteRoomDetailminAttendanceText:{
        color : '#4CADA8',
        fontSize : 12
    },
    SuiteRoomDetailminMissionCompleteRate:{
        color : '#7072E6',
        fontSize : 12
    },
    SuiteRoomDetailInfoText :{
        color : 'black',
        fontSize : 12
    },
    SuiteRoomDetailInformationContainer:{
        marginTop: heightPercentage(40),
        width: widthPercentage(310),
        height: heightPercentage(170),
        backgroundColor : '#FFF4F4',
      },
      SuiteRoomDetailInformationText:{
        marginTop : heightPercentage(10),
        paddingLeft : 25,
        paddingRight : 25,
        fontFamily: 'PretendardVariable',
        fontSize : 13,
        color : '#484848'
      },
      SuiteRoomDetailReaderButtonContainer: {
        marginTop : heightPercentage(40),
        marginBottom : heightPercentage(20),
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
      SuiteRoomDetailScrabButton:{
        width: widthPercentage(50),
        height: heightPercentage(50),
        borderColor: '#D8D8D8',
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      },
      SutieRoomDetailCheckinButton:{
        width: widthPercentage(260),
        height: heightPercentage(60),
        backgroundColor: '#050953',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
      }
});

export default SuiteRoomStyleSheet;
