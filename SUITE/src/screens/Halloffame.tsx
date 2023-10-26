import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import mainPageStyleSheet from '../style/style';
import HallofFameList from '../components/containers/HallofFameList.container';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Logo22Size from '../Icons/Logo22Size.png';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const Halloffame = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={mainPageStyleSheet.container}>
      <View style={mainPageStyleSheet.mainStatusBar}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
          <View>
            <Image source={Logo22Size} />
          </View>
          <Text style={mainPageStyleSheet.MainTextPosition}>{'명예의 전당'}</Text>
        </View>
        <View style={mainPageStyleSheet.AlarmPosition}>
          <TouchableOpacity onPress={() => navigation.navigate('Alarm')}>
            <MaterialCommunityIcons name="bell-outline" size={24} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
      <HallofFameList />
    </View>
  );
};

export default Halloffame;
