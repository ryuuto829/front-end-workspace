import React, { useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import TextButton from '../components/TextButton';

const HomePage = ({ auth, setAuthentication }) => {
  const [logout, setLogout] = useState(false);
  const [goLogin, setGoLogin] = useState(false);

  const logoutHandler = () => {
    setLogout(true);
  };

  const toLoginPageHandler = () => {
    setGoLogin(true);
  };

  if (logout) {
    localStorage.removeItem('authData');
    setAuthentication({ auth });
  }

  let renderRedirect = null;
  if (goLogin || logout) {
    renderRedirect = <Redirect to="/login" />;
  }

  let homePage = (
    <Fragment>
      <h1>Just go auth!</h1>
      <TextButton
        onClick={toLoginPageHandler}>Go to Login page</TextButton>
    </Fragment>
  );

  if (auth) {
    homePage = (
      <Fragment>
        <h1>Hello, thanks for authentication!</h1>
        <TextButton
          onClick={logoutHandler}>Logout</TextButton>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {renderRedirect}
      {homePage}
    </Fragment >
  );
};

export default HomePage;