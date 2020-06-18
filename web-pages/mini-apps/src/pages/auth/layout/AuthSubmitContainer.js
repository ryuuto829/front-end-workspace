import React from 'react';
import styled from 'styled-components';

const StyledSubmitWrapper = styled.div`
  margin: 20px 0 0 0;
`;

const authSubmitContainer = ({ children }) => (
  <StyledSubmitWrapper>
    {children}
  </StyledSubmitWrapper>
);

export default authSubmitContainer;