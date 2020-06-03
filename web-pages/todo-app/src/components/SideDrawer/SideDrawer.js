import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SideDrawerMenuContainer from '../../layouts/SideNavigationContainers/SideDrawerMenuContainer';
import TextField from '../TextField/TextField';
import IconButton from '../IconButton/IconButton';
import SideDrawerFormContainer from '../../layouts/SideNavigationContainers/SideDrawerFormContainer';

const TopControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  /* Inset Divider */
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.12);
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0;
  padding: 10px 0;
  color: white;
  line-height: 48px;
`;

const sideDrawer = props => (
  <SideDrawerMenuContainer showed={props.showed}>
    <TopControlsWrapper>
      <Title>New ToDo List</Title>
      <IconButton iconType="closeDrawer" clicked={props.closeDrawer} dark />
    </TopControlsWrapper>
    <SideDrawerFormContainer>
      <TextField />
    </SideDrawerFormContainer>
  </SideDrawerMenuContainer>
);

export default sideDrawer;

sideDrawer.propTypes = {
  iconType: PropTypes.string,
  clicked: PropTypes.func,
  dark: PropTypes.bool
}; 