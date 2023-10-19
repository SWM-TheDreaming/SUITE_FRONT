import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../style/style';
import MyStudyListCard from '../components/containers/MyStudyListCard.container';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
const Mystudy = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={mainPageStyleSheet.container}>
      <View style={mainPageStyleSheet.mainStatusBar}>
        <View>
          <Text style={mainPageStyleSheet.MainTextPosition}>{'나의 스터디'}</Text>
        </View>
        <View style={mainPageStyleSheet.AlarmPosition}>
          <TouchableOpacity onPress={() => navigation.navigate('Alarm')}>
            <MaterialCommunityIcons name="bell-badge-outline" size={24} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
      <MyStudyListCard />
    </View>
  );
};

export default Mystudy;
