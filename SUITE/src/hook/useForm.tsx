import { useState } from 'react';

export interface FormValues {
  username: string;
  password: string;
  code: string;
  name: string;
  phone: string;
  securityNum: string;
  birthday: string;
  sex: string;
  preferStudy: string;
  studyMethod: string;
  nickname : string;
}

const useForm = () => {
  const [values, setValues] = useState<FormValues>({
    username: '',
    password: '',
    code: '',
    name: '',
    phone: '',
    securityNum: '',
    birthday: '',
    sex: '',
    preferStudy: '',
    studyMethod: '',
    nickname: '',
  });
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChangeText = (name: string, text: string) => {
    setValues({
      ...values,
      [name]: text,
    });
    // 유효성 검사 수행
    if (name === 'username') {
      if (!text || text == '') {
        setErrors({
          ...errors,
          [name]: '이메일을 입력해주세요.',
        });
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text)) {
        setErrors({
          ...errors,
          [name]: '올바른 이메일 형식이 아닙니다.',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    } else if (name === 'password') {
      if (!text) {
        setErrors({
          ...errors,
          [name]: '비밀번호를 입력해주세요.',
        });
      } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/.test(text)) {
        setErrors({
          ...errors,
          [name]: '비밀번호는 영문, 숫자, 특수문자를 혼합하여 10자 이상이어야 합니다.',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    } else if (name === 'name') {
      if (!text) {
        setErrors({
          ...errors,
          [name]: '이름을 입력해주세요.',
        });
      } else if (!/^[ㄱ-ㅎㅏ-ㅣ가-힣]{1,4}$/.test(text)) {
        setErrors({
          ...errors,
          [name]: '이름 형식에 맞지 않습니다.',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    } else if (name === 'phone') {
      if (!text) {
        setErrors({
          ...errors,
          [name]: '전화번호를 입력해주세요.',
        });
      } else if (!/^01[0-9]{1}-[0-9]{4}-[0-9]{4}$/.test(text)) {
        setErrors({
          ...errors,
          [name]: '전화번호 형식에 맞지 않습니다.',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    } else if (name === 'securityNum') {
      if (!text) {
        setErrors({
          ...errors,
          [name]: '생년월일을 입력해주세요.',
        });
      } else if (!/^\d{6}$/.test(text)) {
        setErrors({
          ...errors,
          [name]: '형식에 맞지 않습니다.',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    }else if (name === 'nickname') {
      if (!text) {
        setErrors({
          ...errors,
          [name]: '닉네임을 입력해주세요.',
        });
      } else if (!/^.{1,8}$/.test(text)) {
        setErrors({
          ...errors,
          [name]: '닉네임은 8글자 이하로 입력해주세요',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    }
  };

  const handleBlur = (name: string) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTextInputProps = (name: keyof FormValues) => {
    return {
      value: values[name],
      onChangeText: (text: string) => handleChangeText(name, text),
      onBlur: () => handleBlur(name),
    };
  };

  return {
    values,
    touched,
    errors,
    getTextInputProps,
  };
};

export default useForm;
