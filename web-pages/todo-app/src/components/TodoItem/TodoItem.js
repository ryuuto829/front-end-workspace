import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox/Checkbox';

const TodoItem = styled.div`
  background-color: #333;
  padding: 20px;
  display: flex;
  align-items: center;
  text-align: left;
  position: relative;
  margin: 10px 0;
  line-height: 1.3;
  position: relative;
`;

const todoItem = props => (
  <TodoItem>
    <Checkbox id={props.id} text={props.text} />
  </TodoItem>
);

export default todoItem;

todoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};