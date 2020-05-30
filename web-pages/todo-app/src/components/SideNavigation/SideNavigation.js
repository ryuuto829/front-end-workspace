import React from 'react';
import styled from 'styled-components';
import NavigationIconButton from './NavigationIconButton/NavigationIconButton';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #333;
`;

class BottomNavigation extends React.Component {
  render() {
    return (
      <ButtonWrapper>
        <NavigationIconButton title="Task List" iconType="home" />
        <NavigationIconButton title="Add Task" iconType="add" />
        <NavigationIconButton title="Settings" iconType="settings" />
      </ButtonWrapper>
    );
  }
}

export default BottomNavigation;