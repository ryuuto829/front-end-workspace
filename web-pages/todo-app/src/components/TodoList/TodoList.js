import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: ${props => props.show ? "block" : "none"};
`;

const todoList = ({ children, show }) => (
  <StyledList show={show}>
    {children}
  </StyledList>
);

export default todoList;

todoList.propTypes = {
  show: PropTypes.bool.isRequired
};