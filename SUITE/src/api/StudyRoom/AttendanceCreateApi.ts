import axios from 'axios';
import { API_URL_STUDYROOM } from '../../../react-native.config';

export const AttendanceCreateApi = async (
  accessToken: string,
  roomNum: number,
  attendanceCode: number,
): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.post(
      `${API_URL_STUDYROOM}/study/attendance/registration`,
      {
        suiteRoomId: roomNum,
        attendanceCode: attendanceCode,
      },
      {
        validateStatus: function (status) {
          return status >= 200 && status <= 403; // 성공(2xx) 또는 400 상태 코드를 성공으로 처리
        },
      },
    );
    if (response.status === 200) {
      const data = response.status;
      return data;
    } else {
      const errorData = response.status; // 에러 응답 데이터
      return errorData;
    }
  } catch (error) {
    console.log('Error', error);
  }
};
