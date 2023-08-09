export const emailAuthenticationCodeApi = async (email: string | null) => {
  try {
    const response = await fetch('http://semtle.catholic.ac.kr:8085/member/auth/mail', {
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
