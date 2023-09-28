import axios from 'axios';
import { API_URL_SUITEROOM } from '../../../react-native.config';

export const mySuiteRoomReadApi = async (accessToken: string): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.get(`${API_URL_SUITEROOM}/suite/progression`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const data = response.data.data;
      return data;
    } else {
      console.log('Error occurred:', response);
    }
  } catch (error) {
    console.log('Error occurred:', error);
  }
};
