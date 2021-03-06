import { merge } from 'lodash';

import { 
  RECEIVE_PINS,
  RECEIVE_PIN,
} from '../../actions/pin_actions';

const pinsReducer = (state = {}, action) => {
  // debugger; 
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_PINS:
      return Object.assign({}, action.pins);
    case RECEIVE_PIN:
      return Object.assign({}, action.pin)
    default:
      return state;
  }
};

export default pinsReducer;