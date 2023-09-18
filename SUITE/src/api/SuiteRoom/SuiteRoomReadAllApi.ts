import axios from 'axios';
import { API_URL_SUITEROOM } from '../../../react-native.config';

export const SuiteRoomReadAllApi = async (accessToken: string, filter: string[]): Promise<any> => {
  try {
    console.log('readall+', accessToken);
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.post(`${API_URL_SUITEROOM}/suite/suiteroom`, filter, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data.data);
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