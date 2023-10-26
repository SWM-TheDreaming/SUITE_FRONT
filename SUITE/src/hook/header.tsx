import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

interface HeaderProps {
  title: string;
  backScreen?: keyof RootStackParamList; // backScreen은 optional로 받음
}

export const Header: React.FC<HeaderProps> = ({ title, backScreen }) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [visible, setVisible] = useState(false);

  const handleBackPress = () => {
    // setVisible(true)
    if (backScreen) {
      navigation.navigate(backScreen);
    } else {
      navigation.goBack(); // backScreen이 없으면 기본 뒤로가기 동작 수행
    }
  };

  return (
    <View style={mainPageStyleSheet.underStatusBar}>
      <TouchableOpacity style={mainPageStyleSheet.pageBackIcon} onPress={handleBackPress} hitSlop={32}>
        <Icon name="chevron-back" size={24} color={'#000000'} />
      </TouchableOpacity>
      <Text style={mainPageStyleSheet.SignUpText}>{title}</Text>
    </View>
  );
};
