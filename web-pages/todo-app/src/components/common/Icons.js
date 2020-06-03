import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BUTTON_TYPES = {
  add: "add",
  today: "today",
  settings: "settings",
  closeDrawer: "closeDrawer",
  delete: "delete",
};

const Icon = styled.svg`
  fill: inherit;
`;

const navigationIcons = props => {
  let icon;

  switch (props.iconType) {
    case (BUTTON_TYPES.add):
      icon = (
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
          <path d="M0 0h24v24H0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </Icon>
      );
      break;
    case (BUTTON_TYPES.today):
      icon = (
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
        </Icon>
      );
      break;
    case (BUTTON_TYPES.settings):
      icon = (
        <Icon xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" ><g><path d="M0,0h24v24H0V0z" fill="none" />
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" /></g>
        </Icon>
      );
      break;
    case (BUTTON_TYPES.closeDrawer):
      icon = (
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </Icon>
      );
      break;
    case (BUTTON_TYPES.delete):
      icon = (
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
          <path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </Icon>
      );
      break;
    default:
      icon = null;
      break;
  }

  return (
    <React.Fragment>
      {icon}
    </React.Fragment>
  );
};

export default navigationIcons;

navigationIcons.propTypes = {
  iconType: PropTypes.string.isRequired
};