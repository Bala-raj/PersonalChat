import * as ACTIONS from './login-actions';

const initialState = {
  name: null,
  avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png',
  authorizing: false,
  authorized: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER_NAME:
      return { ...state, name: action.name };
    case ACTIONS.SET_USER_AVATAR:
      return { ...state, avatar: action.avatar };
    case ACTIONS.USER_START_AUTHORIZING:
      return { ...state, authorizing: true };
    case ACTIONS.USER_AUTHORIZED:
      return { ...state, authorizing: false, authorized: true };
    case ACTIONS.USER_NO_EXIST:
      return { ...state, authorizing: false, authorized: false };

    default:
      return state;
  }
};

export default user;
