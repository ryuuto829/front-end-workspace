import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavigationItem = styled.div`
  position: relative;
  
  /** Left indicator of current btn */
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 5px solid #90caf9;
    box-sizing: border-box;
    transition: opacity ease-in-out 0.3s;
    opacity: ${props => props.active ? "1" : "0"};
    top: ${props => props.active ? "5px" : "13px"};
    height: ${props => props.active ? "48px" : "32px"};
  }

  &:hover:before {
    opacity: 1;
  }
`;

const navigationItem = props => (
  <NavigationItem active={props.active}>
    {props.children}
  </NavigationItem>
);

export default navigationItem;

navigationItem.propTypes = {
  active: PropTypes.bool
};