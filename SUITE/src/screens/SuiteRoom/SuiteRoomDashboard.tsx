import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useRecoilValue } from 'recoil';
import { suiteRoomIdState } from '../../../recoil/atoms';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import { Header } from '../../hook/header';

const SuiteRoomDashboard = () => {
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  return (
    <View style={SuiteRoomStyleSheet.MyStudyRoomContainer}>
      <Text>대시보드</Text>
    </View>
  );
};

export default SuiteRoomDashboard;
