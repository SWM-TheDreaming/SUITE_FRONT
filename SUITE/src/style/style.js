import { StyleSheet } from "react-native"
import { heightPercentage, widthPercentage } from "../responsive/ResponsiveSize";

const mainPageStyleSheet = StyleSheet.create({
    container: {
      flex: 1,
      alignItems : 'center'
    },
    box:{
      marginTop : 16,
      backgroundColor : "#FFFFFF",
      width: 328,
      height: 140,
      borderRadius : 10
    },
    ddaybox:{
        width : widthPercentage(37),
        height : heightPercentage(20),
        backgroundColor : "#36E5B1",
        borderRadius :4,
        alignItems : 'center',
        justifyContent : 'center',
        marginRight: 4 //옆 컴포넌트와의 거리 조절
    },
    mainPageSmallBoxtext:{
        fontSize : 12,
        color : "white",
    },
    categorybox:{
        width : widthPercentage(37),
        height : heightPercentage(20),
        backgroundColor : "#042A8A",
        borderRadius :4,
        alignItems : 'center',
        justifyContent : 'center',
        marginRight: 4 //옆 컴포넌트와의 거리 조절
    },
    depositamountbox:{
        width : widthPercentage(59),
        height : heightPercentage(20),
        backgroundColor : "#FFFFFF",
        borderRadius :4,
        borderWidth : 2,
        borderColor : "#042A8A",
        alignItems : 'center',
        justifyContent : 'center',
        marginRight: 4 //옆 컴포넌트와의 거리 조절
    },
    depositamounttext:{
        fontSize : 12,
        color : "#042A8A"
    }

  });

export default mainPageStyleSheet;