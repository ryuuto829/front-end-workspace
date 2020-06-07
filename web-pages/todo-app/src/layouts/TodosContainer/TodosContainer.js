import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 20px 0;
`;

const todosContainer = ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

export default todosContainer;