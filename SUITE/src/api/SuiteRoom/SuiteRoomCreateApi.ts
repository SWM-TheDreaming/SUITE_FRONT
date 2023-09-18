import axios from 'axios';
import { API_URL_SUITEROOM } from '../../../react-native.config';

export const SuiteRoomCreateApi = async (
  accessToken: string,
  {
    title,
    content,
    subject,
    recruitmentDeadline,
    studyDeadline,
    recruitmentLimit,
    depositAmount,
    minAttendanceRate,
    minMissionCompleteRate,
    isPublic,
    password,
    isOpen,
    channelLink,
    studyMethod,
    contractAddress,
  }: {
    title: string;
    content: string;
    subject: string;
    recruitmentDeadline: Date;
    studyDeadline: Date;
    recruitmentLimit: number;
    depositAmount: number;
    minAttendanceRate: number;
    minMissionCompleteRate: number;
    isPublic: boolean;
    password: number;
    isOpen: boolean; // Optional field
    channelLink: string; // Optional field
    studyMethod: string; // Optional field
    contractAddress: string;
  },
): Promise<void> => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    const response = await axios.post(`${API_URL_SUITEROOM}/suite/suiteroom/registration`, {
      title: title,
      content: content,
      subject: subject,
      recruitmentDeadline: recruitmentDeadline,
      studyDeadline: studyDeadline,
      recruitmentLimit: recruitmentLimit,
      depositAmount: depositAmount,
      minAttendanceRate: minAttendanceRate,
      minMissionCompleteRate: minMissionCompleteRate,
      isPublic: isPublic,
      password: password,
      isOpen: false,
      channelLink: channelLink,
      studyMethod: studyMethod,
      contractAddress: null,
    });
    if (response.status === 200) {
      const data = response.data;
      return data;
    } else {
      console.log('Error occurred:', response);
    }
  } catch (error) {
    console.log('Error occurred:', error);
  }
};
