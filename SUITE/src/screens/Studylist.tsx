import React from 'react';
import { View, Text } from 'react-native';
import StudyInfoCard from '../components/containers/studyInfoCard.container';
import mainPageStyleSheet from '../style/style';

const Studylist = () => {
  return (
    <View style={mainPageStyleSheet.container}>
      <StudyInfoCard />
    </View>
  );
};

export default Studylist;
