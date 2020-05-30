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
  background-color: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-family: inherit;
  font-weight: 300;
  width: 48px;

  &:hover {
    cursor: pointer;
  }
`;

const IconTitle = styled.span`
  font-size: 0.85rem;
`;

const NavigationIconButton = props => {
  return (
    <IconWrapper>
      <NavigationIcons iconType={props.iconType} />
      {/* <IconTitle>{props.title}</IconTitle> */}
    </IconWrapper>
  );
};

export default NavigationIconButton;