import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icons from '../../Icons/Icons';

const ButtonWrapper = styled.button`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  border-radius: 50%;
  outline: none;
  background-color: #333;
  color: rgba(255, 255, 255, 0.7);
  font-family: inherit;
  font-weight: 300;
  margin: 5px 10px 5px 15px; 
  padding: 12px;
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  fill: #90caf9;
  opacity: ${props => props.show ? "1" : "0"};
  transition: opacity .3s ease-in-out;

  &:hover {
    cursor: pointer;
    fill: #49aeff;
    background-color: #424242;
    opacity: 1;
  }
`;

const navigationIconButton = props => (
  <ButtonWrapper
    show={props.showedControls}
    onClick={() => console.log('da')}>
    <Icons iconType={props.iconType} />
  </ButtonWrapper>
);

export default navigationIconButton;

navigationIconButton.propTypes = {
  showedControls: PropTypes.bool,
  clicked: PropTypes.func,
  iconType: PropTypes.string
};