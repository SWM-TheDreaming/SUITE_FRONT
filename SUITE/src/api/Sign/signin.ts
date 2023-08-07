export const SignInApi = async (email: string, password: string): Promise<string> => {
    try {
      const response = await fetch('http://semtle.catholic.ac.kr:8085/member/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.data.accessToken;
      } else {
        const data = await response.json();
        throw new Error(data.data);
      }
    } catch (error) {
      throw error;
    }
  };
  