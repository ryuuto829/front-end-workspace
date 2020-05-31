import React from 'react';
import styled from 'styled-components';
import NavigationIconButton from './NavigationIconButton/NavigationIconButton';
import ButtonTooltip from './ButtonTooltip/ButtonTooltip';

const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #333;
  overflow-y: scroll;
  /* overflow-x: hidden; */
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

class BottomNavigation extends React.Component {
  state = {
    buttons: {
      today: {
        id: "today",
        title: "Todays tasks"
      },
      add: {
        id: "add",
        title: "Add a new Task"
      },
      settings: {
        id: "settings",
        title: "Settings"
      },
    },
    active: "today",
    showTooltip: null,
    top: null
  }

  iconButtonClickHandler = buttonName => {
    this.setState({
      active: buttonName
    });
  }

  onButtonOverHandler = (e, text) => {
    if (e.target) {
      this.setState({ showTooltip: text, top: e.target.getBoundingClientRect().top });
    }
  }

  onButtonLeaveHandler = () => {
    this.setState({ showTooltip: null });
  }

  render() {
    const buttonsList = [];
    let tooltip = null;

    for (let button in this.state.buttons) {
      buttonsList.push(button);
    }

    const buttons = buttonsList.map(button => (
      <NavigationIconButton
        key={this.state.buttons[button].id}
        iconType={this.state.buttons[button].id}
        name={this.state.buttons[button].title}
        active={this.state.active === button}
        clicked={this.iconButtonClickHandler}
        mouseLeave={this.onButtonLeaveHandler}
        mouseOver={this.onButtonOverHandler} />
    ));

    if (this.state.showTooltip) {
      tooltip = <ButtonTooltip show={this.state.showTooltip} top={this.state.top}>{this.state.showTooltip}</ButtonTooltip>;
    }

    return (
      <SideMenuWrapper>
        {tooltip}
        {buttons}
      </SideMenuWrapper>
    );
  }
}

export default BottomNavigation;