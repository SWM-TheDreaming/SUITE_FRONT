import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import MyStudyListCardUI from '../presents/MyStudyListCard.present';
import { HallofFameListApi } from '../../api/SuiteRoom/HallofFameListApi';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import { tokenState } from '../../../recoil/atoms';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { ScrollView } from 'react-native-gesture-handler';
import HallofFameCardUI from '../presents/HallofFameList.present';
import Icon from 'react-native-vector-icons/FontAwesome';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const HallofFameList = () => {
  const [studyList, setStudyList] = useState([]);
  const navigation = useNavigation<RootStackNavigationProp>();
  const storedToken = useRecoilValue(tokenState);
  const isFocused = useIsFocused();

  const fetchData = async () => {
    try {
      const datalist = await HallofFameListApi(storedToken);
      setStudyList(datalist);
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [isFocused]);
  return (
    <>
      <ScrollView style={{ marginBottom: 60 }} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <View style={mainPageStyleSheet.hallOfFameContainer}>
            <View style={mainPageStyleSheet.depositInformationTextContainer}>
              <Icon
                name="exclamation-circle"
                size={15}
                color={'white'}
                style={mainPageStyleSheet.depositInformationIcon}
              />
              <Text style={mainPageStyleSheet.hallOfFameInformationText}>명예의 전당</Text>
            </View>
            <Text style={mainPageStyleSheet.hallOfFameDetailInformationText}>
              • 스터디 점수가 높은 스터디를 모아놓은 곳입니다!
            </Text>
            <Text style={mainPageStyleSheet.hallOfFameDetailInformationText}>
              • 스터디 점수는 미션 달성률, 출석률을 기준으로 산출됩니다!
            </Text>
            <Text style={mainPageStyleSheet.hallOfFameDetailInformationText}>
              • 명예의 전당에 입성하면 엄청난 혜택이 있으니 열심히 참여해주세요!
            </Text>
          </View>
        </View>
        {studyList.map((item) => (
          <HallofFameCardUI
            key={item.suiteRoomId}
            suiteRoomId={item.suiteRoomId}
            title={item.title}
            subject={item.subject}
            recruitmentDeadline={item.recruitmentDeadline}
            suiteStatus={item.suiteStatus}
            createdDate={item.createdDate}
            recruitmentLimit={item.recruitmentLimit}
            depositAmount={item.depositAmount}
            isPublic={item.isPublic}
            isOpen={item.isOpen}
            participantCount={item.participantCount}
            hostNickName={item.hostNickName}
            markCount={item.markCount}
            host={item.host}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default HallofFameList;
