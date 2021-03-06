import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  margin: 0 0 8px 0;
  font-size: 24px;
  color: white;
  text-align: center;
`;

const StyledText = styled.p`
  font-size: 16px;
  color: #b9bbbe;
  margin: 0;
  text-align: center;
`;

const authHeader = ({ caption, description = null }) => {
  let text = null
  if (description) text = <StyledText>{description}</StyledText>;
  return (
    <Fragment>
      <StyledHeader>{caption}</StyledHeader>
      {text}
    </Fragment>
  );
};

export default authHeader;

authHeader.propTypes = {
  caption: PropTypes.string.isRequired,
  description: PropTypes.string
};