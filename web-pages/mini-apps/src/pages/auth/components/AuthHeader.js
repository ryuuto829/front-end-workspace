import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  margin: 0 0 8px 0;
  font-size: 24px;
  color: white;
  text-align: center;
`;

const StyledText = styled.p`
  font-size: 16px;
  color: #b9bbbe;
  margin: 0;
  text-align: center;
`;

const authHeader = () => (
  <Fragment>
    <StyledHeader>Welcome Back!</StyledHeader>
    <StyledText>We're so excited to see you again!</StyledText>
  </Fragment>
);

export default authHeader;