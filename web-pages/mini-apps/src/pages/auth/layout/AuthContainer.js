import React from 'react';
import styled from 'styled-components';

const StyledAuthContainer = styled.div`
  font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  margin: auto;
`;

const StyledContainer = styled.div`
  padding: 32px;
  width: 404px;
  background-color: #36393f;
  border-radius: 5px;
  color: #8e9297;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
`;

const authContainer = ({ children }) => (
  <StyledAuthContainer>
    <StyledContainer>
      {children}
    </StyledContainer>
  </StyledAuthContainer>
);

export default authContainer;