import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin: 20px 0 8px 0;
  width: 100%;

  & div:last-of-type {
    margin-bottom: 4px;
  }
`;

const authFormContainer = ({ children, submited }) => (
  <StyledForm
    onSubmit={submited}>
    {children}
  </StyledForm>
);

export default authFormContainer;