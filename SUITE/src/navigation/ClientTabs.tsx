import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Studylist from '../screens/Studylist';
import Halloffame from '../screens/Halloffame';
import Mystudy from '../screens/Mystudy';
import Mypage from '../screens/Mypage';
import { WithLocalSvg } from 'react-native-svg';
import Studylistsvg from '../Icons/studylist.svg';
import Studylistchoice from '../Icons/studylistchoice.svg';
import Halloffamesvg from '../Icons/halloffame.svg';
import Halloffamechoice from '../Icons/halloffamechoice.svg';
import Mystudysvg from '../Icons/mystudy.svg';
import Mystudychoice from '../Icons/mystudychoice.svg';
import Mypagesvg from '../Icons/mypage.svg';
import Mypagechoice from '../Icons/mypagechoice.svg';
import { heightPercentage } from '../responsive/ResponsiveSize';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  //App Stack과 연동하기 위한 함수 export

  return (
    <ClientTabs.Navigator
      initialRouteName="Studylist"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          position: 'absolute',
        },
      }}
    >
      <ClientTabs.Screen
        name="Studylist"
        component={Studylist}
        options={{
          tabBarLabel: '스터디목록',
          tabBarIcon: ({ focused }) =>
            focused ? <Studylistchoice/> : <Studylistsvg />,
        }}
      />
      <ClientTabs.Screen
        name="HallOfFame"
        component={Halloffame}
        options={{
          tabBarLabel: '명예의전당',
          tabBarIcon: ({ focused }) =>
            focused ? <Halloffamechoice /> : <Halloffamesvg />,
        }}
      />
      <ClientTabs.Screen
        name="Mystudy"
        component={Mystudy}
        options={{
          tabBarLabel: '나의스터디',
          tabBarIcon: ({ focused }) =>
            focused ? <Mystudychoice /> : <Mystudysvg/>,
        }}
      />

      <ClientTabs.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({ focused }) =>
            focused ? <Mypagechoice /> : <Mypagesvg />,
        }}
      />
    </ClientTabs.Navigator>
  );
}
