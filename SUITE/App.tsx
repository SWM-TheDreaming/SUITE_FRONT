import React, { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import { StyleSheet } from 'react-native';
import { RecoilRoot } from 'recoil';
import { GoogleSignin } from '@react-native-google-signin/google-signin'; // import messaging from '@react-native-firebase/messaging';
import config from './config';
// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   console.log('[Background Remote Message]', remoteMessage);
// });

function App(): JSX.Element {
  // const getFcmToken = async () => {
  //   const fcmToken = await messaging().getToken();
  //   console.log('[FCM Token] ', fcmToken);
  // };
  // useEffect(() => {
  //   getFcmToken();
  //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
  //     console.log('[Remote Message] ', JSON.stringify(remoteMessage));
  //   });
  //   return unsubscribe;
  // }, []);
  const googleConfigureSignIn = () => {
    GoogleSignin.configure({
      webClientId: config.GOOGLE_WEB_CLIENT_ID,
    });
  };

  useEffect(() => {
    googleConfigureSignIn();
  }, []);
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <RootNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </RecoilRoot>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
