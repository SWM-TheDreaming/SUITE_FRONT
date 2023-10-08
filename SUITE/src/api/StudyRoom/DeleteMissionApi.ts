import axios from 'axios';
import { API_URL_STUDYROOM } from '../../../react-native.config';

export const DeleteMissionApi = async (accessToken: string, roomNum: number, missionName: string): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.post(
      `${API_URL_STUDYROOM}/study/mission/delete`,
      {
        suiteRoomId: roomNum,
        missionName: missionName,
      },
      {
        validateStatus: function (status) {
          return (status >= 200 && status < 300) || status === 400; // 성공(2xx) 또는 400 상태 코드를 성공으로 처리
        },
      },
    );
    if (response.status === 200) {
      const data = response.status;
      return data;
    } else if (response.status === 400) {
      const errorData = response.data; // 에러 응답 데이터
      return errorData.message;
    } else {
      console.log('Error occurred:', response.status);
    }
  } catch (error) {
    console.log('Error', error);
  }
};
