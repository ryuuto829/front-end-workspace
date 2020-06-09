import React from 'react';
import styled from 'styled-components';

const StyledAuthContainer = styled.div`
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  max-width: 350px;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
`;

const authContainer = ({ children }) => (
  <StyledAuthContainer>
    {children}
  </StyledAuthContainer>
);

export default authContainer;