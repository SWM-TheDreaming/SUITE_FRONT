import React, { useCallback, useEffect, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import StudyInfoCardUI from '../presents/studyInfoCard.present';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp, useFocusEffect } from '@react-navigation/core';
import { Category } from '../../types';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const mockdata = [
  {
    id: 1,
    title: '임용 시험 합격 준비반 스터디 모집',
    studyDeadLine: new Date('2023-06-13'),
    recruitmentDeadLine: new Date('2023-06-13'),
    category: '공무원',
    depositAmount: 10000,
    recruitmentLimit: 5,
    presentRecruitment: 2,
    writeDate: new Date('2023-06-13'),
    scrab: 5,
  },
  {
    id: 2,
    title: 'TOEIC 스터디 모집',
    studyDeadLine: new Date('2023-07-13'),
    recruitmentDeadLine: new Date('2023-07-13'),
    category: '영어',
    depositAmount: 15000,
    recruitmentLimit: 5,
    presentRecruitment: 4,
    writeDate: new Date('2023-06-13'),
    scrab: 2,
  },
  {
    id: 3,
    title: '코테 스터디 모집',
    studyDeadLine: new Date('2023-08-13'),
    recruitmentDeadLine: new Date('2023-08-13'),
    category: '컴퓨터',
    depositAmount: 12000,
    recruitmentLimit: 7,
    presentRecruitment: 4,
    writeDate: new Date('2023-06-13'),
    scrab: 6,
  },
];
const StudyInfoCard: React.FunctionComponent<Category> = ({ filterCategory }) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [filter, setFilter] = useState<string[]>();
  const [search, setSearch] = useState('');
  const handleInputChange = (event: { nativeEvent: { text: string } }) => {
    const text = event.nativeEvent.text;
    setSearch(text);
  };
  useFocusEffect(
    useCallback(() => {
      if (filterCategory) {
        setFilter(filterCategory.selectedCategories);
      }
    }, [filterCategory]),
  );
  useEffect(() => {
    console.log(filter); //API 호출 자리
  }, [filter]);
  return (
    <>
      <View style={mainPageStyleSheet.searchAndalarmbox}>
        <View style={mainPageStyleSheet.searchBorder}>
          <TextInput
            placeholder="스터디를 검색하세요"
            onChange={handleInputChange}
            onEndEditing={() => console.log('onEndEditing')}
            onSubmitEditing={() => console.log('onSubmitEditing')}
          />
          <Icon name="magnifying-glass" size={15} />
        </View>
      </View>
      <View style={mainPageStyleSheet.selectCategoryContainer}>
        <TouchableOpacity
          style={mainPageStyleSheet.selectCategoryBox}
          onPress={() => {
            navigation.navigate('CategoryFilter');
          }}
        >
          <Text style={mainPageStyleSheet.selectCategoryText}>인원 전체</Text>
        </TouchableOpacity>
      </View>
      {mockdata.map((item) => (
        <StudyInfoCardUI
          key={item.id}
          title={item.title}
          studyDeadLine={item.studyDeadLine}
          recruitmentDeadLine={item.recruitmentDeadLine}
          category={item.category}
          depositAmount={item.depositAmount}
          recruitmentLimit={item.recruitmentLimit}
          presentRecruitment={item.presentRecruitment}
          writeDate={item.writeDate}
          scrab={item.scrab}
        />
      ))}
    </>
  );
};

export default StudyInfoCard;
