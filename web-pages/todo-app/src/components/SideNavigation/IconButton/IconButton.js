import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icons from '../../Icons/Icons';

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
  background-color: ${props => {
    if (props.light) return "#424242";
    if (props.dark) return "white";
    return "#424242";
  }};
  color: rgba(255, 255, 255, 0.7);
  font-family: inherit;
  font-weight: 300;
  margin: 5px 10px 5px 15px; 
  padding: 12px;
  width: 48px;
  box-sizing: border-box;
  fill: ${props => {
    if (props.active) {
      if (props.light) return "#90caf9";
      if (props.dark) return "#49aeff";
      return "#90caf9";
    } else {
      if (props.light) return "rgba(255, 255, 255, 0.7)";
      if (props.dark) return "#333";
      return "rgba(255, 255, 255, 0.7)";
    }
  }};
  border-radius: ${props => props.active ? "30%" : "50%"};

  &:hover {
    cursor: pointer;
    fill: ${props => {
    if (props.light) return "#90caf9";
    if (props.dark) return "#49aeff";
    return "#90caf9";
  }};
    border-radius: 30%;
  }
`;

const navigationIconButton = props => (
  <ButtonWrapper {...props}
    onMouseLeave={props.addTooltip ? props.mouseLeave : null}
    onMouseEnter={props.addTooltip ? (e) => props.mouseOver(e, props.iconType) : null}
    onClick={() => props.clicked(props.iconType)}>
    <Icons iconType={props.iconType} />
  </ButtonWrapper>
);

export default navigationIconButton;

navigationIconButton.propTypes = {
  clicked: PropTypes.func,
  mouseLeave: PropTypes.func,
  mouseOver: PropTypes.func,
  iconType: PropTypes.string,
  active: PropTypes.bool,
  name: PropTypes.string
};