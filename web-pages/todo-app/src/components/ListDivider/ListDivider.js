import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
  width: 100%;
  padding: 5px;
  text-align: center;
  font-size: 0.7rem;
  position: relative;
  box-sizing: border-box;

  &:before {
    content: '';
    width: 100%;
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    border: 1px solid #ccc;
    z-index: -1;
  }
`;

const StyledText = styled.div`
  display: inline-block;
  background-color: white;
  padding: 0 10px;
`;

const listDivider = ({ children }) => (
  <StyledDivider>
    <StyledText>{children}</StyledText>
  </StyledDivider>
);

export default listDivider;