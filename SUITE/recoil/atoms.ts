import { atom } from 'recoil';

export const emailState = atom({
  key: 'emailState',
  default: '', // 기본값
});
