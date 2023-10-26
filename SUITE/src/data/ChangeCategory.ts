const convertStudyValue = (studyvalue: string): string => {
  switch (studyvalue) {
    case '토익':
      return 'TOEIC';
    case '토스':
      return 'TOEIC_SPEACKING';
    case '오픽':
      return 'OPIC';
    case '공무원':
      return 'OFFICE';
    case '법학':
      return 'LEET';
    case '경찰고시':
      return 'POLICE';
    case '임용시험':
      return 'TEACHING';
    case '소방고시':
      return 'FIREFIGHTER';
    case '회계/세무':
      return 'FINANCE';
    case '공인중개사':
      return 'REALTOR';
    case '대학':
      return 'UNIV';
    case '자격증':
      return 'CERTIFICATE';
    case 'IT':
      return 'IT';
    default:
      return studyvalue; // 해당하는 값이 없으면 원래의 studyvalue 그대로 반환
  }
};

export default convertStudyValue;
