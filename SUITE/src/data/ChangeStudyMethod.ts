const convertStudyMethod = (studyvalue: string): string => {
  switch (studyvalue) {
    case '온라인':
      return 'ONLINE';
    case '오프라인':
      return 'OFFLINE';

    default:
      return studyvalue; // 해당하는 값이 없으면 원래의 studyvalue 그대로 반환
  }
};

export default convertStudyMethod;
