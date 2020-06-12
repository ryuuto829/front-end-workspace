import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  background-color: #7289da;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  border: none;
  outline: none;
  height: 44px;
  border-radius: 3px;
  transition: background-color .17s ease;
  font-family: inherit;

  &:hover {
    cursor: pointer;
    background-color: #677bc4;
  }
`;

const button = ({ children }) => (
  <Button>{children}</Button>
);

export default button;