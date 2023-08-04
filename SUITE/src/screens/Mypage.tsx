import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../recoil/atoms';
import { setStorage } from '../hook/asyncStorage';

const Mypage = () => {
  const [token, setToken] = useRecoilState(tokenState)

  const SignOut = async () => {
    setStorage("token", JSON.stringify(null));
    setToken('')
  } 
  return (
    <View>
      <Text>mypage page</Text>
      <TouchableOpacity
        onPress = {SignOut}
      >
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Mypage;
