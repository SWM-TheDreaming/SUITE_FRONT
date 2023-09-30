import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import TagComponent from './TagComponent';
import { useSetRecoilState } from 'recoil';
import { depositAmountState, suiteRoomIdState, suiteRoomStatusState, hostState } from '../../../recoil/atoms';
import convertStudyValueFromEngish from '../../data/ChangeCategoryFromEnglish';
import ModalPopup from '../../hook/modal';
import CheckCancelModal from '../../hook/checkCancelModal';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export interface StudyInfoCardProps {
  suiteRoomId: string;
  title: string; //스터디 이름
  subject: string; //카테고리
  recruitmentDeadline: Date;
  suiteStatus: string;
  createdDate: Date;
  recruitmentLimit: number;
  depositAmount: number; //보증금액
  isPublic: boolean;
  isOpen: boolean;
  participantCount: number;
  hostNickName: string;
  markCount: null;
  host: boolean;
}
const MyStudyInfoCardUI = (props: StudyInfoCardProps) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const suiteRoomId = useSetRecoilState(suiteRoomIdState);
  const suiteDepositAmount = useSetRecoilState(depositAmountState);
  const suiteRoomStatus = useSetRecoilState(suiteRoomStatusState);
  const suiteHostStatus = useSetRecoilState(hostState);
  const [visible, setVisible] = useState(false);

  const calculateDDay = () => {
    const today = new Date();
    const recruitmentDeadline = new Date(props.recruitmentDeadline);
    const timeDiff = recruitmentDeadline.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff < 0 ? `D+${daysDiff.toString().slice(1, daysDiff.toString().length)}` : `D-${daysDiff}`;
  };
  const payPage = () => {
    navigation.navigate('SuiteRoompay');
    setVisible(false);
  };
  return (
    <TouchableOpacity
      style={mainPageStyleSheet.box}
      onPress={() => {
        suiteRoomId(props.suiteRoomId);
        suiteDepositAmount(props.depositAmount);
        suiteRoomStatus(props.suiteStatus);
        suiteHostStatus(props.host);
        props.suiteStatus == 'PLAIN' ? setVisible(true) : navigation.navigate('LeaderTabBarNavigation');
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
          방장: {props.hostNickName} | 참여인원:{1}/{2}
        </Text>
        <Text style={mainPageStyleSheet.detailtext}>
          작성일:{props.createdDate.toString().slice(0, 10)} | 보증금 납부여부 :{' '}
          {props.suiteStatus == 'PLAIN' ? '미납부' : '납부'}
        </Text>
      </View>
      <ModalPopup visible={visible}>
        <CheckCancelModal
          visible={visible}
          onClose={() => setVisible(false)}
          text={'보증금을 납부하시겠습니까?'}
          onConfirm={() => payPage()}
        />
      </ModalPopup>
    </TouchableOpacity>
  );
};

export default MyStudyInfoCardUI;
