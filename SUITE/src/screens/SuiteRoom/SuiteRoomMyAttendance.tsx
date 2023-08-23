import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../hook/header';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';

const SuiteRoomMyAttendance = () => {
  return (
    <View style={SuiteRoomStyleSheet.MyStudyRoomContainer}>
      <Text>내출석</Text>
    </View>
  );
};

export default SuiteRoomMyAttendance;
