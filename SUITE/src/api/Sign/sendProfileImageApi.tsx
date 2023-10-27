import axios from 'axios'; // Import Axios

import { API_URL } from '../../../react-native.config';

export const sendProfileImageApi = async (memberId: number | null, imageUrl: string | null) => {
  console.log(memberId, imageUrl);

  try {
    const formData = new FormData();
    if (imageUrl != null) {
      formData.append('file', {
        uri: imageUrl,
        type: 'image/jpeg', // 파일 타입에 따라 변경
        name: 'filename.jpg', // 원하는 파일명
      });
    } else {
      formData.append('file', {});
    }
    // Use Axios to make the POST request
    const response = await axios.post(`${API_URL}/member/profile-image/${memberId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the content type for FormData
      },
    });

    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error(response.data); // You can access the response data directly
    }
  } catch (error) {
    throw error;
  }
};
