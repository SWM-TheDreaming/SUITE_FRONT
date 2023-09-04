import { API_URL } from "../../../react-native.config";
export const FindIdApi = async (phoneNumber: string | null) => {
    console.log(phoneNumber)
  try {
    const response = await fetch(`${API_URL}/member/id`, {
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
      return data;
    } else {
      const data = await response.json();
      return data
    }
  } catch (error) {
    throw error;
  }
};
