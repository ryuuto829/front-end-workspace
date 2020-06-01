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
  }

  &:hover:before {
    opacity: 1;
  }
`;

const NavigationItemActive = styled(NavigationItem)`
  &::before {
    opacity: 1;
    top: 5px;
    height: 48px;
  }
`;

const NavigationItemDefault = styled(NavigationItem)`
  &::before {
    top: 13px;
    height: 32px;
    opacity: 0;
  }
`;

const navigationItem = props => {
  let navItem = (
    <NavigationItemDefault>
      {props.children}
    </NavigationItemDefault>
  );

  if (props.active) {
    navItem = (
      <NavigationItemActive>
        {props.children}
      </NavigationItemActive>
    );
  }

  return (
    <React.Fragment>
      {navItem}
    </React.Fragment>
  );
};

export default navigationItem;

navigationItem.propTypes = {
  active: PropTypes.bool
};