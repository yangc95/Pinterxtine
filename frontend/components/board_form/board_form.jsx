import React from 'react';

class BoardForm extends React.Component {
  constructor(props) {
	super(props);
    this.state = {
      name: "",
      user_id: this.props.session
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const board = Object.assign({}, this.state);
    this.props.createBoard({ board })
      .then(() => this.props.closeModal())
    this.setState({
      name: "",
      user_id: this.props.session
    })
  }

  update(field) {
	return e => this.setState({
	  [field]: e.currentTarget.value
	});
  }

  render () {
    const { name } = this.state;
    const { forms } = this.props;

    return (
      <div>
        <form className="board-form" onSubmit={this.handleSubmit}>
          <h1 className="board-form-h1">Create board</h1>
          <label className="board-form-label">Name
            <input 
              className="board-form-input"
              type="text"
              value={name}
              onChange={this.update('name')}
              placeholder='Like "Places to Go" or "Recipes to Make"'
            />
            {forms.name}
          </label>
          <button className="board-form-button">Create</button>
        </form>
      </div>
    )
  }
}

export default BoardForm;