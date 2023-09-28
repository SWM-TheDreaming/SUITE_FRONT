import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import MyStudyListCardUI from '../presents/MyStudyListCard.present';
import { mySuiteRoomReadApi } from '../../api/SuiteRoom/mySuiteRoomReadApi';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import { tokenState } from '../../../recoil/atoms';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { ScrollView } from 'react-native-gesture-handler';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const MyStudyListCard = () => {
  const [studyList, setStudyList] = useState([]);
  const navigation = useNavigation<RootStackNavigationProp>();
  const storedToken = useRecoilValue(tokenState);
  const isFocused = useIsFocused();

  const fetchData = async () => {
    try {
      const datalist = await mySuiteRoomReadApi(storedToken);
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
        {studyList.map((item) => (
          <MyStudyListCardUI
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

export default MyStudyListCard;
