import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

type SuiteRoomDetailRouteProp = RouteProp<RootStackParamList, 'SuiteRoomDetail'>;

interface SuiteRoomDetailProps {
  route: SuiteRoomDetailRouteProp;
}

const SuiteRoomDetail: React.FunctionComponent<SuiteRoomDetailProps> = ({ route }) => {
  const { SuiteRoomid } = route.params;
  console.log(SuiteRoomid)
  return (
    <View>
      <Text>SuiteRoomDetail page - SuiteRoomId: {SuiteRoomid}</Text>
    </View>
  );
};

export default SuiteRoomDetail;