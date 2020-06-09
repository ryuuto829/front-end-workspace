import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTopNavigation = styled.ul`
  display: flex;
  flex-flow: row;
  background-color: #333;
  color: white;
`;

const StyledNavigationItem = styled.li`
  list-style: none;
  padding: 10px 15px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: rgba(255,255,255, 0.1);
  }
`;

const topNavigation = () => {
  return (
    <StyledTopNavigation>
      <StyledLink to='/'>
        <StyledNavigationItem>HOME</StyledNavigationItem>
      </StyledLink>
      <StyledLink to='/todo'>
        <StyledNavigationItem>TODO APP</StyledNavigationItem>
      </StyledLink>
      <StyledLink to='test'>
        <StyledNavigationItem>TEST PAGE</StyledNavigationItem>
      </StyledLink>
    </StyledTopNavigation>
  );
};

export default topNavigation;