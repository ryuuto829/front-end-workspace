import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tooltip = styled.div`
opacity: 0;
top: 0;
left: 83px;
position: fixed;
z-index: 300;
width: max-content;
transition: opacity ease-in-out 0.3s;

&::before {
  content: "";
  position: absolute;
  top: 15px;
  left: -10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 10px 8px 0;
  border-color: transparent #000 transparent transparent;
}
`;

const TooltipText = styled.span`
  display: block;
  word-wrap: break-word;
  max-width: 200px;
  background-color: black;
  color: #90caf9;
  line-height: 1;
  padding: 15px;
  border-radius: 6px;
  font-size: 1rem;
`;

const buttonTooltip = props => {
  return (
    <Tooltip style={{ opacity: `${props.show ? "1" : "0"}`, top: `${props.top}px` }}>
      <TooltipText>{props.children}</TooltipText>
    </Tooltip>
  );
}

export default buttonTooltip;

buttonTooltip.propTypes = {
  show: PropTypes.string,
  top: PropTypes.number
};