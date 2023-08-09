import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import mainPageStyleSheet from '../../style/style';

interface DatePickerModalProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DatePickerModal: React.FC<DatePickerModalProps> = ({ selectedDate, onDateChange }) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);

  return (
    <>
      <TouchableOpacity style={mainPageStyleSheet.idpwInputBox} onPress={() => setOpenDatePicker(true)}>
        <Text style={mainPageStyleSheet.studyInfoDateText}>{selectedDate.toDateString()}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={openDatePicker}
        mode="date"
        date={selectedDate}
        onConfirm={(date) => {
          setOpenDatePicker(false);
          onDateChange(date);
        }}
        onCancel={() => setOpenDatePicker(false)}
      />
    </>
  );
};

export default DatePickerModal;
