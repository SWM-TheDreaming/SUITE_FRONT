import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainPageStyleSheet from '../../style/style';

interface NumberInputFieldProps {
  value: number;
  onPlusPress: () => void;
  onMinusPress: () => void;
}

const NumberInputField: React.FC<NumberInputFieldProps> = ({ value, onPlusPress, onMinusPress }) => {
  return (
    <View style={mainPageStyleSheet.studyNumberInputField}>
      <TouchableOpacity onPress={onMinusPress}>
        <Text style={mainPageStyleSheet.studyNumberMinus}>-</Text>
      </TouchableOpacity>
      <View style={mainPageStyleSheet.studyNumberInputFieldValue}>
        <Text>{value}</Text>
      </View>
      <TouchableOpacity onPress={onPlusPress}>
        <Text style={mainPageStyleSheet.studyNumberPlus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberInputField;
