import axios from 'axios';
import { API_URL_STUDYROOM } from '../../../react-native.config';
export const TransactionReadApi = async (accessToken: string, roomNum: number, title: string): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.post(`${API_URL_STUDYROOM}/contract/user/get/group-transaction-read`, {
      suite_room_id: roomNum,
      title: title,
    });
    if (response.status === 200) {
      const data = response.data.txResults;
      return data;
    } else {
      const errorData = response.status; // 에러 응답 데이터
      return errorData;
    }
  } catch (error) {
    console.log('Error', error);
  }
};
