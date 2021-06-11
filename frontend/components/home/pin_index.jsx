import React from 'react';
import Masonry from 'react-masonry-css';

import {fetchPin} from '../../actions/pin_actions';

export default ({ pins, currentUser, session, history }) => {
  // debugger;
  const breakpoints = {
    default: 10,
    2645: 9,
    2385: 8,
    2125: 7,
    1830: 6,
    1570: 5,
    1345: 4,
    1085: 3,
    825: 2,
    565: 1 
  }

  const handlePinShow = (pinId) => {
    dispatch(fetchPin(pinId)).then(() => history.push(`/pin/${pinId}`))
  }
  // {/* <img className="pin-index-photo pin_medium" src={pins[0].photoUrl}/> */}
  // <h2 className="pin-index-title">{pins[0][title]}</h2>
  // <p className="pin-index-about">{pins[0][about]}</p>
  return (
    <Masonry 
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        {
          pins.map(pin => {
            return (
              <div className="pin-index-div" key={pin.id}>
                {/* <div> */}
                  <img className="pin-index-photo" src={pin.photoUrl} onClick={() => handlePinShow(pin.id)}/>
                  {/* <div className="pin-index-image" onClick={() => handlePinShow(pin.id)}></div> */}
                  <h2 className="pin-index-title">{pin.title}</h2>
                {/* </div> */}
                <div className="profile-button-div">
                  <button className="profile-button">
                    {pin.user_id === session ? currentUser.username.split("")[0] : "O"}
                  </button>
                  <span>{pin.user_id === session ? currentUser.username : "OtherUser"}</span>
                </div>
                {/* <p className="pin-index-about">{pin.about}</p> */}
              </div>
            )
          })
        } 
    </Masonry>
  )
}

