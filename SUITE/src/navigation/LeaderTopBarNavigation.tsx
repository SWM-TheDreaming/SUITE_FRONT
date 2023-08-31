import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SuiteRoomCanbanBoard from '../screens/SuiteRoom/SuiteRoomCanbanBoard';
import SuiteRoomLeaderDashboard from '../screens/SuiteRoom/SuiteRoomLeaderDashboard';
import SuiteRoomDetailStart from '../screens/SuiteRoom/SuiteRoomDetailStart';
import SuiteRoomLeaderCanbanBoard from '../screens/SuiteRoom/SuiteRoomLeaderCanban';
import { Header } from '../hook/header';
import React from 'react';
const Tab = createMaterialTopTabNavigator();
export default function LeaderTopBarNavigation() {
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
        <Tab.Screen name="대시보드" component={SuiteRoomLeaderDashboard} options={{ tabBarLabel: '대시보드' }} />
        <Tab.Screen name="칸반보드" component={SuiteRoomCanbanBoard} options={{ tabBarLabel: '칸반보드' }} />
        <Tab.Screen name="칸반관리" component={SuiteRoomLeaderCanbanBoard} options={{ tabBarLabel: '칸반관리' }} />
        <Tab.Screen name="스위트룸" component={SuiteRoomDetailStart} options={{ tabBarLabel: '스위트룸' }} />
      </Tab.Navigator>
    </>
  );
}
