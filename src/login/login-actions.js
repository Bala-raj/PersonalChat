// import { action } from '../helpers/actions';
export function action(type, payload = {}) {
  return { type, ...payload };
}
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_USER_AVATAR = 'SET_USER_AVATAR';
export const SEND_CODE = 'SEND_CODE';
export const CODE_SENT = 'CODE_SENT';
export const INVALID_CODE = 'INVALID_CODE';
export const CONFIRM_CODE = 'CONFIRM_CODE';
export const USER_AUTHORIZED = 'USER_AUTHORIZED';

export const setUserName = name => action(SET_USER_NAME, name);
export const setPhoneNumber = data => action(SET_PHONE_NUMBER, data);
export const sendCode = code => action(SEND_CODE, code);
export const verifyCode = data => action(CONFIRM_CODE, data);
