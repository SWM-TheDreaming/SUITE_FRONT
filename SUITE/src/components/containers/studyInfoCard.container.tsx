import React from 'react';
import { Text, View } from 'react-native';
import StudyInfoCardUI from '../presents/studyInfoCard.present';


const StudyInfoCard = () => {
  return <StudyInfoCardUI title={'스터디'} studyDeadLine={new Date('2023-06-13')} recruitmentDeadLine={new Date('2023-06-13')} category={''} depositAmount={10000} recruitmentLimit={5} presentRecruitment={4} />
};

export default StudyInfoCard;

