import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import TagComponent from './TagComponent';
import convertStudyValueFromEngish from '../../data/ChangeCategoryFromEnglish';
import { SecretRoomCheckApi } from '../../api/SuiteRoom/SecretRoomCheckApi';
import ImageModalPopup from './ImageModalPopup';
import AttendanceCheckModal from '../../hook/AttendanceCheckModal';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export interface StudyInfoCardProps {
  suiteRoomId: number;
  host: boolean;
  hostNickname: string;
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
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation<RootStackNavigationProp>();
  const calculateDDay = () => {
    const today = new Date();
    const recruitmentDeadline = new Date(props.recruitmentDeadline);
    const timeDiff = recruitmentDeadline.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff < 0 ? `D+${daysDiff.toString().slice(1, daysDiff.toString().length)}` : `D-${daysDiff}`;
  };

  return (
    <TouchableOpacity
      style={mainPageStyleSheet.box}
      onPress={() => {
        console.log(props.suiteRoomId);
        props.isPublic == true
          ? navigation.navigate('SuiteRoomDetail', { SuiteRoomid: props.suiteRoomId })
          : setVisible(true);
      }}
    >
      <View style={mainPageStyleSheet.innerbox}>
        <TagComponent
          dDay={calculateDDay()}
          category={convertStudyValueFromEngish(props.subject)}
          depositAmount={`${props.depositAmount.toString().slice(0, 2)}K`}
          isPublic={props.isPublic}
        />
        <Text style={mainPageStyleSheet.titletext}>{props.title}</Text>
        <Text style={mainPageStyleSheet.detailtext}>
          방장 : {props.hostNickname} | 참여인원 : {props.participantCount}/{props.recruitmentLimit}
        </Text>
        <Text style={mainPageStyleSheet.detailtext}>
          작성일 : {props.createdDate.slice(0, 10)} | 스크랩 : {props.markCount}
        </Text>
        <ImageModalPopup visible={visible}>
          <AttendanceCheckModal
            visible={visible}
            onClose={() => setVisible(false)}
            text={'출석 번호는 10분 뒤 만료되니 \n 팀원들에게 빠르게 안내해주세요!'}
            number={1}
          />
        </ImageModalPopup>
      </View>
    </TouchableOpacity>
  );
};

export default StudyInfoCardUI;
