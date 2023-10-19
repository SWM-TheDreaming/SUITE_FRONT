import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AttnedanceOk from '../Icons/AttendanceOk.png';
import AttendanceNot from '../Icons/AtendanceNot.png';
const MyAttendanceTable: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View
          key={index}
          style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow, index === 0 ? styles.headerRow : null]}
        >
          <Text style={styles.firstColumn}>{index === 0 ? '회차' : item.round}</Text>
          <Text style={styles.secondColumn}>
            {index === 0 ? '출석일자' : item.attendanceTime.toString().slice(0, 10)}
          </Text>
          <View style={styles.thirdColumn}>
            <Text style={styles.thirdColumnText}>
              {index === 0 ? (
                '출석여부'
              ) : item.status == true ? (
                <View style={{ paddingTop: 4 }}>
                  <Image source={AttnedanceOk} />
                </View>
              ) : (
                <View style={{ paddingTop: 4 }}>
                  <Image source={AttendanceNot} />
                </View>
              )}
            </Text>
          </View>
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
    alignItems: 'center',
  },
  evenRow: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
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
    alignItems: 'center',
  },
  thirdColumnText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'PretendardVariable',
  },
});

export default MyAttendanceTable;
