import { API_URL } from '../../../react-native.config';
export const sendProfileImageApi = async (memberId: number | null, imageUrl: string | null) => {
  console.log(memberId, imageUrl);

  try {
    const formData = new FormData();
    formData.append('file', imageUrl);

    const response = await fetch(`${API_URL}/member/profile-image/${memberId}`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data.data;
    } else {
      const data = await response.json();
      throw new Error(data);
    }
  } catch (error) {
    throw error;
  }
};
