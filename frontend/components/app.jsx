import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

// import NavbarContainer from './nav_bar/navbar_container';
import NavbarContainer from './nav_bar/navbar_container';
import Landing from './landing/landing';
import HomePageContainer from './home/home_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  debugger;
  return (
    <div>
      {/* <header>
        <Link to="/" className="header-link">
          <h1>Bench BnB</h1>
        </Link>
        <GreetingContainer />
      </header> */}
      <NavbarContainer />
      <Landing /> :
      <Switch>
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/home" component={HomePageContainer} />
        {/* <ProtectedRoute exact path="" component={Container} /> */}
        {/* <Route path="/" component={Landing} /> */}
      </Switch>
    </div>
  )
};

export default App;