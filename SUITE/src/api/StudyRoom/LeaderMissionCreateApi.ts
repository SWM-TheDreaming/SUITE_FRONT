import axios from 'axios';
import { API_URL_STUDYROOM } from '../../../react-native.config';

export const LeaderMissionCreateApi = async (
  accessToken: string,
  roomNum: number,
  missionName: string,
  missionDeadLine: Date,
): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.post(`${API_URL_STUDYROOM}/study/mission/registration`, {
      suiteRoomId: roomNum,
      missionName: missionName,
      missionDeadLine: missionDeadLine,
    });
    console.log(response.data);
    if (response.status === 200) {
      const data = response.data;
      return data;
    } else {
      console.log('Error occurred:', response);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};
