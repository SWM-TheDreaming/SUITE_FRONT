import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../style/style';
import Icon from 'react-native-vector-icons/Feather';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const CategoryFilter = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={mainPageStyleSheet.filterBox}>
      <Text style={mainPageStyleSheet.filterText}>필터</Text>
      <TouchableOpacity
        style={mainPageStyleSheet.filterOutIcon}
        onPress={() => {
          navigation.navigate('Mainpage', { category: '법학' });
        }}
      >
        <Icon name="x" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryFilter;
