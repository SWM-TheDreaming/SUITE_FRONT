import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudyStatusTable: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View
          key={index}
          style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow, index === 0 ? styles.headerRow : null]}
        >
          <Text style={styles.firstColumn}>{index === 0 ? '스터디 팀원' : item.nickName}</Text>
          <Text style={styles.secondColumn}>{index === 0 ? '출석률' : `${item.attendanceRate * 100}%`}</Text>
          <Text style={styles.thirdColumn}>{index === 0 ? '미션달성률' : `${item.missionRate * 100}%`}</Text>
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
    width: 166,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'PretendardVariable',
  },
  secondColumn: {
    width: 70,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'PretendardVariable',
  },
  thirdColumn: {
    width: 84,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'PretendardVariable',
  },
});

export default StudyStatusTable;
