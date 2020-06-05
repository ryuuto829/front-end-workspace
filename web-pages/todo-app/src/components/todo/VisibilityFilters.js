import React from 'react';
import styled from 'styled-components';

const Filter = styled.span`
  display: inline-block;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const VisibilityFilters = () => (
  <div>
    <Filter>all</Filter>
    <Filter>completed</Filter>
    <Filter>incompleted</Filter>
  </div>
);

export default VisibilityFilters;
