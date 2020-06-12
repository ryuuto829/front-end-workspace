import React from 'react';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  margin-bottom: 20px;
`;

const inputField = ({ children }) => (
  <StyledInputWrapper>
    {children}
  </StyledInputWrapper>
);

export default inputField;
