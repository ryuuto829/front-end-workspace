import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthBodyContainer from './layout/AuthBodyContainer';
import AuthContainer from './layout/AuthContainer';
import LoginForm from './containers/LoginForm';
import RegisterForm from './containers/RegisterForm';
import HomePage from './containers/HomePage';

const Auth = () => {
  const [authentication, setAuthentication] = useState(JSON.parse(localStorage.getItem("authData")) || {
    expiresIn: null,
    idToken: null,
    localId: null
  });

  useEffect(() => {
    localStorage.setItem('authData', JSON.stringify(authentication));
  }, [authentication]);

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
          <Route
            path="/"
            exact
            render={props => <HomePage {...props}
              auth={authentication.idToken}
              setAuthentication={setAuthentication} />} />
        </Switch>
      </AuthContainer>
    </AuthBodyContainer>
  );
};

export default Auth;