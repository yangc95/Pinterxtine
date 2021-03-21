import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PinBoardDropContainer from './pin_board_form/pin_board_drop_container';
import BoardFormContainer from './pin_board_form/board_form_container';
import PinFormContainer from './pin_board_form/board_form_container';
import NavBarContainer from './nav_bar/navbar_container';


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'pbDropdown':
      component = <PinBoardDropContainer />;
      break;
    case 'addBoard':
      component = <BoardFormContainer />;
      break;
    case 'addPin':
      component = <PinFormContainer />;
      break;
    default:
      return null;
  }


  return (modal === 'login' || modal === 'signup') ? (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  ):(
    <div className="" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  )
}

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);