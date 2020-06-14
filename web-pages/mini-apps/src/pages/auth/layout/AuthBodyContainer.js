import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: #2f3136;
  width: 100vw;
  height: 100vh;
`;

const authBodyContainer = ({ children }) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
);

export default authBodyContainer;