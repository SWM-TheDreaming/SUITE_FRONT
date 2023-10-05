import axios from 'axios';
import { API_URL_STUDYROOM } from '../../../react-native.config';

export const MissionListApi = async (accessToken: string, roomNum: number, missionTypeString: string): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.post(`${API_URL_STUDYROOM}/study/mission`, {
      suiteRoomId: roomNum,
      missionTypeString: missionTypeString,
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
