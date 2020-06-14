import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

import AuthSubmitContainer from '../layout/AuthSubmitContainer';
import AuthFormContainer from '../layout/AuthFormContainer';
import AuthHeader from '../components/AuthHeader';
import InputField from '../components/InputField';
import TextButton from '../components/TextButton';
import Button from '../components/Button';

const checkValidity = input => {
  return true;
};

const AuthForm = () => {
  const [emailInput, setEmailInput] = useState({ text: '', isValid: true });
  const [passwordInput, setPasswordInput] = useState({ text: '', isValid: true });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const submitFormHandler = e => {
    e.preventDefault();

    const emailValid = checkValidity(emailInput.text);
    const passwordValid = checkValidity(passwordInput.text);

    if (!emailValid) {
      setEmailInput({ ...emailInput, isValid: false });
    }

    if (!passwordValid) {
      setPasswordInput({ ...passwordInput, isValid: false });
    }

    if (emailValid && passwordValid) {
      setSubmitSuccess(true);
    }
  };

  // Change it with actual redirect to user's page
  let redirecting = null;
  if (submitSuccess) {
    redirecting = <Redirect to="/" />;
  };

  return (
    <Fragment>
      {redirecting}
      <AuthHeader
        caption="Welcome Back!"
        description="We're so excited to see you again!" />
      <AuthFormContainer
        submited={submitFormHandler}>
        <InputField
          inputValue={emailInput.text}
          inputChanged={e => setEmailInput({ ...emailInput, text: e.target.value })}
          inputType="email"
          label="email" />
        <InputField
          inputValue={passwordInput.text}
          inputChanged={e => setPasswordInput({ ...emailInput, text: e.target.value })}
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
          <Link to="/register">
            <TextButton>Register</TextButton>
          </Link>
        </AuthSubmitContainer>
      </AuthFormContainer>
    </Fragment>
  );
};

export default AuthForm;