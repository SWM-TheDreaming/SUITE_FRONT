import { API_URL } from '../../../react-native.config';
export const emailAuthenticationCodeApi = async (email: string | null) => {
  try {
    const response = await fetch(`${API_URL}/member/auth/mail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.data.code;
    } else {
      const data = await response.json();
      throw new Error(data);
    }
  } catch (error) {
    throw error;
  }
};
