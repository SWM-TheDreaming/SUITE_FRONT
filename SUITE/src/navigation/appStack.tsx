import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import RootClientTabs from './ClientTabs';
import CategoryFilter from '../screens/CategoryFilter';
import { RootStackParamList } from '../types';
import { AuthStack } from './AuthStack';
import Studylist from '../screens/Studylist';
import SuiteRoomInfo from '../screens/SutieRoomCreate/SuiteRoomInfo';
import SuiteRoompay from '../screens/SutieRoomCreate/SuiteRoompay';
import SuiteRoomurl from '../screens/SutieRoomCreate/SuiteRoomurl';
import SuiteRoomRule from '../screens/SutieRoomCreate/SuiteRoomRule';
import SuiteRoompayCheck from '../screens/SutieRoomCreate/SuiteRoompayCheck';
import SuiteRoomDetail from '../screens/SuiteRoom/SuiteRoomDetail';
import TabBarNavigation from './TopBarNavigation';
import LeaderTopBarNavigation from './LeaderTopBarNavigation';
import CreateMission from '../screens/SuiteRoom/CreateMission';
import ContractTabNavigation from './ContractTabNavigation';
import SuiteRoomCreateComplete from '../screens/SutieRoomCreate/SuiteRoomCreateComplete';
import Alarm from '../screens/Alarm';
import SuiteRoomEdit from '../screens/SuiteRoom/SuiteRoomEdit';
const App = createStackNavigator<RootStackParamList>();

export function AppStack() {
  return (
    <App.Navigator>
      <App.Screen
        name="Mainpage"
        component={RootClientTabs} //로그인 인증이 되었을 때 HomeScreen 대신에 ClientTab을 띄우게 한다.
        options={{
          headerShown: false,
        }}
      />
      <App.Screen
        name="TabBarNavigation"
        component={TabBarNavigation}
        options={{
          headerShown: false,
        }}
      />
      <App.Screen
        name="LeaderTabBarNavigation"
        component={LeaderTopBarNavigation}
        options={{
          headerShown: false,
        }}
      />
      <App.Screen
        name="ContractTabNavigation"
        component={ContractTabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <App.Screen
        name="CategoryFilter"
        component={CategoryFilter}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="SuiteRoomInfo"
        component={SuiteRoomInfo}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="SuiteRoompay"
        component={SuiteRoompay}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="SuiteRoomurl"
        component={SuiteRoomurl}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="SuiteRoomRule"
        component={SuiteRoomRule}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="SuiteRoompayCheck"
        component={SuiteRoompayCheck}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="SuiteRoomDetail"
        component={SuiteRoomDetail}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="SuiteRoomEdit"
        component={SuiteRoomEdit}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="CreateMission"
        component={CreateMission}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="Alarm"
        component={Alarm}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="SuiteRoomCreateComplete"
        component={SuiteRoomCreateComplete}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </App.Navigator>
  );
}
