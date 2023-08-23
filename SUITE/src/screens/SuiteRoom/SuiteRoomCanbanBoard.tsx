import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../hook/header';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
const SuiteRoomCanbanBoard = () => {
  return (
    <View style={SuiteRoomStyleSheet.MyStudyRoomContainer}>
      <Text>칸반보드</Text>
    </View>
  );
};

export default SuiteRoomCanbanBoard;
