import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
  padding: 20px;
  border: 2px dotted #ccc;
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;
  color: gray;
`;

const dummyContainer = ({ children }) => (
  <StyledBlock>
    {children}
  </StyledBlock>
);

export default dummyContainer;