export const signUpAPI = async ({
  email,
  password,
  name,
  nickname,
  phone,
  securityNum,
  preferStudy,
  studyMethod,
  isOauth,
}: {
  email: string;
  password: string;
  name: string;
  nickname: string;
  phone: string;
  securityNum: string;
  preferStudy: string;
  studyMethod: string;
  isOauth: boolean;
}): Promise<void> => {
  try {
    const response = await fetch('http://semtle.catholic.ac.kr:8085/member/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        role: 'USER',
        name: name,
        nickName: nickname,
        phone: phone,
        securityNum: securityNum,
        preferStudy: preferStudy,
        studyMethod: studyMethod,
        isOauth: isOauth,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log('Error occurred:', response);
    }
  } catch (error) {
    console.log('Error occurred:', error);
  }
};
