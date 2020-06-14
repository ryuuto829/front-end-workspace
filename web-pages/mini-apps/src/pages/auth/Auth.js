import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthBodyContainer from './layout/AuthBodyContainer';
import AuthContainer from './layout/AuthContainer';
import LoginForm from './containers/LoginForm';

import RegisterForm from './containers/RegisterForm';

// Test home page (delete later)
const Home = () => (
  <h1>hello</h1>
);

const auth = () => (
  <AuthBodyContainer>
    <AuthContainer>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/" exact component={Home} />
      </Switch>
    </AuthContainer>
  </AuthBodyContainer>
);

export default auth;