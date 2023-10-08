import React from 'react';
import { View, Text } from 'react-native';
import mainPageStyleSheet from '../style/style';
import MyStudyListCard from '../components/containers/MyStudyListCard.container';

const Mystudy = () => {
  return (
    <View style={mainPageStyleSheet.container}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <Text style={mainPageStyleSheet.SignUpText}>{'나의 스터디'}</Text>
      </View>
      <MyStudyListCard />
    </View>
  );
};

export default Mystudy;
