import React from 'react';
import { Text, View } from 'react-native';
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
  return <View style = {mainPageStyleSheet.box}>
    <Text>{props.title}</Text>
    <Text>{props.depositAmount}</Text>
  </View>;
};

export default StudyInfoCardUI;

