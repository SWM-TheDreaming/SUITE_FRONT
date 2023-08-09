import { useState } from 'react';

export interface FormValues {
  title: string;
  subject: string;
  content: string;
  recruitmentDeadLine: string;
  studyDeadLine: string;
  recruitmentLimit: string;
  depositAmount: string;
  minAttendanceRate: string;
  minMissionCompleteRate: string;
  password: string;
  channelLink: string;
  studyMethod: string;
}

const suiteRoomForm = () => {
  const [values, setValues] = useState<FormValues>({
    title: '',
    subject: '',
    content: '',
    recruitmentDeadLine: '',
    studyDeadLine: '',
    recruitmentLimit: '',
    depositAmount: '',
    minAttendanceRate: '',
    minMissionCompleteRate: '',
    password: '',
    channelLink: '',
    studyMethod: '',
  });
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChangeText = (name: string, text: string) => {
    setValues({
      ...values,
      [name]: text,
    });
    // 유효성 검사 수행
    if (name === 'title') {
      if (!text || text == '') {
        setErrors({
          ...errors,
          [name]: '제목을 입력해주세요.',
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
    } else if (name === 'minAttendanceRate') {
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
    } else if (name === 'minMissionCompleteRate') {
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

export default suiteRoomForm;
