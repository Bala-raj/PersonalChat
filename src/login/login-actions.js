// import { action } from '../helpers/actions';
export function action(type, payload = {}) {
  return { type, ...payload };
}
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AVATAR = 'SET_USER_AVATAR';
export const USER_START_AUTHORIZING = 'USER_START_AUTHORIZING';
export const USER_AUTHORIZED = 'USER_AUTHORIZED';
export const USER_NO_EXIST = 'USER_NO_EXIST';

export const setUserName = name => action(SET_USER_NAME, name);
export const setUserAvatar = data => action(SET_USER_AVATAR, data);
export const login = data => action(USER_START_AUTHORIZING, data);
