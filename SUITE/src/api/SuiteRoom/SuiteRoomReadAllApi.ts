import axios from 'axios';
import { API_URL_SUITEROOM } from '../../../react-native.config';

export const SuiteRoomReadAllApi = async (accessToken: string, keyword: string, filter: string[]): Promise<any> => {
  try {
    console.log('readall+', accessToken, filter);
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    console.log(axios.defaults.headers.common);
    const response = await axios.post(`${API_URL_SUITEROOM}/suite/suiteroom`, {
      keyword: keyword,
      subjects: filter,
    });
    console.log('readResponse', response);
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
