import React, { useState } from 'react';

import AuthSubmitContainer from '../layout/AuthSubmitContainer';
import AuthFormContainer from '../layout/AuthFormContainer';
import InputField from '../components/InputField';
import TextButton from '../components/TextButton';
import Button from '../components/Button';

const RegisterForm = () => {
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
      <InputField
        inputValue={emailInputText}
        inputChanged={e => setEmailInputText(e.target.value)}
        inputType="email"
        label="email" />
              <InputField
        inputValue={emailInputText}
        inputChanged={e => setEmailInputText(e.target.value)}
        inputType="text"
        label="username" />
      <InputField
        inputValue={passwordInputText}
        inputChanged={e => setPasswordInputText(e.target.value)}
        inputType="password"
        label="password" />
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

export default RegisterForm;