import React from 'react';
import { View, Text } from 'react-native';
import mainPageStyleSheet from '../../style/style';

interface TagComponentProps {
  dDay: string;
  category: string;
  depositAmount: string;
}

const TagComponent: React.FC<TagComponentProps> = ({ dDay, category, depositAmount }) => {
  return (
    <View style={mainPageStyleSheet.tag}>
      <View style={mainPageStyleSheet.ddaybox}>
        <Text style={mainPageStyleSheet.mainPageSmallBoxtext}>{dDay}</Text>
      </View>
      <View style={mainPageStyleSheet.categorybox}>
        <Text style={mainPageStyleSheet.mainPageSmallBoxtext}>{category}</Text>
      </View>
      <View style={mainPageStyleSheet.depositamountbox}>
        <Text style={mainPageStyleSheet.depositamounttext}>{depositAmount}</Text>
      </View>
    </View>
  );
};

export default TagComponent;
