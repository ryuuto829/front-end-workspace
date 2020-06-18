import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthBodyContainer from './layout/AuthBodyContainer';
import AuthContainer from './layout/AuthContainer';
import LoginForm from './containers/LoginForm';
import RegisterForm from './containers/RegisterForm';

// Test home page (delete later)
const UserHome = () => (
  <h1>Hello, thanks for authentication!</h1>
);

const GuestHome = () => (
  <h1>Just go auth!</h1>
);


const Auth = () => {
  const [authentication, setAuthentication] = useState({
    expiresIn: null,
    idToken: null,
    localId: null
  });

  let homePage = <GuestHome />;

  if (authentication.idToken) {
    homePage = <UserHome />;
  }

  return (
    <AuthBodyContainer>
      <AuthContainer>
        <Switch>
          <Route
            path="/login"
            render={props => <LoginForm {...props}
              authentication={authentication}
              setAuthentication={setAuthentication} />} />
          <Route
            path="/register"
            render={props => <RegisterForm {...props}
              authentication={authentication}
              setAuthentication={setAuthentication} />} />
          <Route path="/" exact render={() => homePage} />
        </Switch>
      </AuthContainer>
    </AuthBodyContainer>
  );
}

export default Auth;