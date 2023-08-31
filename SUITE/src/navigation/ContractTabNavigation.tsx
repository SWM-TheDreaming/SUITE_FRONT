import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ContractWriteList from '../screens/SuiteRoom/ContractWriteList';
import ContractReadList from '../screens/SuiteRoom/ContractReadList';
import { Header } from '../hook/header';
import React from 'react';
const Tab = createMaterialTopTabNavigator();
export default function TopBarNavigation() {
  return (
    <>
      <Header title={'컨트랙트 이력'}/>
      <Tab.Navigator
        initialRouteName="ContractReadList"
        screenOptions={{
          tabBarActiveTintColor: '#050953',
          tabBarInactiveTintColor: '#B8B8B8',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: 'white' },
        }}
      >
        <Tab.Screen name="조회이력" component={ContractReadList} options={{ tabBarLabel: '조회이력' }} />
        <Tab.Screen name="작성이력" component={ContractWriteList} options={{ tabBarLabel: '작성이력' }} />
      </Tab.Navigator>
    </>
  );
}
