import React from 'react';
import styled from 'styled-components';

const StyledAuthWrapper = styled.div`
  background-color: #2f3136;
  width: 100vw;
  height: 100vh;
`;

const authWrapperContainer = ({ children }) => (
  <StyledAuthWrapper>
    {children}
  </StyledAuthWrapper>
);

export default authWrapperContainer;