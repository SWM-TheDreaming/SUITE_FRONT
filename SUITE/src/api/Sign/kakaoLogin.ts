import * as KakaoLogin from '@react-native-seoul/kakao-login';

export const externalkakaologin = async (): Promise<any> => {
  try {
    const result = await KakaoLogin.login();
    const data = JSON.stringify(result);
    const parsedData = JSON.parse(data);
    const accessToken = parsedData.accessToken;
    console.log(accessToken);
    try {
      const response = await fetch('http://semtle.catholic.ac.kr:8085/member/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_token: accessToken,
        }),
      });

      if (response) {
        const responseData = await response.json();
        return responseData;
      } else {
        const errorData = await response.json();
        console.log('Error occurred:', errorData);
      }
    } catch (error) {
      console.log('Error occurred:', error);
    }
  } catch (error) {
    console.log('Error occurred:', error);
  }
};
