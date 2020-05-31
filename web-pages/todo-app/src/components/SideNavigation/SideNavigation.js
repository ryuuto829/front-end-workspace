import React from 'react';
import styled from 'styled-components';
import NavigationIconButton from './NavigationIconButton/NavigationIconButton';

const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #333;

  /** Inset Divider after first button */
  & button:first-of-type {
    margin-bottom: 15px;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.12);
      width: 100%;
    }
  }
`;

class BottomNavigation extends React.Component {
  render() {
    return (
      <SideMenuWrapper>
        <NavigationIconButton iconType="today" active />
        <NavigationIconButton iconType="add" />
        <NavigationIconButton iconType="settings" />
      </SideMenuWrapper>
    );
  }
}

export default BottomNavigation;