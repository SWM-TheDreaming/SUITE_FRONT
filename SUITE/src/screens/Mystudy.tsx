import React from 'react';
import { View, Text } from 'react-native';
import mainPageStyleSheet from '../style/style';
import MyStudyListCard from '../components/containers/MyStudyListCard.container';

const Mystudy = () => {
  return (
    <View style={mainPageStyleSheet.container}>
      <MyStudyListCard />
    </View>
  );
};

export default Mystudy;
