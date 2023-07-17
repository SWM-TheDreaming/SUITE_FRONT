import React from 'react';
import { Text, View } from 'react-native';

export interface StudyInfoCardProps {
  title: string; //스터디 이름
  studyDeadLine: Date; //스터디 종료날짜
  recruitmentDeadLine: Date; //스터디 신청 마감 기한
  category: string; //카테고리
  depositAmount: Int16Array; //보증금액
  recruitmentLimit: Int16Array; //모집 정원
  presentRecruitment: Int16Array; //현재 인원
}

const StudyInfoCard = (props: StudyInfoCardProps) => {
  return <View>
    <Text>hello</Text>
  </View>;
};

export default StudyInfoCard;
