import { API_URL } from '../../../react-native.config';

export const googleloginApi = async (accessToken: string): Promise<any> => {
  try {
    console.log(accessToken);
    try {
      const response = await fetch(`${API_URL}/member/auth/signin`, {
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
