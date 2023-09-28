import React from 'react';
import { View, Text } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface TagComponentProps {
  dDay: string;
  category: string;
  depositAmount: string;
  isPublic: boolean;
}

const TagComponent: React.FC<TagComponentProps> = ({ dDay, category, depositAmount, isPublic }) => {
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
      {isPublic == false ? (
        <FontAwesome
          name="lock"
          size={17}
          color={'black'}
          style={{ alignContent: 'center', justifyContent: 'center', marginLeft: 5 }}
        />
      ) : null}
    </View>
  );
};

export default TagComponent;
