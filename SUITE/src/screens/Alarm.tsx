import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from '../hook/header';
import mainPageStyleSheet from '../style/style';
const data = [
    {
        text : "SUITE 출시 기념 친구초대 이벤트가 진행 중입니다.",
        date : '2023-07-21'
    },
    {
        text : "회원님의 스위트룸이 명예의 전당에 올라갔습니다. 지금 확인해보세요!",
        date : '2023-07-20'
    },
    {
        text : "SUITE 출시 기념 친구초대 이벤트가 진행 중입니다.",
        date : '2023-07-19'
    },
    {
        text : "회원님의 스위트룸이 명예의 전당에 올라갔습니다. 지금 확인해보세요!",
        date : '2023-07-18'
    },
    {
        text : "SUITE 출시 기념 친구초대 이벤트가 진행 중입니다.",
        date : '2023-07-17'
    },
    {
        text : "SUITE 출시 기념 친구초대 이벤트가 진행 중입니다.",
        date : '2023-07-16'
    },
    
]
const Alarm = () => {
  return (
    <ScrollView style={{backgroundColor : 'white'}} showsVerticalScrollIndicator={false}>
        <View>
            <Header title={'알림'} />
        {data.map((item, index) => (
            <TouchableOpacity key={index} style={mainPageStyleSheet.AlarmContainer}>
                <Text style={mainPageStyleSheet.AlarmTopText}>공지사항</Text>
                <Text style={mainPageStyleSheet.AlarmMiddleText}>{item.text}</Text>
                <Text style={mainPageStyleSheet.AlarmThirdText}>{item.date}</Text>
            </TouchableOpacity>
          ))}
        </View>
    </ScrollView>
  );
};

export default Alarm;
