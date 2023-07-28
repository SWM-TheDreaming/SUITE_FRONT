import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import { StyleSheet } from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  )
  ;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
