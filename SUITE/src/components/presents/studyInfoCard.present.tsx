import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import TagComponent from './TagComponent';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export interface StudyInfoCardProps {
  suiteRoomId: number;
  host: boolean;
  title: string; //스터디 이름
  createdDate: string; //스터디 종료날짜
  recruitmentDeadline: Date; //스터디 신청 마감 기한
  subject: string; //카테고리
  depositAmount: string; //보증금액
  recruitmentLimit: number; //모집 정원
  presentRecruitment: number; //현재 인원
  markCount: number;
  isOpen: boolean;
  isPublic: boolean;
  participantCount: number;
}
const StudyInfoCardUI = (props: StudyInfoCardProps) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const calculateDDay = () => {
    const today = new Date();
    const recruitmentDeadline = new Date(props.recruitmentDeadline);
    const timeDiff = recruitmentDeadline.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return `D${daysDiff}`;
  };

  return (
    <TouchableOpacity
      style={mainPageStyleSheet.box}
      onPress={() => {
        console.log(props.suiteRoomId);
        navigation.navigate('SuiteRoomDetail', { SuiteRoomid: props.suiteRoomId });
      }}
    >
      <View style={mainPageStyleSheet.innerbox}>
        <TagComponent
          dDay={calculateDDay()}
          category={props.subject}
          depositAmount={`${props.depositAmount.toString().slice(0, 2)}K`}
        />
        <Text style={mainPageStyleSheet.titletext}>{props.title}</Text>
        <Text style={mainPageStyleSheet.detailtext}>
          방장: mimo | 참여인원:{props.participantCount}/{props.recruitmentLimit}
        </Text>
        <Text style={mainPageStyleSheet.detailtext}>
          작성일 : {props.createdDate.slice(0, 10)} | 스크랩:{props.markCount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StudyInfoCardUI;
