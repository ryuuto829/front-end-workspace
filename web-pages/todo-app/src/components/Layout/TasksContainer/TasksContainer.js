import React from 'react';
import styled from 'styled-components';

const TasksWrapper = styled.div`
  margin-left: 73px;
  background-color: #212121;
  color: white;
  width: auto;
`;

const tasksContainer = props => {
  return (
    <TasksWrapper>
      {props.children}
    </TasksWrapper>
  );
};

export default tasksContainer;