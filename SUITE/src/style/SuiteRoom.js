import { StyleSheet, Platform } from 'react-native';
import { heightPercentage, widthPercentage } from '../responsive/ResponsiveSize';
import { Dimensions } from 'react-native';
const Width = Dimensions.get('window').width; //스크린 너비 초기화
const Height = Dimensions.get('window').height; //스크린 높이 초기화
const SuiteRoomStyleSheet = StyleSheet.create({
    SuiteRoomDetailContainer:{
        backgroundColor:'white',
        height : Height
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
    }
});

export default SuiteRoomStyleSheet;
