import * as ACTIONS from './login-actions';

const initialState = {
  name: null,
  avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png',
  phoneNumber: null,
  authorizing: false,
  codeSent: false,
  invalidCode: false,
  authorized: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER_NAME:
      return { ...state, name: action.name };
    case ACTIONS.SET_PHONE_NUMBER:
      return { ...state, phoneNumber: action.phone };
    case ACTIONS.SET_USER_AVATAR:
      return { ...state, avatar: action.avatar };
    case ACTIONS.SEND_CODE:
      return { ...state, authorizing: true };
    case ACTIONS.INVALID_CODE:
      return { ...state, invalidCode: true };
    case ACTIONS.USER_AUTHORIZED:
      return { ...state, authorizing: false, invalidCode: false, authorized: true };
    case ACTIONS.CODE_SENT:
      return { ...state, codeSent: true };

    default:
      return state;
  }
};

export default user;
