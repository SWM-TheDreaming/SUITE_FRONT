import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import mainPageStyleSheet from '../style/style';
import Icon from 'react-native-vector-icons/Feather';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Category } from '../data/Categoty';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const CategoryFilter = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const categoryData = Category.map((item) => ({ id: item.key, title: item.value }));

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
    return <TableButton title={item.title} onPress={() => handleButtonPress(item.title)} isSelected={isSelected} />;
  };
  const handleButtonPress = (id: string) => {
    const isSelected = selectedButtons.includes(id);
    if (isSelected) {
      setSelectedButtons(selectedButtons.filter((buttonId) => buttonId !== id));
    } else {
      setSelectedButtons([...selectedButtons, id]);
    }
  };
  const applyButton = () => {
    navigation.navigate('Studylist', { selectedCategories: selectedButtons });
  };
  const resetSelection = () => {
    setSelectedButtons([]); // selectedButtons 배열 초기화
  };

  return (
    <View style={mainPageStyleSheet.categoryPageContainer}>
      <View style={mainPageStyleSheet.filterBox}>
        <Text style={mainPageStyleSheet.filterText}>필터</Text>
        <TouchableOpacity style={mainPageStyleSheet.filterOutIcon} onPress={applyButton}>
          <Icon name="x" size={24} />
        </TouchableOpacity>
      </View>
      <View style={mainPageStyleSheet.filterInfoBox}>
        <Text style={mainPageStyleSheet.categoryChoiceText}>카테고리 선택</Text>
        <Text style={mainPageStyleSheet.choiceInfoText}>복수 선택 가능</Text>
      </View>
      <View style={mainPageStyleSheet.categoryButtonContainner}>
        <FlatList data={categoryData} renderItem={renderItem} numColumns={3} />
      </View>
      <View style={mainPageStyleSheet.categoryFilterButtonContainer}>
        <TouchableOpacity style={mainPageStyleSheet.categoryFilterResetButton} onPress={resetSelection}>
          <Text style={mainPageStyleSheet.categortFilterResetText}>선택 초기화</Text>
        </TouchableOpacity>
        <TouchableOpacity style={mainPageStyleSheet.categoryFilterApplyButton} onPress={applyButton}>
          <Text style={mainPageStyleSheet.categortFilterApplyText}>적용하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryFilter;
