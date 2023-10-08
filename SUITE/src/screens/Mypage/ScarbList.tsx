import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import { ScrabSuiteRoomListApi } from '../../api/SuiteRoom/ScrabSuiteRoomListApi';
import { useRecoilValue } from 'recoil';
import { tokenState } from '../../../recoil/atoms';
import StudyInfoCardUI from '../../components/presents/studyInfoCard.present';
import { Header } from '../../hook/header';

const ScrabList = () => {
  const [studyList, setStudyList] = useState([]);
  const storedToken = useRecoilValue(tokenState);

  const fetchData = async () => {
    try {
      const datalist = await ScrabSuiteRoomListApi(storedToken);
      setStudyList(datalist);
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={mainPageStyleSheet.container}>
      <Header title={'스크랩한 스터디'} />
      <ScrollView style={{ marginBottom: 60 }} showsVerticalScrollIndicator={false}>
        {studyList &&
          studyList.map((item) => (
            <StudyInfoCardUI
              key={item.suiteRoomId}
              suiteRoomId={item.suiteRoomId}
              host={item.host}
              hostNickname={item.hostNickName}
              title={item.title}
              createdDate={item.createdDate}
              recruitmentDeadline={item.recruitmentDeadline}
              subject={item.subject}
              depositAmount={String(item.depositAmount)}
              recruitmentLimit={item.recruitmentLimit}
              presentRecruitment={item.presentRecruitment}
              markCount={item.markCount}
              isOpen={item.isOpen}
              isPublic={item.isPublic}
              participantCount={item.participantCount}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default ScrabList;
