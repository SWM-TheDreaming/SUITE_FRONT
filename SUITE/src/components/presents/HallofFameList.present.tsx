import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useSetRecoilState } from 'recoil';
import { depositAmountState, suiteRoomIdState, suiteRoomStatusState, hostState } from '../../../recoil/atoms';
import convertStudyValueFromEngish from '../../data/ChangeCategoryFromEnglish';
import HallofFameTagComponent from './HallofFameTagComponent';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import HallofFameLogo from '../../Icons/HallofFameLogo.png';

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
const HallofFameCardUI = (props: StudyInfoCardProps) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const suiteRoomId = useSetRecoilState(suiteRoomIdState);
  const suiteDepositAmount = useSetRecoilState(depositAmountState);
  const suiteRoomStatus = useSetRecoilState(suiteRoomStatusState);
  const suiteHostStatus = useSetRecoilState(hostState);

  return (
    <TouchableOpacity
      style={mainPageStyleSheet.box}
      onPress={() => {
        suiteRoomId(props.suiteRoomId);
        suiteDepositAmount(props.depositAmount);
        suiteRoomStatus(props.suiteStatus);
        suiteHostStatus(props.host);
        navigation.navigate('HallOfFameNavigation');
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={mainPageStyleSheet.innerbox}>
          <HallofFameTagComponent
            category={convertStudyValueFromEngish(props.subject)}
            depositAmount={`${props.depositAmount.toString().slice(0, props.depositAmount.toString().length - 3)}K`}
            isPublic={props.isPublic}
          />
          <Text style={mainPageStyleSheet.titletext}>{props.title}</Text>
          <Text style={mainPageStyleSheet.detailtext}>
            방장: {props.hostNickName} | 참여인원:{1}/{2}
          </Text>
          <Text style={mainPageStyleSheet.detailtext}>
            작성일:{props.createdDate.toString().slice(0, 10)} | 스크랩 : {props.markCount}
          </Text>
        </View>
        <View style={{ alignItems: 'flex-end', marginRight: 20, marginTop: 15 }}>
          <Image source={HallofFameLogo} style={SuiteRoomStyleSheet.ContainerLogoStyle} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HallofFameCardUI;
