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
        name="StudyList"
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

// const Tab = createBottomTabNavigator();

// const HomeScreen = () => <View><Text>Home</Text></View>;
// const SettingsScreen = () => <View><Text>Settings</Text></View>;

// const RootClientTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName='StudyList'
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           height: 64, // 이 값을 조정하여 Tab Bar의 높이를 변경할 수 있습니다.
//         },
//       }}
//       tabBar={props => <CustomTabBar {...props} />}
//     >
//       <Tab.Screen
//         name="StudyList"
//         component={Studylist}
//         options={{
//           tabBarLabel: "명예의전당",
//           tabBarIcon: ({ focused }) => (
//             <WithLocalSvg asset={focused ? studylistchoice : studylistsvg} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="HallOfFame"
//         component={Halloffame}
//         options={{
//           tabBarLabel: "명예의전당",
//           tabBarIcon: ({ focused }) => (
//             <WithLocalSvg asset={focused ? halloffamechoice : halloffamesvg} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Mystudy"
//         component={Mystudy}
//         options={{
//           tabBarLabel: "나의스터디",
//           tabBarIcon: ({ focused }) => (
//             <WithLocalSvg asset={focused ? mystudychoice : mystudysvg} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Mypage"
//         component={Mypage}
//         options={{
//           tabBarLabel: "마이페이지",
//           tabBarIcon: ({ focused }) => (
//             <WithLocalSvg asset={focused ? mypagechoice : mypagesvg} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
//   return (
//     <View style={{ flexDirection: 'row', height: 64 }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label = options.tabBarLabel || route.name;
//         const isFocused = state.index === index;

//         return (
//           <TouchableOpacity
//             key={route.key}
//             onPress={() => {
//               const event = navigation.emit({
//                 type: 'tabPress',
//                 target: route.key,
//               }) as boolean;

//               if (!isFocused && !event.defaultPrevented) {
//                 navigation.navigate(route.name);
//               }
//             }}
//             style={{
//               flex: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <WithLocalSvg
//                 asset={isFocused ? options.tabBarIcon(true) : options.tabBarIcon(false)}
//               />
//               <Text style={{ marginLeft: 5, color: isFocused ? 'red' : 'black' }}>
//                 {label}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// export default RootClientTabs;
