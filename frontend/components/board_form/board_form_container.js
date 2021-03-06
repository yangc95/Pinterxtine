import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchBoards, createBoard } from '../../actions/board_actions';

import BoardForm from './board_form';

const mSTP = ({ session, errors: { forms } }) => {
  return {
    session: session.id,
    forms
  };
};

const mDTP = dispatch => {
	return {
    fetchBoards: userId => dispatch(fetchBoards(userId)),
    createBoard: board => dispatch(createBoard(board)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
	};
};

export default withRouter(connect(mSTP, mDTP)(BoardForm));