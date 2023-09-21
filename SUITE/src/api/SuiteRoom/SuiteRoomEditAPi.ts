import axios from 'axios';
import { API_URL_SUITEROOM } from '../../../react-native.config';
export const SuiteRoomEditApi = async (
  accessToken: string,
  roomNum: number,
  content: string,
  channelLink: string,
): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.patch(`${API_URL_SUITEROOM}/suite/suiteroom/update`, {
      suiteRoomId: roomNum,
      content: content,
      channelLink: channelLink,
    });
    if (response.status === 200) {
      const data = response.data.data;
      return data;
    } else {
      console.log('Error occurred:', response);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};
