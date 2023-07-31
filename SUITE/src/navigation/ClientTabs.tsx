import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Studylist from '../screens/Studylist';
import Halloffame from '../screens/Halloffame';
import Mystudy from '../screens/Mystudy';
import Mypage from '../screens/Mypage';
import { WithLocalSvg } from 'react-native-svg';
import studylistsvg from '../Icons/studylist.svg';
import studylistchoice from '../Icons/studylistchoice.svg';
import halloffamesvg from '../Icons/halloffame.svg';
import halloffamechoice from '../Icons/halloffamechoice.svg';
import mystudysvg from '../Icons/mystudy.svg';
import mystudychoice from '../Icons/mystudychoice.svg';
import mypagesvg from '../Icons/mypage.svg';
import mypagechoice from '../Icons/mypagechoice.svg';
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
            focused ? <WithLocalSvg asset={studylistchoice} /> : <WithLocalSvg asset={studylistsvg} />,
        }}
      />
      <ClientTabs.Screen
        name="HallOfFame"
        component={Halloffame}
        options={{
          tabBarLabel: '명예의전당',
          tabBarIcon: ({ focused }) =>
            focused ? <WithLocalSvg asset={halloffamechoice} /> : <WithLocalSvg asset={halloffamesvg} />,
        }}
      />
      <ClientTabs.Screen
        name="Mystudy"
        component={Mystudy}
        options={{
          tabBarLabel: '나의스터디',
          tabBarIcon: ({ focused }) =>
            focused ? <WithLocalSvg asset={mystudychoice} /> : <WithLocalSvg asset={mystudysvg} />,
        }}
      />

      <ClientTabs.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({ focused }) =>
            focused ? <WithLocalSvg asset={mypagechoice} /> : <WithLocalSvg asset={mypagesvg} />,
        }}
      />
    </ClientTabs.Navigator>
  );
}
