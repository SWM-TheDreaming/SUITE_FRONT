import React from 'react';
import { View, Text } from 'react-native';
import mainPageStyleSheet from '../style/style';
import HallofFameList from '../components/containers/HallofFameList.container';

const Halloffame = () => {
  return (
    <View style={mainPageStyleSheet.container}>
      <View style={mainPageStyleSheet.underStatusBar}>
        <Text style={mainPageStyleSheet.SignUpText}>{'명예의 전당'}</Text>
      </View>
      <HallofFameList />
    </View>
  );
};

export default Halloffame;
