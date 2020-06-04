import React from 'react';
import styled from 'styled-components';

import TaskItem from '../TodoItem/TodoItem';

const MainContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding-top: 30px;
`;

const tasksConstructor = props => {
  return (
    <MainContainer>
      <TaskItem id="1" text="text1" />
      <TaskItem id="2" text="text2" />
      <TaskItem id="3" text="text3" />
    </MainContainer >
  );
};

export default tasksConstructor;