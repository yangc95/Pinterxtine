import React from 'react';
import { fetchPin } from '../../actions/pin_actions';

class PinForm extends React.Component {
  constructor(props) {
	super(props);
    this.state = {
      title: "",
      about: "",
      photoUrl: null,
      photoFile: null,
      user_id: this.props.session,
      boards: [],
      board_id: 1,
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ photoUrl: reader.result, photoFile: file });
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  update(field) {
    return e =>
    this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    if (this.state.photoFile) {
      formData.append('pin[photo]', this.state.photoFile);
    }
    formData.append('pin[user_id]', this.state.user_id);
    formData.append('pin[title]', this.state.title);
    formData.append('pin[about]', this.state.about);
    formData.append('pin[board_id]', this.state.board_id);
    
    if (!this.state.title || !this.state.about || !this.state.photoFile) {
      console.log('Must fill all fields');
    } else {
      this.props.closeModal()
      this.props.createPin(formData)
        .then((pin) => {
          this.props.history.push(`/pin/${pin.id}`)
        });
    }
  }

  render() {
    console.log(this.state.board_id)
    const { title, about, photoUrl, photoFile, board_id } = this.state;
    const { boards } = this.props;

    if (boards) {
        this.state.boards = boards;
    }

    return (
      <div className="pin-form-div">
        <div className="x-close pinform" onClick={this.props.closeModal}>
            &times;
        </div>
        <form className="pin-form" onSubmit={this.handleSubmit}>
          <label className="pin-photo-label">
            {photoUrl ?
            <img className="pin-img" src={photoUrl} alt="Image handle"/> :
            <input 
            className= "pin-input-photo"
            type="file"
            onChange={this.handleFile}
            />}
            <div className={`pin-photo-info`}>
              <p>Drag and drop or click to upload</p>
              <p>Recommendation: Use high-quality .jpg files less than 200MB</p>
            </div>
          </label>
          <div className="pin-form-info">

            <div className="pin-form-board-save">
              <label>
                <select 
                  className="pin-input-board"
                  value={board_id}
                  onChange={this.update('board_id')}
                >
                {
                  boards.map(board => {
                    return (
                      <option 
                        key={board.id} 
                        value={board.id}>
                        {board.name}
                      </option>
                    )
                  })
                }
                </select>
              </label>
              <button className="pin-input-button">Save</button>

            </div>  

            <label >
              <input
                className="pin-input-title" 
                type="text" 
                value={title}
                onChange={this.update('title')}
                placeholder="Add your title"
              />
            </label>
            <label>
              <textarea
                className="pin-input-about"
                value={about}
                onChange={this.update('about')}
                placeholder="Tell everyone what your pin is about"
             />
            </label>
            
                
          </div>
        </form>
      </div>
    )
  }
}

export default PinForm;