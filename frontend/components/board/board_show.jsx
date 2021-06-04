import React from 'react';
import Masonry from 'react-masonry-css';

// import BoardShowItem from './board_show_item';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // pins: []
    };
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.history.push('/_saved')
    this.setState({ pins: null })
  }

  handlePinShow(pinId) {
    this.props.history.push(`/pin/${pinId}`)
  }

  render() {
    const { board } = this.props;
    // debugger;
    let pinNum = '';
    let pinArray = [];
    // console.log(pinArray)
    if (board.pins) {
      let pinKeys = Object.keys(board.pins);
      pinNum = pinKeys.length;
      pinKeys.forEach(key => pinArray.push(board.pins[key]));
    };
    // if (pinArray) {this.setState({pins: pinArray})}
    // console.log(pinArray)

    const breakpoints = {
    default: 4,
    1085: 3,
    825: 2,
    565: 1
    }

    return (
      <div className="board-show">
        <h1>{board.name}</h1>
        <h2>{pinNum} Pins</h2>

        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {
            pinArray.map(pin => {
              return (
                <div className="board-show-pin-index" key={pin.id}>
                  <div className="pin-index-image"></div>
                  <h2 className="pin-index-title">{pin.title}</h2>
                  <p className="pin-index-about">{pin.about}</p>
                </div>
              )
            })
          }
        </Masonry>

        <button onClick={() => this.handleBack()}>Back to Profile</button>
      </div>
    )
  }
}

export default BoardShow;