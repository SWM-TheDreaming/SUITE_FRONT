import { API_URL } from '../../../react-native.config';

export const signUpAPI = async ({
  email,
  password,
  name,
  nickname,
  phone,
  securityNum,
  preferStudy,
  studyMethod,
  isOauth,
  fcmToken,
}: {
  email: string;
  password: string;
  name: string;
  nickname: string;
  phone: string;
  securityNum: string;
  preferStudy: string;
  studyMethod: string;
  isOauth: boolean;
  fcmToken: string;
}): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/member/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        role: 'USER',
        name: name,
        nickName: nickname,
        phone: phone,
        securityNum: securityNum,
        preferStudy: preferStudy,
        studyMethod: studyMethod,
        isOauth: isOauth,
        fcmToken: '123',
      }),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data.data.memberId;
    } else {
      console.log('Error occurred:', response);
    }
  } catch (error) {
    console.log('Error occurred:', error);
  }
};
