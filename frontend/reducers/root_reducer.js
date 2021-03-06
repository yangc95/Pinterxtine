import { combineReducers } from 'redux';

import entities from './entities/entities';
import ui from './ui/ui_reducer';
import session from './session/session_reducer';
import errors from './errors/errors_reducer';

const rootReducer = combineReducers({
  entities,
  ui,
  errors,
  session,
});

export default rootReducer;