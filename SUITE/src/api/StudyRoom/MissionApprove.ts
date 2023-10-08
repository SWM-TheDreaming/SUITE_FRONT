import axios from 'axios';
import { API_URL_STUDYROOM } from '../../../react-native.config';

export const MissionApprove = async (accessToken: string, roomNum: number, missionId: number): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.post(`${API_URL_STUDYROOM}/study/mission/approval`, {
      suiteRoomId: roomNum,
      missionId: missionId,
    });
    if (response.status === 200) {
      const data = response.data.data;
      return data;
    } else {
      const errorData = response.status; // 에러 응답 데이터
      return errorData;
    }
  } catch (error) {
    console.log('Error', error);
  }
};
