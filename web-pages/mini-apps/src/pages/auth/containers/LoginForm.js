import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

import AuthSubmitContainer from '../layout/AuthSubmitContainer';
import AuthFormContainer from '../layout/AuthFormContainer';
import AuthHeader from '../components/AuthHeader';
import InputField from '../components/InputField';
import TextButton from '../components/TextButton';
import Button from '../components/Button';
import checkInput from './Validation';
import Spinner from '../components/Spinner';

const AuthForm = () => {
  /** EMAIL INPUT STATE */
  const [emailInput, setEmailInput] = useState({
    inputType: "email",
    label: "Email",
    isRequired: true,
    text: '',
    isValid: true,
    failedValidationMessage: null
  });

  /** PASSWORD INPUT STATE */
  const [passwordInput, setPasswordInput] = useState({
    inputType: "password",
    label: "Password",
    isRequired: true,
    text: '',
    isValid: true,
    failedValidationMessage: null
  });

  /** SUCCESS LOGIN STATE */
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const submitFormHandler = e => {
    e.preventDefault();
    const emailValidation = checkInput(emailInput.text, emailInput.inputType);
    const passwordValidation = checkInput(passwordInput.text, passwordInput.inputType);

    setEmailInput(prevState => ({
      ...prevState,
      isValid: emailValidation === null,
      failedValidationMessage: emailValidation
    }));

    setPasswordInput(prevState => ({
      ...prevState,
      isValid: passwordValidation === null,
      failedValidationMessage: passwordValidation
    }));

    /** SUBMIT FORM AFTER CLIENT-SIDE VALIDATION */
    if (emailValidation === null && passwordValidation === null) {
      const API_KEY = "AIzaSyBP35fN5kxqq_hYobER3JZKhajME9ePZIc";
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailInput.text,
          password: passwordInput.text,
          returnSecureToken: true
        })
      };

      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, config)
        .then(res => {
          return res.json();
        })
        .then(res => {
          if (res.idToken) {
            setSubmitSuccess(true);
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
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
          failedValidityMessage={emailInput.failedValidationMessage}
          isValid={emailInput.isValid}
          inputValue={emailInput.text}
          inputChanged={e => setEmailInput({ ...emailInput, text: e.target.value })}
          inputType="email"
          label="email" />
        <InputField
          failedValidityMessage={passwordInput.failedValidationMessage}
          isValid={passwordInput.isValid}
          inputValue={passwordInput.text}
          inputChanged={e => setPasswordInput({ ...passwordInput, text: e.target.value })}
          inputType="password"
          label="password" />
        <TextButton>Forgot your password?</TextButton>
        <AuthSubmitContainer>
          <Button>Login<Spinner /></Button>
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