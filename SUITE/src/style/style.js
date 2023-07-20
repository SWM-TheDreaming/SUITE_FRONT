import { StyleSheet, Platform } from "react-native"
import { heightPercentage, widthPercentage } from "../responsive/ResponsiveSize";

const mainPageStyleSheet = StyleSheet.create({
    container: {    //전체 컨테이너
      flex: 1,
      alignItems : 'center'
    },
    box:{   //컴포넌트 박스 설정
      marginTop : 16,
      backgroundColor : "#FFFFFF",
      width: 328,
      height: 140,
      borderRadius : 10,
      ...Platform.select({
        ios: {
          shadowColor: "#000000",
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
    innerbox:{  // 내부 컴포넌트들 정렬
        paddingLeft : 20,
        paddingTop: 18
    },
    tag:{ //ddaybox, categorybox, depositamountbox 정렬 
        flexDirection : 'row',
    },
    ddaybox:{   //ddaybox
        width : widthPercentage(37),
        height : heightPercentage(20),
        backgroundColor : "#36E5B1",
        borderRadius :4,
        alignItems : 'center',
        justifyContent : 'center',
        marginRight: 4 //옆 컴포넌트와의 거리 조절
    },
    mainPageSmallBoxtext:{  //dday, category text 스타일
        fontSize : 12,
        color : "white",
    },
    categorybox:{   //categorybox
        width : widthPercentage(37),
        height : heightPercentage(20),
        backgroundColor : "#042A8A",
        borderRadius :4,
        alignItems : 'center',
        justifyContent : 'center',
        marginRight: 4 //옆 컴포넌트와의 거리 조절
    },
    depositamountbox:{  //depositamountbox
        width : widthPercentage(59),
        height : heightPercentage(20),
        backgroundColor : "#FFFFFF",
        borderRadius :4,
        borderWidth : 1,
        borderColor : "#042A8A",
        alignItems : 'center',
        justifyContent : 'center',
        marginRight: 4 //옆 컴포넌트와의 거리 조절
    },
    depositamounttext:{
        fontSize : 12,
        color : "#042A8A"
    },
    titletext:{
        fontSize : 18,
        fontWeight : 'bold',
        color : "#000000",
        marginTop : 12,
        marginBottom : 8
    },
    detailtext : {
        fontSize : 12,
        color : "#686868",
        marginTop : 8
    }
  });

export default mainPageStyleSheet;