import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import TagComponent from './TagComponent';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export interface StudyInfoCardProps {
  id : string;
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
const StudyInfoCardUI = (props: StudyInfoCardProps) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <TouchableOpacity style={mainPageStyleSheet.box}
    onPress={() => {
      console.log(props.id)
      navigation.navigate('SuiteRoomDetail',{SuiteRoomid : props.id});
    }}>
      <View style={mainPageStyleSheet.innerbox}>
        <TagComponent
          dDay="D-12"
          category={props.category}
          depositAmount={`${props.depositAmount.toString().slice(0, 2)}K`}
        />
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
