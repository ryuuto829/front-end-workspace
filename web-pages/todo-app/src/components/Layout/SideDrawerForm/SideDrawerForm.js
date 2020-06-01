import React from 'react';
import styled from 'styled-components';

const SideForm = styled.div`
  margin: 20px 0;
`;

const sideDrawerForm = props => {
  return (
    <SideForm>
      {props.children}
    </SideForm>
  );
};

export default sideDrawerForm;