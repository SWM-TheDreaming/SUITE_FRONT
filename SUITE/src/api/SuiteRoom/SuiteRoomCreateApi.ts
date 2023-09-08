import { API_URL_SUITEROOM } from '../../../react-native.config';

export const SuiteRoomCreateApi = async ({
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
  isOpen: boolean;
  channelLink: string;
  studyMethod: string;
  contractAddress: string;
}): Promise<void> => {
  try {
    const response = await fetch(`${API_URL_SUITEROOM}/suite/suiteroom/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log('Error occurred:', response);
    }
  } catch (error) {
    console.log('Error occurred:', error);
  }
};
