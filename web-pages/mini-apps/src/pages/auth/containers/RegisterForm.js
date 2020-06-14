import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import AuthSubmitContainer from '../layout/AuthSubmitContainer';
import AuthFormContainer from '../layout/AuthFormContainer';
import AuthHeader from '../components/AuthHeader';
import InputField from '../components/InputField';
import TextButton from '../components/TextButton';
import Button from '../components/Button';

const RegisterForm = () => {
  const [emailInputText, setEmailInputText] = useState('');
  const [userNameInputText, setUserNameInputText] = useState('');
  const [passwordInputText, setPasswordInputText] = useState('');

  const submitFormHandler = e => {
    e.preventDefault();
    setEmailInputText('');
    setUserNameInputText('');
    setPasswordInputText('');
  };

  return (
    <Fragment>
      <AuthHeader
        caption="Create an account" />
      <AuthFormContainer
        submited={submitFormHandler}>
        <InputField
          inputValue={emailInputText}
          inputChanged={e => setEmailInputText(e.target.value)}
          inputType="email"
          label="email" />
        <InputField
          inputValue={userNameInputText}
          inputChanged={e => setUserNameInputText(e.target.value)}
          inputType="text"
          label="username" />
        <InputField
          inputValue={passwordInputText}
          inputChanged={e => setPasswordInputText(e.target.value)}
          inputType="password"
          label="password" />
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