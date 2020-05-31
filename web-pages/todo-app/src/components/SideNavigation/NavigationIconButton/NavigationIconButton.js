import React from 'react';
import styled from 'styled-components';
import NavigationIcons from '../NavigationIcons/NavigationIcons';

const IconWrapper = styled.button`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-family: inherit;
  font-weight: 300;
  width: 48px;
  background-color: #424242;
  transition: border-radius .3s;

  &:hover {
    cursor: pointer;
  }
`;

const NavigationIconButton = props => {
  return (
    <IconWrapper>
      <NavigationIcons iconType={props.iconType} />
    </IconWrapper>
  );
};

export default NavigationIconButton;