import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

import AuthSubmitContainer from '../layout/AuthSubmitContainer';
import AuthFormContainer from '../layout/AuthFormContainer';
import AuthHeader from '../components/AuthHeader';
import InputField from '../components/InputField';
import TextButton from '../components/TextButton';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import { addInputs, checkValidation, submitData } from './Authorization';

const RegisterForm = () => {
  /** EMAIL INPUT STATE */
  const [emailInput, setEmailInput] = useState({
    inputType: "email",
    label: "Email",
    isRequired: true,
    text: '',
    isValid: true,
    failedValidationMessage: null
  });

  /** USERNAME INPUT STATE */
  const [userNameInputText, setUserNameInputText] = useState({
    inputType: "text",
    label: "Username",
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
  const [loading, setLoading] = useState(false);

  /** SETUP INPUTS */
  const inputs = [];
  inputs.push(addInputs(emailInput, setEmailInput));
  inputs.push(addInputs(userNameInputText, setUserNameInputText));
  inputs.push(addInputs(passwordInput, setPasswordInput));

  /** HANDLERS */
  const submitFormHandler = e => {
    e.preventDefault();
    setLoading(true);

    const checkSubmitValidity = checkValidation(inputs);

    /** SUBMIT FORM AFTER CLIENT-SIDE VALIDATION */
    if (checkSubmitValidity) {
      submitData("register", inputs[0], inputs[2], setSubmitSuccess);
      setLoading(false);
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
        caption="Create an account" />
      <AuthFormContainer
        submited={submitFormHandler}>
        <InputField
          failedValidityMessage={emailInput.failedValidationMessage}
          isValid={emailInput.isValid}
          inputValue={emailInput.text}
          inputChanged={e => setEmailInput({ ...emailInput, text: e.target.value })}
          inputType={emailInput.inputType}
          label={emailInput.label} />
        <InputField
          failedValidityMessage={userNameInputText.failedValidationMessage}
          isValid={userNameInputText.isValid}
          inputValue={userNameInputText.text}
          inputChanged={e => setUserNameInputText({ ...userNameInputText, text: e.target.value })}
          inputType={userNameInputText.inputType}
          label={userNameInputText.label} />
        <InputField
          failedValidityMessage={passwordInput.failedValidationMessage}
          isValid={passwordInput.isValid}
          inputValue={passwordInput.text}
          inputChanged={e => setPasswordInput({ ...passwordInput, text: e.target.value })}
          inputType={passwordInput.inputType}
          label={passwordInput.label} />
        <AuthSubmitContainer>
          <Button>Continue</Button>
        </AuthSubmitContainer>
        <AuthSubmitContainer>
          <Link to="/login">
            <TextButton>Already have an account ?</TextButton>
          </Link>
        </AuthSubmitContainer>
      </AuthFormContainer>
    </Fragment>
  );
};

export default RegisterForm;