import React from 'react';

const Landing = () => {
  let landingImage = <div className="landing-imgs">
    <div className="one"></div>
    <div className="two"></div>
    <div className="three"></div>
    <div className="four"></div>
    <div className="five"></div>
    <div className="six"></div>
    <div className="seven"></div>
    <div className="eight"></div>
    <div className="nine"></div>
    <div className="ten"></div>
    <div className="eleven"></div>
    <div className="twelve"></div>
    <div className="thirteen"></div>
    <div className="fourteen"></div>
    <div className="fifteen"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div className="sixteen"></div>
  </div>;

  return (
    <div className="landing">
        <div className="landing-header">
          <div className="landing-title">
            <h1>Get your next</h1>
            <ul className="idea-module">
              <li>travel idea</li>
            </ul>
          </div>
          {landingImage}
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Landing;
