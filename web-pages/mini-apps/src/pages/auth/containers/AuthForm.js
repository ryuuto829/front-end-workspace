import React, { Component } from 'react';

import AuthSubmitContainer from '../layout/AuthSubmitContainer';
import AuthFormContainer from '../layout/AuthFormContainer';
import InputField from '../components/InputField';
import TextButton from '../components/TextButton';
import Button from '../components/Button';

class authForm extends Component {
  state = {
    emailInputText: '',
    passwordInputText: ''
  }

  emailInputTextHandler = text => {
    this.setState({ emailInputText: text })
  }

  passwordInputTextHandler = text => {
    this.setState({ passwordInputText: text })
  }

  submitFormHandler = e => {
    e.preventDefault();
  }

  render() {
    return (
      <AuthFormContainer
        submited={this.submitFormHandler}>
        <InputField
          inputValue={this.state.emailInputText}
          inputChanged={e => this.emailInputTextHandler(e.target.value)}
          inputType="text"
          label="email" />
        <InputField
          inputValue={this.state.passwordInputText}
          inputChanged={e => this.passwordInputTextHandler(e.target.value)}
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
  }
}

export default authForm;