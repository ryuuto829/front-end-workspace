import React from 'react';

import AuthContainer from './layout/AuthContainer';
import AuthWrapperContainer from './layout/AuthWrapperContainer';
import AuthForm from './containers/AuthForm';
import AuthHeader from './components/AuthHeader';

const auth = () => (
  <AuthWrapperContainer>
    <AuthContainer>
      <AuthHeader />
      <AuthForm />
    </AuthContainer>
  </AuthWrapperContainer>
);

export default auth;