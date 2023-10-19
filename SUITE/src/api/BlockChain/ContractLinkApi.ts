import axios from 'axios';
import { API_URL_STUDYROOM } from '../../../react-native.config';
export const ContractLinkApi = async (accessToken: string, tx_code: string): Promise<any> => {
  try {
    const headers = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3BhaG4yQGdtYWlsLmNvbSIsIklEIjoiMzQiLCJOQU1FIjoi67CY7JiB7ZmYIiwiTklDS05BTUUiOiJTVUlURSIsIkFDQ09VTlRTVEFUVVMiOiJBQ1RJVkFURSIsIlJPTEUiOiJST0xFX1VTRVIiLCJpYXQiOjE2OTc1MDU3MjcsImV4cCI6MTY5ODExMDUyN30.dfItcHuU40yyxOISugDvqgBIQRw50xj7tDI4LSA6rdA`,
      'Content-Type': 'application/json',

      // 다른 원하는 헤더도 추가할 수 있습니다.
      // 예: 'Content-Type': 'application/json'
    };

    const response = await axios.post(
      `${API_URL_STUDYROOM}/contract/user/get/pdf-original`,
      {
        tx_code: tx_code,
      },
      { headers },
    );
    if (response.status === 200) {
      const data = response.data.pdf_link;
      return data;
    } else {
      const errorData = response.status; // 에러 응답 데이터
      return errorData;
    }
  } catch (error) {
    console.log('Error', error);
  }
};
