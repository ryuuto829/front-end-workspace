import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputFieldContainer from '../layout/InputFieldContainer';

const StyledLabel = styled.label`
  display: block;
  font-size: 12px;
  color: #8e9297;
  margin-bottom: 8px;
  text-align: left;
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-weight: 400;
  padding: 10px;
  font-size: 16px;
  height: 40px;
  width: 100%;
  outline: none;
  box-sizing: border-box;
  border-radius: 3px;
  color: #dcddde;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: border-color .2s ease-in-out;

  &:focus {
    border-color: #7289da;
  }
`;

const inputField = ({ label, inputType, inputValue, inputChanged }) => (
  <InputFieldContainer>
    <StyledLabel
      htmlFor={label}>
      {label.toUpperCase()}
    </StyledLabel>
    <StyledInput
      value={inputValue}
      onChange={inputChanged}
      autocomplete="false"
      type={inputType}
      id={label} />
  </InputFieldContainer>
);

export default inputField;

inputField.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputChanged: PropTypes.func.isRequired
};