import React from 'react';
import styled from 'styled-components';

import TaskItem from './TaskItem/TaskItem';

const MainContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding-top: 30px;
`;

const tasksConstructor = props => {
  return (
    <MainContainer>
      <h1>Here are tasks Title</h1>
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </MainContainer >
  );
};

export default tasksConstructor;