import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import mainPageStyleSheet from '../style/style';
import Icon from 'react-native-vector-icons/Feather';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const CategoryFilter = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const TableButton: React.FC<{ title: string; onPress: () => void; isSelected: boolean }> = ({
    title,
    onPress,
    isSelected,
  }) => {
    return (
      <TouchableOpacity
        style={[mainPageStyleSheet.categoryButtonBox, { backgroundColor: isSelected ? '#005BA5' : 'white' }]}
        onPress={onPress}
      >
        <Text style={[mainPageStyleSheet.categoryButtonText, { color: isSelected ? 'white' : 'black' }]}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const renderItem: React.FC<{ item: { id: string; title: string } }> = ({ item }) => {
    const isSelected = selectedButtons.includes(item.title);
    return <TableButton title={item.title} onPress={() => handleButtonPress(item.title)} isSelected={isSelected}/>;
  };
  const handleButtonPress = (id: string) => {
    const isSelected = selectedButtons.includes(id);
    if (isSelected) {
      setSelectedButtons(selectedButtons.filter((buttonId) => buttonId !== id));
    } else {
      setSelectedButtons([...selectedButtons, id]);
    }
  };
  const data = [
    { id: '1', title: '토익' },
    { id: '2', title: '토스' },
    { id: '3', title: '오픽' },
    { id: '4', title: '공무원' },
    { id: '5', title: '법학' },
    { id: '6', title: '경찰고시' },
    { id: '7', title: '임용시험' },
    { id: '8', title: '소방고시' },
    { id: '9', title: '회계/세무' },
    { id: '10', title: '공인중개사' },
    { id: '11', title: '대학' },
    { id: '12', title: '자격증' },
    { id: '13', title: 'IT' },
  ];
  useEffect(() => {
    console.log(selectedButtons);
  },[selectedButtons]);

  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.filterBox}>
        <Text style={mainPageStyleSheet.filterText}>필터</Text>
        <TouchableOpacity
          style={mainPageStyleSheet.filterOutIcon}
          onPress={() => {
            navigation.navigate('Studylist', { selectedCategories: selectedButtons});
          }}
        >
          <Icon name="x" size={24} />
        </TouchableOpacity>
      </View>
      <View style={mainPageStyleSheet.filterInfoBox}>
          <Text style={mainPageStyleSheet.categoryChoiceText}>카테고리 선택</Text>
          <Text style={mainPageStyleSheet.choiceInfoText}>복수 선택 가능</Text>
      </View>
      <View style={mainPageStyleSheet.categoryButtonContainner}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns= {3}
        />
    </View>
    </View>
  );
};

export default CategoryFilter;
