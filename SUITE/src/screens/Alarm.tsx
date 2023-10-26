import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from '../hook/header';
import AnpServiceStyleSheet from '../style/AnPservice';
const data = [
  {
    text: 'SUITE 베타버전에 오신것을 환영합니다!',
    date: '2023-10-23',
  },
  {
    text: '베타 버전의 스터디 보증금은 5,000원이 최대입니다!',
    date: '2023-10-24',
  },
];
const Alarm = () => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
      <View>
        <Header title={'알림'} />
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={AnpServiceStyleSheet.AlarmPageContainer}>
            <Text style={AnpServiceStyleSheet.AlarmTopText}>공지사항</Text>
            <Text style={AnpServiceStyleSheet.AlarmMiddleText}>{item.text}</Text>
            <Text style={AnpServiceStyleSheet.AlarmThirdText}>{item.date}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Alarm;
