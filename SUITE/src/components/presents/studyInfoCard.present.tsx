import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';
export interface StudyInfoCardProps {
  title: string; //스터디 이름
  studyDeadLine: Date; //스터디 종료날짜
  recruitmentDeadLine: Date; //스터디 신청 마감 기한
  category: string; //카테고리
  depositAmount: number; //보증금액
  recruitmentLimit: number; //모집 정원
  presentRecruitment: number; //현재 인원
}

const StudyInfoCardUI = (props: StudyInfoCardProps) => {
  return <TouchableOpacity style = {mainPageStyleSheet.box}>
    <View style = {mainPageStyleSheet.ddaybox}>
      <Text style = {mainPageStyleSheet.mainPageSmallBoxtext}>D-12</Text>
    </View>
    <View style = {mainPageStyleSheet.categorybox}>
      <Text style = {mainPageStyleSheet.mainPageSmallBoxtext}>공무원</Text>
    </View>
    <View style = {mainPageStyleSheet.depositamountbox}>
      <Text style = {mainPageStyleSheet.depositamounttext}>15,000원</Text>
    </View>
  </TouchableOpacity>;
};

export default StudyInfoCardUI;

