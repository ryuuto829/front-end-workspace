import React, { Component, Fragment } from 'react';
import AuthContainer from '../../layouts/AuthContainer/AuthContainer';

const FORM = {
  welcome: "welcome",
  login: "login",
  register: "register"
}

class Auth extends Component {
  state = {
    currentForm: "welcome",
    loginInputText: ""
  }

  openWelcomeFormHandler = () => {
    this.setState({ currentForm: FORM.welcome });
  }

  openLoginFormHandler = () => {
    this.setState({ currentForm: FORM.login });
  }

  openRegisterFormHandler = () => {
    this.setState({ currentForm: FORM.register });
  }

  changeLoginInputText = text => {
    this.setState({ loginInputText: text });
  }

  submitLoginForm = e => {
    e.preventDefault();
  }

  render() {
    let form;

    switch (this.state.currentForm) {
      case FORM.welcome:
        form = (
          <Fragment>
            <h2>Welcome to Todo App!</h2>
            <button
              onClick={this.openLoginFormHandler}
              style={{ display: "block", padding: "10px", width: "100%" }}>LOGIN</button>
            <button
              onClick={this.openRegisterFormHandler}
              style={{ display: "block", padding: "10px", width: "100%" }}>REGISTER</button>
          </Fragment>
        );
        break;
      case FORM.login:
        form = (
          <Fragment>
            <form onSubmit={this.submitLoginForm}>
              <div style={{ display: "flex", margin: "20px 0" }}>
                <label htmlFor="name" style={{ flex: "1" }}>Login  </label>
                <input
                  onChange={e => this.changeLoginInputText(e.target.value)}
                  value={this.state.loginInputText}
                  type="text"
                  id="name"
                  style={{ flex: "2", width: "100%" }} />
              </div>
              <div style={{ display: "flex", margin: "20px 0" }}>
                <label htmlFor="password" style={{ flex: "1" }}>Password  </label>
                <input type="password" id="password" style={{ flex: "2", width: "100%" }} />
              </div>
              <div style={{ margin: "10px 0" }}>
                <button
                  style={{ padding: "10px", width: "100%" }}>SUBMIT</button>
              </div>
            </form>
            <button
              style={{ padding: "10px", width: "100%" }}
              onClick={this.openWelcomeFormHandler}>Back</button>
          </Fragment>
        );
        break;
      case FORM.register:
        form = (
          <h1>da</h1>
        );
        break;
      default:
        form = null;
    };

    return (
      <AuthContainer>
        {form}
      </AuthContainer>
    );
  }
}

export default Auth;