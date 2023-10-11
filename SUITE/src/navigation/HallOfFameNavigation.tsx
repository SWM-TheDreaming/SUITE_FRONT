import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header } from '../hook/header';
import React from 'react';
import HallOfFameDashboard from '../screens/SuiteRoom/HallOfFameDashBoard';
import HallOfFameCanbanBoard from '../screens/SuiteRoom/HallOfFameCanbanBoard';
const Tab = createMaterialTopTabNavigator();
export default function HallOfFameNavigation() {
  return (
    <>
      <Header title={'명예의 전당'} />
      <Tab.Navigator
        initialRouteName="SuiteRoomDashboard"
        screenOptions={{
          tabBarActiveTintColor: '#050953',
          tabBarInactiveTintColor: '#B8B8B8',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: 'white' },
        }}
      >
        <Tab.Screen name="대시보드" component={HallOfFameDashboard} options={{ tabBarLabel: '대시보드' }} />
        <Tab.Screen name="미션목록" component={HallOfFameCanbanBoard} options={{ tabBarLabel: '칸반보드' }} />
      </Tab.Navigator>
    </>
  );
}
