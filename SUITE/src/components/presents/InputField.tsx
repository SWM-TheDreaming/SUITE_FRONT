import React from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import mainPageStyleSheet from '../../style/style';

interface InputFieldProps extends TextInputProps {
  touched?: boolean;
  error?: string;
}

function InputField({ touched, error, ...props }: InputFieldProps) {
  return (
    <View>
      <TextInput style={mainPageStyleSheet.idpwInputBox} autoCapitalize="none" {...props} />
      {touched && error && <Text>{error}</Text>}
    </View>
  );
}
export default InputField;
