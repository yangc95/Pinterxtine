import { merge } from 'lodash';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../../actions/session_actions';

const nullUser = Object.freeze({
  id: null
});

export default (state = nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return nullUser;
    default:
      return state;
  }
};
