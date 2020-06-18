import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding-left: 0;
  padding-right: 0;
  width: auto;
  border: none;
  background-color: transparent;
  color: #7289da;
  line-height: 16px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const textButton = ({ children, ...props }) => (
  <StyledButton {...props}>
    {children}
  </StyledButton>
);

export default textButton;