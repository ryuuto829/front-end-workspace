import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  width: 100%;
  background-color: transparent;
  color: inherit;
  font: inherit;
  line-height: 1;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: border-radius 0.3s ease-in, border-color 0.3s ease-in;

  &:focus {
    border-color: black;  
    border-radius: 5px;
  }
`;

const textField = ({ currentValue, changed, submitedForm }) => (
  <form
    onSubmit={submitedForm}>
    <StyledInput
      type="text"
      value={currentValue}
      onChange={changed}
      placeholder="Type a new todo .."
      maxLength="500" />
  </form>
);

export default textField;

textField.propTypes = {
  currentValue: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  submitedForm: PropTypes.func.isRequired
};