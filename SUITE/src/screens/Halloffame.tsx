import React from 'react';
import { View, Text } from 'react-native';
import mainPageStyleSheet from '../style/style';

const Halloffame = () => {
  return (
    <View>
      <View style={mainPageStyleSheet.underStatusBar}>
        <Text style={mainPageStyleSheet.SignUpText}>{'명예의 전당'}</Text>
      </View>
      <Text>halloffame page</Text>
    </View>
  );
};

export default Halloffame;
