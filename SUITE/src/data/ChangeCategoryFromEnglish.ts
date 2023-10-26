const convertStudyValueFromEngish = (studyvalue: string): string => {
  switch (studyvalue) {
    case 'TOEIC':
      return '토익';
    case 'TOEIC_SPEACKING':
      return '토스';
    case 'OPIC':
      return '오픽';
    case 'OFFICE':
      return '공무원';
    case 'LEET':
      return '법학';
    case 'POLICE':
      return '경찰고시';
    case 'TEACHING':
      return '임용시험';
    case 'FIREFIGHTER':
      return '소방고시';
    case 'FINANCE':
      return '회계/세무';
    case 'REALTOR':
      return '공인중개사';
    case 'UNIV':
      return '대학';
    case 'CERTIFICATE':
      return '자격증';
    case 'IT':
      return 'IT';
    default:
      return studyvalue; // 해당하는 값이 없으면 원래의 studyvalue 그대로 반환
  }
};

export default convertStudyValueFromEngish;
