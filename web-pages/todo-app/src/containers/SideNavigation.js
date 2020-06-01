import React from 'react';
import NavigationIconButton from '../components/SideNavigation/IconButton/NavigationIconButton';
import ButtonTooltip from '../components/SideNavigation/ButtonTooltip/ButtonTooltip';
import SideNavigationWrapper from '../components/SideNavigation/SideNavigationWrapper/SideNavigationWrapper';

class SideNavigation extends React.Component {
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
      tooltip = (
        <ButtonTooltip
          show={this.state.showTooltip}
          top={this.state.top}>
          {this.state.buttons[this.state.showTooltip].title}
        </ButtonTooltip>
      );
    }

    return (
      <SideNavigationWrapper>
        {tooltip}
        {buttons}
      </SideNavigationWrapper>
    );
  }
}

export default SideNavigation;