import React from 'react';
import styled from 'styled-components';

const TextFieldInput = styled.input`
  width: 100%;
  font: inherit;
  border: none;
  outline: none;
  color: rgba(255,255,255,0.7);
  border-bottom: 1px solid rgba(255,255,255,0.7);
  background-color: #424242;
  padding: 10px 15px;
  box-sizing: border-box;


  &:focus {
    color: white;
    background-color: #333333;
    border-bottom: 1px solid #90caf9;
  }

  &::placeholder {
    color: rgba(255,255,255,0.7);
  }
`;

const textField = props => {
  return (
    <TextFieldInput type="text" spellCheck="false" placeholder="Type new list name .." />
  );
};

export default textField;