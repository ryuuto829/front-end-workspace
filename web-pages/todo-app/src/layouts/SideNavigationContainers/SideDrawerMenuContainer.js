import React from 'react';
import styled from 'styled-components';

const SideDrawerWrapper = styled.div`
  background-color: #424242;
  width: 300px;
  padding: 15px;
  box-sizing: border-box;
  z-index: 100;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -373px;
`;

const SideDrawerWrapperDisapear = styled(SideDrawerWrapper)`
  animation: .3s ease-out 0s 1 disapear;
  left: -373px;
  
  @keyframes disapear{
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }    
  }
`;

const SideDrawerWrapperShow = styled(SideDrawerWrapper)`
  animation: .3s ease-out 0s 1 slideInFromLeft;
  left: 73px;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const sideDrawerMenu = props => {
  let drawer = (
    <SideDrawerWrapperShow>
      {props.children}
    </SideDrawerWrapperShow>
  );

  if (!props.showed) {
    drawer = (
      <SideDrawerWrapperDisapear>
        {props.children}
      </SideDrawerWrapperDisapear>
    );
  }

  return (
    <React.Fragment>
      {drawer}
    </React.Fragment>
  );
};

export default sideDrawerMenu;