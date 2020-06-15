import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

import AuthSubmitContainer from '../layout/AuthSubmitContainer';
import AuthFormContainer from '../layout/AuthFormContainer';
import AuthHeader from '../components/AuthHeader';
import InputField from '../components/InputField';
import TextButton from '../components/TextButton';
import Button from '../components/Button';

const checkEmailValidity = input => {
  const EMAIL_REGEX = /\S+@\S+\.\S+/; // text@text.text
  return EMAIL_REGEX.test(input);
};

const checkPasswordValidity = input => {
  const EMAIL_REGEX = /\S+@\S+\.\S+/; // text@text.text
  return EMAIL_REGEX.test(input);
};

const addFailedValidityMessage = input => {
  if (input.trim().length === 0) return "This field is required";
  return "Not well formed email address";
};

const AuthForm = () => {
  /** EMAIL INPUT STATE */
  const [emailInput, setEmailInput] = useState({
    inputType: "email",
    label: "Email",
    isRequired: true,
    text: '',
    isValid: true
  });

  /** PASSWORD INPUT STATE */
  const [passwordInput, setPasswordInput] = useState({
    inputType: "password",
    label: "Password",
    isRequired: true,
    text: '',
    isValid: true
  });

  /** SUCCESS LOGIN STATE */
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const submitFormHandler = e => {
    e.preventDefault();
    const emailValid = checkEmailValidity(emailInput.text);
    const passwordValid = checkPasswordValidity(passwordInput.text);

    setEmailInput({ ...emailInput, isValid: emailValid });
    setPasswordInput({ ...passwordInput, isValid: passwordValid });

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
          failedValidityMessage={!emailInput.isValid ? addFailedValidityMessage(emailInput.text) : null}
          isValid={emailInput.isValid}
          inputValue={emailInput.text}
          inputChanged={e => setEmailInput({ ...emailInput, text: e.target.value })}
          inputType="email"
          label="email" />
        <InputField
          isValid={passwordInput.isValid}
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