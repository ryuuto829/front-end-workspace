import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationIcons from '../NavigationIcons/NavigationIcons';

const ButtonWrapper = styled.button`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  transition: border-radius .3s;
  outline: none;
  background-color: #424242;
  color: rgba(255, 255, 255, 0.7);
  font-family: inherit;
  font-weight: 300;
  margin: 5px 10px 5px 15px; 
  padding: 12px;
  width: 48px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }

  /** Left indicator of current btn */
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -15px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 5px solid #90caf9;
    box-sizing: inherit;
  }
`;

const ButtonActive = styled(ButtonWrapper)`
  fill: #90caf9;
  border-radius: 30%;

  &::before {
    opacity: 1;
    top: 0;
    height: 48px;
  }
`;

const ButtonDefault = styled(ButtonWrapper)`
  fill: rgba(255, 255, 255, 0.7);

  &:hover{
    fill: #90caf9;
    border-radius: 30%;
  }

  &:hover:before {
    opacity: 1;
  }

  &::before {
    opacity: 0;
    top: 8px;
    height: 32px;
    transition: opacity ease-in-out 0.3s;
  }
`;

const navigationIconButton = props => {
  let button;

  if (props.active) {
    button = (
      <ButtonActive
        onMouseLeave={props.mouseLeave}
        onMouseEnter={(e) => props.mouseOver(e, props.iconType)}
        onClick={() => props.clicked(props.iconType)}>
        <NavigationIcons iconType={props.iconType} />
      </ButtonActive>
    );
  } else {
    button = (
      <ButtonDefault
        onMouseLeave={props.mouseLeave}
        onMouseEnter={(e) => props.mouseOver(e, props.iconType)}
        onClick={() => props.clicked(props.iconType)}>
        <NavigationIcons iconType={props.iconType} />
      </ButtonDefault>
    );
  }

  return (
    <React.Fragment>
      {button}
    </React.Fragment>
  );
};

export default navigationIconButton;

navigationIconButton.propTypes = {
  clicked: PropTypes.func,
  mouseLeave: PropTypes.func,
  mouseOver: PropTypes.func,
  iconType: PropTypes.string,
  active: PropTypes.bool,
  name: PropTypes.string
};