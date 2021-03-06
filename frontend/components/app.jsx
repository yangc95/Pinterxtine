import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import NavbarContainer from './nav_bar/navbar_container';
import Landing from './landing/landing';
import HomePageContainer from './home/home_container';
import ProfileContainer from './profile/profile_container';
import BoardShowContainer from './board/board_show_container';
import PinShowContainer from './pin/pin_show_container';
import Modal from './ui/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <Modal/>
      <header>
        <NavbarContainer />
      </header>
        <Switch>
          <AuthRoute exact path="/" component={Landing} />
          <ProtectedRoute path={`/_saved`} component={ProfileContainer} />
          <ProtectedRoute exact path="/home" component={HomePageContainer} />
          <ProtectedRoute path="/board" component={BoardShowContainer} />
          <ProtectedRoute path="/pin" component={PinShowContainer} />
        </Switch>
    </div>
  )
};

export default App;