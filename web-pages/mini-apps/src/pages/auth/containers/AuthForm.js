import React, { useState } from 'react';

import AuthSubmitContainer from '../layout/AuthSubmitContainer';
import AuthFormContainer from '../layout/AuthFormContainer';
import InputField from '../components/InputField';
import TextButton from '../components/TextButton';
import Button from '../components/Button';

const AuthForm = () => {
  const [emailInputText, setEmailInputText] = useState('');
  const [passwordInputText, setPasswordInputText] = useState('');

  const submitFormHandler = e => {
    e.preventDefault();
    setEmailInputText('');
    setPasswordInputText('');
  };

  return (
    <AuthFormContainer
      submited={submitFormHandler}>
      {/* BUG: if type = email, can't delete whitespaces holding backspace:
        https://github.com/facebook/react/issues/6368
        */}
      <InputField
        inputValue={emailInputText}
        inputChanged={e => setEmailInputText(e.target.value)}
        inputType="email"
        label="email" />
      <InputField
        inputValue={passwordInputText}
        inputChanged={e => setPasswordInputText(e.target.value)}
        inputType="password"
        label="password" />
      <TextButton>Forgot your password?</TextButton>
      <AuthSubmitContainer>
        <Button>Login</Button>
      </AuthSubmitContainer>
      <AuthSubmitContainer>
        <span
          style={{ fontSize: "14px", color: "#72767d", marginRight: "5px" }}>
          Need an account?
            </span>
        <TextButton>Register</TextButton>
      </AuthSubmitContainer>
    </AuthFormContainer>
  );
};

export default AuthForm;