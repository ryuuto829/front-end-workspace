import React from 'react';
import styled from 'styled-components';

const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #333;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;

  /* Hide scrollbar but still can scroll*/
  ::-webkit-scrollbar {
      width: 0px;
  }
   
  /** Inset Divider after first button */
  & button:first-of-type {
    margin-top: 20px;
    margin-bottom: 15px;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.12);
      width: 100%;
    }
  }

  & button:last-of-type {
    margin-bottom: 20px;
  }
`;

const sideNavigationWrapper = props =>{
    return (
      <SideMenuWrapper>
        {props.children}
      </SideMenuWrapper>
    );
}

export default sideNavigationWrapper;