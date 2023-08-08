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
      if (response) {
        const data = await response.json();
        if (data.statusCode == 200){
            return data.data.accessToken
        }
        else if(data.statusCode == 400 || data.statusCode == 404) {
            return data.message
        }
      } else {
        const data = await response.json()
        throw new Error(data.data);
      }
    } catch (error) {
      throw error;
    }
  };
  