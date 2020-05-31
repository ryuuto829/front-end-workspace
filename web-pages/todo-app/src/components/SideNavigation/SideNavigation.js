import React from 'react';
import styled from 'styled-components';
import NavigationIconButton from './NavigationIconButton/NavigationIconButton';

const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #333;
`;

const ButtonWrapper = styled.div`
  padding: 5px 10px 5px 15px; 
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 5px solid #90caf9;
    transition: opacity ease-in-out 0.3s;
  }

  & > button {
    border-radius: 50%;
  }
`;

const ButtonActive = styled(ButtonWrapper)`
  fill: #90caf9;

  & > button {
    border-radius: 30%;
  }

  &::before {
    opacity: 1;
    top: 5px;
    height: 48px;
  }
`;

const ButtonDefault = styled(ButtonWrapper)`
  fill: rgba(255, 255, 255, 0.7);

  &:hover > button {
    fill: #90caf9;
    border-radius: 25%;
  }

  &:hover:before {
    opacity: 1;
  }

  &::before {
    opacity: 0;
    top: 13px;
    height: 32px;
  }
`;

class BottomNavigation extends React.Component {
  render() {
    return (
      <SideMenuWrapper>
        <ButtonActive>
          <NavigationIconButton iconType="today" />
        </ButtonActive>
        <ButtonDefault>
          <NavigationIconButton iconType="add" />
        </ButtonDefault>
        <ButtonDefault>
          <NavigationIconButton iconType="settings" />
        </ButtonDefault>
      </SideMenuWrapper>
    );
  }
}

export default BottomNavigation;