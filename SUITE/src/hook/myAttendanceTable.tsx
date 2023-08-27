import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type DataRow = {
  nickname: string;
  attendance: string;
  missionCompletion: string;
};

const data: DataRow[] = [
  { nickname: '', attendance: '', missionCompletion: '' },
  { nickname: '1', attendance: '2023-07-15', missionCompletion: 'O' },
  { nickname: '2', attendance: '2023-07-16', missionCompletion: 'X' },
  { nickname: '3', attendance: '2023-07-17', missionCompletion: 'O' },
  { nickname: '4', attendance: '2023-07-18', missionCompletion: 'O' },
  { nickname: '5', attendance: '2023-07-19', missionCompletion: 'O' },
];

const MyAttendanceTable: React.FC = () => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View
          key={index}
          style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow, index === 0 ? styles.headerRow : null]}
        >
          <Text style={styles.firstColumn}>{index === 0 ? '회차' : item.nickname}</Text>
          <Text style={styles.secondColumn}>{index === 0 ? '출석일자' : item.attendance}</Text>
          <Text style={styles.thirdColumn}>{index === 0 ? '출석여부' : item.missionCompletion}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  headerRow: {
    backgroundColor: '#E5F5FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  oddRow: {
    backgroundColor: 'white',
  },
  evenRow: {
    backgroundColor: '#F8F8F8',
  },
  cell: {
    textAlign: 'center',
    flex: 1,
  },
  firstColumn: {
    width: 60,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'PretendardVariable',
  },
  secondColumn: {
    width: 180,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'PretendardVariable',
  },
  thirdColumn: {
    width: 80,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'PretendardVariable',
  },
});

export default MyAttendanceTable;
