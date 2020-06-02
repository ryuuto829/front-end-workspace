import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';

const TaskItem = styled.div`
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

const taskItem = props => (
  <TaskItem>
    <input type="checkbox" />
    <label>Task # 1</label>
    <Button iconType="delete" showed={props.showedControls} />
  </TaskItem>
);

export default taskItem;