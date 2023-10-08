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
  name: string;
  missionName: string;
  attendanceCode: string;
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
    name: '',
    missionName: '',
    attendanceCode: '',
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
          [name]: '출석률을 입력해주세요.',
        });
      } else if (!/\d/.test(text)) {
        setErrors({
          ...errors,
          [name]: '숫자만 입력해 주세요.',
        });
      } else if (!/^(?:\d{1,2}|100)$/.test(text)) {
        setErrors({
          ...errors,
          [name]: '미션 달성률은 1부터 100 사이여야 합니다.',
        });
      } else if (!/^(?:[6-9][0-9]|100)$/.test(text)) {
        setErrors({
          ...errors,
          [name]: '출석률은 60%이상이여야 합니다',
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
          [name]: '미션달성률을 입력해주세요.',
        });
      } else if (!/\d/.test(text)) {
        setErrors({
          ...errors,
          [name]: '숫자만 입력해 주세요.',
        });
      } else if (!/^(?:\d{1,2}|100)$/.test(text)) {
        setErrors({
          ...errors,
          [name]: '미션 달성률은 1~100 사이여야 합니다.',
        });
      } else if (!/^(?:[6-9][0-9]|100)$/.test(text)) {
        setErrors({
          ...errors,
          [name]: '미션 달성률은 60%이상이여야 합니다.',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    } else if (name === 'depositAmount') {
      if (!text) {
        setErrors({
          ...errors,
          [name]: '보증금을 입력해주세요.',
        });
      } else if (!/\d/.test(text)) {
        setErrors({
          ...errors,
          [name]: '숫자만 입력해 주세요.',
        });
      } else if (String(parseInt(text)).length != text.length) {
        setErrors({
          ...errors,
          [name]: '숫자만 입력해 주세요.',
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
      } else if (!/^\d{4}$/.test(text)) {
        setErrors({
          ...errors,
          [name]: '비밀번호는 4자리 숫자만 입력해 주세요.',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    } else if (name === 'content') {
      if (!text) {
        setErrors({
          ...errors,
          [name]: '내용을 입력해주세요',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    } else if (name === 'channelLink') {
      if (!text) {
        setErrors({
          ...errors,
          [name]: '소통창구는 필수 입니다!',
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
          [name]: '입금자명을 입력해주세요!',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    } else if (name === 'missionName') {
      if (!text) {
        setErrors({
          ...errors,
          [name]: '내용을 입력해주세요',
        });
      } else {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    } else if (name === 'attendanceCode') {
      if (!text) {
        setErrors({
          ...errors,
          [name]: '숫자를 입력해주세요',
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
