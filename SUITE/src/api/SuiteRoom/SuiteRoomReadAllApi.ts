import { API_URL_SUITEROOM } from '../../../react-native.config';

export const SuiteRoomReadAllApi = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_URL_SUITEROOM}/suite/suiteroom`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.log('Error occurred:', response);
    }
  } catch (error) {
    console.log('Error occurred:', error);
  }
};
