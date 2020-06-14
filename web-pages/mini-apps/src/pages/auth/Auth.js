import React from 'react';

import AuthBodyContainer from './layout/AuthBodyContainer';
import AuthContainer from './layout/AuthContainer';
import LoginForm from './containers/LoginForm';
import AuthHeader from './components/AuthHeader';

import RegisterForm from './containers/RegisterForm';

const auth = () => (
  <AuthBodyContainer>
    <AuthContainer>
      <AuthHeader
        caption="Welcome Back!"
        description="We're so excited to see you again!" />
      <LoginForm />
      <AuthHeader
        caption="Create an account" />
      <RegisterForm />
    </AuthContainer>
  </AuthBodyContainer>
);

export default auth;