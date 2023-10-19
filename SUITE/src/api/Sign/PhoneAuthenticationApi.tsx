import { API_URL } from '../../../react-native.config';
export const PhoneAuthenticationCodeApi = async (phoneNumber: string | null) => {
  try {
    const response = await fetch(`${API_URL}/member/send-sms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      const data = await response.json();
      return data.statusCode;
    }
  } catch (error) {
    throw error;
  }
};
