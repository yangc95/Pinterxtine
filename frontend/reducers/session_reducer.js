import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null
});

export default (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return nullUser;
    default:
      return state;
  }
};
