import axios from 'axios';
import { API_URL_SUITEROOM } from '../../../react-native.config';

export const SuiteRoomTitleCheck = async (accessToken: string, title: string): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.post(`${API_URL_SUITEROOM}/suite/suiteroom/validate/title`, {
      title: title,
    });
    if (response.status === 200) {
      return 200;
    } else {
      console.log('Error occurred:', response);
    }
  } catch (error) {
    console.log('Error:', error);
    return 400;
  }
};
