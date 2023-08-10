import { atom } from 'recoil';
export const tokenState = atom({
  key: 'tokenState',
  default: '',
});
export const emailState = atom({
  key: 'emailState',
  default: '', // 기본값
});
export const passwordState = atom({
  key: 'passwordState',
  default: '', // 기본값
});
export const nameState = atom({
  key: 'nameState',
  default: '', // 기본값
});
export const phoneState = atom({
  key: 'phoneState',
  default: '', // 기본값
});
export const securityNumState = atom({
  key: 'securityNumState',
  default: '', // 기본값
});
export const preferStudyState = atom({
  key: 'preferStudyState',
  default: '', // 기본값
});
export const studyMethodState = atom({
  key: 'studyMethodState',
  default: '', // 기본값
});
export const isAuthState = atom({
  key: 'isAuthState',
  default: true,
});

export const suiteRoomState = atom({
  key: 'suiteRoomState',
  default: '',
});
export const subjectState = atom({
  key: 'subjectState',
  default: '',
});
export const recruitmentDeadLineState = atom({
  key: 'recruitmentDeadLineState',
  default: null,
});
export const studyDeadLineState = atom({
  key: 'studyDeadLineState',
  default: null,
});
export const recruitmentLimitState = atom({
  key: 'recruitmentLimitState',
  default: 0,
});
