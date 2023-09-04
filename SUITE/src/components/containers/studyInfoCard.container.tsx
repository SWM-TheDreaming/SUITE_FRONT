import React, { useCallback, useEffect, useState } from 'react';
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import StudyInfoCardUI from '../presents/studyInfoCard.present';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/core';
import { Category } from '../../types';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const mockdata = [
  {
    id: '123',
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
    id: '234',
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
    id: '345',
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
const StudyInfoCard: React.FunctionComponent<{ filterCategory?: Category }> = ({ filterCategory }) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [filter, setFilter] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [ExistAlarm, setExistAlarm] = useState(false)
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
        <View style={{width:300}}>
        <View style={mainPageStyleSheet.searchBorder}>
            <TextInput
              placeholder="스터디를 검색하세요"
              onChange={handleInputChange}
              onEndEditing={() => console.log('onEndEditing')}
              onSubmitEditing={() => console.log('onSubmitEditing')}
            />
            <TouchableOpacity>
              <FontAwesome name="search" size={15} color={'black'} />
            </TouchableOpacity>
        </View>
        </View>
        <View style={mainPageStyleSheet.AlarmContainer}>
          <TouchableOpacity >
            {ExistAlarm === false ?
              <MaterialCommunityIcons name="bell-badge-outline" size={24} color={'black'} />
            : <MaterialCommunityIcons name="bell-outline" size={24} color={'black'} />
  }
          </TouchableOpacity>
        </View>
      </View>
      <View style={mainPageStyleSheet.selectedCategoryScrollViewContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={mainPageStyleSheet.selectCategoryContainer}>
          {filter.map((categoryItem, index) => (
            <View key={index} style={mainPageStyleSheet.selectedFilterCategory}>
              <Text style={mainPageStyleSheet.selectedCategoryText}>{categoryItem}</Text>
            </View>
          ))}
          <TouchableOpacity
            style={mainPageStyleSheet.selectCategoryBox}
            onPress={() => {
              navigation.navigate('CategoryFilter');
            }}
          >
            <Text style={mainPageStyleSheet.selectCategoryText}>필터 선택</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {mockdata.map((item) => (
        <StudyInfoCardUI
          key={item.id}
          id={item.id}
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
      <View style={mainPageStyleSheet.studyCreateButtonContainer}>
        <TouchableOpacity
          style={mainPageStyleSheet.studyCreateButton}
          onPress={() => {
            navigation.navigate('SuiteRoomInfo');
          }}
        >
          <Feather name="plus" size={24} color={'white'} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default StudyInfoCard;
