import axios from 'axios';
import { API_URL_STUDYROOM } from '../../../react-native.config';
export const TransactionReadApi = async (accessToken: string, user_id: string, tx_code: string): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.post(`${API_URL_STUDYROOM}/contract/user/get/pdf-original`, {
      user_id: user_id,
      tx_code: tx_code,
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
