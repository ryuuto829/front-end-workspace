import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DeleteIconButton from '../DeleteIconButton/DeleteIconButton';

const StyledTodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 5px 15px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  line-height: 1.5;

  &:hover div {
    opacity: 1;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:last-child {
    border: none;
  }
`;

const todoItem = ({ children, deleted }) => (
  <StyledTodoItem>
    {children}
    <DeleteIconButton clicked={deleted} />
  </StyledTodoItem>
);

export default todoItem;

todoItem.propTypes = {
  deleted: PropTypes.func.isRequired
};