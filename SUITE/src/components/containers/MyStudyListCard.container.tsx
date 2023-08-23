import React from 'react';
import { View, Text } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import MyStudyListCardUI from '../presents/MyStudyListCard.present';

const mockdata = [
  {
    id: '123',
    title: '임용 시험 합격 준비반 스터디 모집',
    studyDeadLine: new Date('2023-06-13'),
    recruitmentDeadLine: new Date('2023-06-13'),
    category: '공무원',
    depositAmount: 10000,
    recruitmentLimit: 5,
    presentRecruitment: 2,
    writeDate: new Date('2023-06-13'),
    scrab: 5,
  },
  {
    id: '234',
    title: 'TOEIC 스터디 모집',
    studyDeadLine: new Date('2023-07-13'),
    recruitmentDeadLine: new Date('2023-07-13'),
    category: '영어',
    depositAmount: 15000,
    recruitmentLimit: 5,
    presentRecruitment: 4,
    writeDate: new Date('2023-06-13'),
    scrab: 2,
  },
  {
    id: '345',
    title: '코테 스터디 모집',
    studyDeadLine: new Date('2023-08-13'),
    recruitmentDeadLine: new Date('2023-08-13'),
    category: '컴퓨터',
    depositAmount: 12000,
    recruitmentLimit: 7,
    presentRecruitment: 4,
    writeDate: new Date('2023-06-13'),
    scrab: 6,
  },
];
const MyStudyListCard = () => {
  return (
    <>
      {mockdata.map((item) => (
        <MyStudyListCardUI
          key={item.id}
          id={item.id}
          title={item.title}
          studyDeadLine={item.studyDeadLine}
          recruitmentDeadLine={item.recruitmentDeadLine}
          category={item.category}
          depositAmount={item.depositAmount}
          recruitmentLimit={item.recruitmentLimit}
          presentRecruitment={item.presentRecruitment}
          writeDate={item.writeDate}
          scrab={item.scrab}
        />
      ))}
    </>
  );
};

export default MyStudyListCard;
