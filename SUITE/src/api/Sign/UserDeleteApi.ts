import axios from 'axios';
import { API_URL } from '../../../react-native.config';

export const UserDeleteApi = async (accessToken: string): Promise<any> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const response = await axios.post(`${API_URL}/member/m/delete`, {});
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
