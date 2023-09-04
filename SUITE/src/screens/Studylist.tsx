import { useFocusEffect, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StudyInfoCard from '../components/containers/studyInfoCard.container';
import mainPageStyleSheet from '../style/style';
import { Category } from '../types';
import Icon from 'react-native-vector-icons/AntDesign';

const Studylist: React.FC = () => {
  const [selectedCategories, setSelectCategories] = useState<Category>();
  const route = useRoute();
  useFocusEffect(
    useCallback(() => {
      if (route.params) {
        setSelectCategories(route.params as Category);
      }
    }, [route.params]),
  );
  return (
    <View style={mainPageStyleSheet.container}>
      <StudyInfoCard filterCategory={selectedCategories} />
    </View>
  );
};

export default Studylist;
