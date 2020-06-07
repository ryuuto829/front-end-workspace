import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.div`
  opacity: 0;
  transition: opacity .3s ease-in-out;
  fill: gray;
  display: flex;
  align-items: center;

  & svg {
    padding: 5px;
  }
  
  &:hover {
    cursor: pointer;
  }

  &:hover svg {
    background-color: #d3d3d3;
    border-radius: 50%;
  }
`;

const deleteIconButton = ({ clicked }) => (
  <StyledButton onClick={clicked}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  </StyledButton>
);

export default deleteIconButton;

deleteIconButton.propTypes = {
  clicked: PropTypes.func.isRequired
};