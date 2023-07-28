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
  writeDate: Date;
  scrab: number;
}
// title:'코테 스터디 모집',
// studyDeadLine : new Date('2023-08-13'),
// recruitmentDeadLine : new Date('2023-08-13'),
// category : '컴퓨터',
// depositAmount : 12000,
// recruitmentLimit : 7,
// presentRecruitment : 4,
// writeDate : new Date('2023-06-13'),
// scrab : 6
const StudyInfoCardUI = (props: StudyInfoCardProps) => {
  return (
    <TouchableOpacity style={mainPageStyleSheet.box}>
      <View style={mainPageStyleSheet.innerbox}>
        <View style={mainPageStyleSheet.tag}>
          <View style={mainPageStyleSheet.ddaybox}>
            <Text style={mainPageStyleSheet.mainPageSmallBoxtext}>D-12</Text>
          </View>
          <View style={mainPageStyleSheet.categorybox}>
            <Text style={mainPageStyleSheet.mainPageSmallBoxtext}>{props.category}</Text>
          </View>
          <View style={mainPageStyleSheet.depositamountbox}>
            <Text style={mainPageStyleSheet.depositamounttext}>{props.depositAmount.toString().slice(0, 2)}K</Text>
          </View>
        </View>
        <Text style={mainPageStyleSheet.titletext}>{props.title}</Text>
        <Text style={mainPageStyleSheet.detailtext}>
          방장: mimo | 참여인원:{props.presentRecruitment}/{props.recruitmentLimit}
        </Text>
        <Text style={mainPageStyleSheet.detailtext}>
          작성일:{props.studyDeadLine.toString().slice(0, 15)} | 스크랩:{props.scrab}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StudyInfoCardUI;
