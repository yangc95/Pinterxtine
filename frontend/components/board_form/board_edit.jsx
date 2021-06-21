import React from 'react';

class BoardEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      user_id: ''
    };
    this.handleEditBoard = this.handleEditBoard.bind(this);
    this.handleDeleteBoard = this.handleDeleteBoard.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      // id: this.props.board.id,
      // name: this.props.board.name,
      // user_id: this.props.board.user_id
    })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleEditBoard() {
    const { editBoard, closeModal } = this.props;
    editBoard(this.state)
      .then(() => closeModal())
  }

  handleDeleteBoard() {
    const { destroyBoard, closeModal } = this.props;
    destroyBoard(this.state)
      .then(() => closeModal())
  }

  render() {
    // debugger;
    const { closeModal, board } = this.props;
    const { name } = this.state;

    return (
      <div className="board-edit-div">
        <h1 className="board-edit-header">Edit your board</h1>
        <div className="x-close edit" onClick={closeModal}>
          &times;
        </div>
{/* 
        <form className="board-edit-form">
          <label>Name</label>
          <input
            className="board-edit-name"
            type="text"
            value={name}
            onChange={this.update('name')}
            placeholder={board.name}
          />
          <button onClick={() => this.handleEditBoard()} className="submit">Done</button>
        </form> */}

        <span className="edit-delete">
          <p>Action</p>
          <button onClick={() => this.handleDeleteBoard()}>
            Delete this board
          </button>
          <p className="edit-delete-info">Delete this board and all it's Pin forever.</p>
          <p className="edit-delete-info">You can't undo this!</p>
        </span>
      </div>
    )
  }
}

export default BoardEdit;