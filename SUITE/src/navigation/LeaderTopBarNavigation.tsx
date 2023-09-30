import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SuiteRoomCanbanBoard from '../screens/SuiteRoom/SuiteRoomCanbanBoard';
import SuiteRoomLeaderDashboard from '../screens/SuiteRoom/SuiteRoomLeaderDashboard';
import SuiteRoomDetailStart from '../screens/SuiteRoom/SuiteRoomDetailStart';
import SuiteRoomLeaderCanbanBoard from '../screens/SuiteRoom/SuiteRoomLeaderCanban';
import SuiteRoomMyAttendance from '../screens/SuiteRoom/SuiteRoomMyAttendance';
import SuiteRoomDashboard from '../screens/SuiteRoom/SuiteRoomDashboard';
import { suiteRoomStatusState, hostState } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { Header } from '../hook/header';
import React from 'react';
const Tab = createMaterialTopTabNavigator();
export default function LeaderTopBarNavigation() {
  const suiteRoomStatus = useRecoilValue(suiteRoomStatusState);
  const hostStatus = useRecoilValue(hostState);
  return (
    <>
      <Header title={'스위트룸'} backScreen="Mystudy" />
      <Tab.Navigator
        initialRouteName="SuiteRoomDashboard"
        screenOptions={{
          tabBarActiveTintColor: '#050953',
          tabBarInactiveTintColor: '#B8B8B8',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: 'white' },
        }}
      >
        {suiteRoomStatus === 'START' ? ( //시작했을 때의 Top Tab Bar
          hostStatus === true ? ( //방장일때의 Top Tab Bar
            <>
              <Tab.Screen name="대시보드" component={SuiteRoomLeaderDashboard} options={{ tabBarLabel: '대시보드' }} />
              <Tab.Screen name="칸반보드" component={SuiteRoomCanbanBoard} options={{ tabBarLabel: '칸반보드' }} />
              <Tab.Screen
                name="칸반관리"
                component={SuiteRoomLeaderCanbanBoard}
                options={{ tabBarLabel: '칸반관리' }}
              />
              <Tab.Screen name="스위트룸" component={SuiteRoomDetailStart} options={{ tabBarLabel: '스위트룸' }} />
            </>
          ) : (
            //시작하고, 일반 유저일때의 Top Tab Bar
            <>
              <Tab.Screen name="대시보드" component={SuiteRoomDashboard} options={{ tabBarLabel: '대시보드' }} />
              <Tab.Screen name="칸반보드" component={SuiteRoomCanbanBoard} options={{ tabBarLabel: '칸반보드' }} />
              <Tab.Screen name="출석관리" component={SuiteRoomMyAttendance} options={{ tabBarLabel: '출석관리' }} />
              <Tab.Screen name="스위트룸" component={SuiteRoomDetailStart} options={{ tabBarLabel: '스위트룸' }} />
            </>
          )
        ) : // 시작전의 Top Tab Bar
        hostStatus == true ? ( //시작전의 방장 Top Tab Bar
          <>
            <Tab.Screen name="대시보드" component={SuiteRoomLeaderDashboard} options={{ tabBarLabel: '대시보드' }} />
            <Tab.Screen name="스위트룸" component={SuiteRoomDetailStart} options={{ tabBarLabel: '스위트룸' }} />
          </>
        ) : (
          //시작 전의 User의 Top Tab Bar
          <>
            <Tab.Screen name="대시보드" component={SuiteRoomDashboard} options={{ tabBarLabel: '대시보드' }} />
            <Tab.Screen name="스위트룸" component={SuiteRoomDetailStart} options={{ tabBarLabel: '스위트룸' }} />
          </>
        )}
      </Tab.Navigator>
    </>
  );
}
