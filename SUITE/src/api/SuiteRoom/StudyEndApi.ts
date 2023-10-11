import axios from 'axios';
import { API_URL_SUITEROOM } from '../../../react-native.config';

export const DashBoardApi = async (accessToken: string, roomNum: number): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.post(`${API_URL_SUITEROOM}/suite/suiteroom/end`, {
      suiteRoomId: roomNum,
    });
    if (response.status === 200) {
      const data = response.status;
      return data;
    } else {
      console.log('Error occurred:', response);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};
