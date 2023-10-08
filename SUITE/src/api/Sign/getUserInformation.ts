import axios from 'axios';
import { API_URL } from '../../../react-native.config';
interface UserData {
  email: string;
  memberId: string;
  name: string;
  nickName: string;
  isAuth: boolean;
  phone: string;
  preferStudy: string;
  profileURL: string;
  missionAvgRate: number;
  missionCompleteCount: number;
  attendanceAvgRate: number;
  attendanceCompleteCount: number;
  // 다른 속성들도 정의할 수 있음
}
export const getUserInformation = async (accessToken: string): Promise<UserData> => {
  try {
    // token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
    console.log('getuser : ', accessToken);
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    const userResponse = await axios.get(`${API_URL}/member/m/profile`);

    if (userResponse.status === 200) {
      const data = userResponse.data.data;
      return data;
    } else {
      console.log('Error occurred:', userResponse);
    }
  } catch (error) {
    console.log('Error occurred:', error);
  }
};
