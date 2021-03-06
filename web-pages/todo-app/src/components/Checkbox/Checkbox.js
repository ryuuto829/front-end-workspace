import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    color: ${props => props.inputCompleted ? "gray" : "black"};
    text-decoration: ${props => props.inputCompleted ? "line-through" : "none"};
  }

  &+label::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25rem;
    margin-right: 0.7rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    background-color: white;
  }

  &:not(:disabled):not(:checked)+label:hover::before {
    border-color: #b3d7ff;
  }

  &:not(:disabled):active+label::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }

  &:focus+label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:focus:not(:checked)+label::before {
    border-color: #80bdff;
  }

  &:checked+label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }

  &:disabled+label::before {
    background-color: #e9ecef;
  }
`;

const checkbox = ({ id, text, clicked, completed, checked }) => (
  <Fragment>
    <StyledCheckbox
      defaultChecked={checked}
      inputCompleted={completed}
      type="checkbox" id={id}
      onClick={clicked} />
    <label htmlFor={id}>{text}</label>
  </Fragment>
);

export default checkbox;

checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
};