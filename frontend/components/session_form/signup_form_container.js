import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  Link,
  withRouter
} from 'react-router-dom';

import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({entities, errors, session}) => {
  return {
	currentUser: entities.users[session.id],
	errors: errors.session,
	formType: 'signup',
  };
};

const mDTP = dispatch => {
  return {
	action: (user) => dispatch(signup(user)),
	otherForm: (
	  <button onClick={() => dispatch(openModal('login'))}>
		Already a member? Log in
	  </button>
	),
	closeModal: () => dispatch(closeModal()),
	clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mSTP, mDTP)(SessionForm));