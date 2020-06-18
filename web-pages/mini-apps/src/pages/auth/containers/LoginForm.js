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

  const inputs = [
    {
      state: emailInput,
      setState: setEmailInput
    },
    {
      state: passwordInput,
      setState: setPasswordInput
    }
  ];

  /** SUCCESS LOGIN STATE */
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  /** FUNCTIONS */
  const updateValidationState = (input, setInput) => {
    setInput(prevState => ({
      ...prevState,
      isValid: input === null,
      failedValidationMessage: input
    }));
  };

  /** HANDLERS */
  const submitFormHandler = e => {
    e.preventDefault();
    setLoading(true);

    let checkSubmitValidity = true;

    for (let input of inputs) {
      const validation = checkInput(input.state.text, input.state.inputType);
      updateValidationState(validation, input.setState);
      if (validation !== null) checkSubmitValidity = false;
    }

    /** SUBMIT FORM AFTER CLIENT-SIDE VALIDATION */
    if (checkSubmitValidity) {
      const API_KEY = "AIzaSyBP35fN5kxqq_hYobER3JZKhajME9ePZIc";
      const loginConfig = {
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

      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, loginConfig)
        .then(res => {
          setLoading(true);
          return res.json();
        })
        .then(res => {
          setEmailInput({ ...emailInput, text: "" });
          setPasswordInput({ ...passwordInput, text: "" });
          setLoading(false);

          if (res.error) throw res.error;
          if (res.idToken) setSubmitSuccess(true);
        })
        .catch(err => {
          const errorMessage = err.message.toLowerCase().split('_').join(' ');

          updateValidationState(errorMessage, setEmailInput);
          updateValidationState(errorMessage, setPasswordInput);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  let submitButtonText = "Login";

  if (loading) {
    submitButtonText = <Spinner />;
  }

  // Change it with actual redirect to user's page
  let renderRedirect = null;
  if (submitSuccess) {
    renderRedirect = <Redirect to="/" />;
  };

  return (
    <Fragment>
      {renderRedirect}
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
        <AuthSubmitContainer>
          <Button>{submitButtonText}</Button>
        </AuthSubmitContainer>
      </AuthFormContainer>
      <AuthSubmitContainer>
        <TextButton>Forgot your password?</TextButton>
        <span
          style={{ fontSize: "14px", color: "#72767d", margin: "0 5px" }}>
          | Need an account?
            </span>
        <Link to="/register">
          <TextButton>Register</TextButton>
        </Link>
      </AuthSubmitContainer>
    </Fragment>
  );
};

export default AuthForm;