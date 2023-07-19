/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import StudyInfoCard from "../SUITE/src/components/containers/studyInfoCard.container"
import mainPageStyleSheet from "../SUITE/src/style/style"


type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style = {mainPageStyleSheet.container}>
        <StudyInfoCard />
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Details" component={StudyInfoCard} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
