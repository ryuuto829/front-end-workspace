import React from 'react';

import SideNavigationContainer from '../layouts/SideNavigationContainers/SideNavigationContainer';
import SideNavigationItemContainer from '../layouts/SideNavigationContainers/SideNavigationItemContainer';
import NavigationIconButton from '../components/IconButton/IconButton';
import ButtonTooltip from '../components/ButtonTooltip/ButtonTooltip';
import SideDrawer from '../components/SideDrawer/SideDrawer';

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
    tooltipTopCoordinate: null,
    showSideDrawer: false,
  }

  iconButtonClickHandler = buttonName => {
    if (buttonName === "add") {
      this.setState({
        active: buttonName,
        showSideDrawer: true
      });
    } else {
      this.setState({
        active: buttonName,
        showSideDrawer: false
      });
    }
  }

  onButtonOverHandler = (e, text) => {
    if (e.target) {
      this.setState({
        showTooltip: text,
        tooltipTopCoordinate: e.target.getBoundingClientRect().top
      });
    }
  }

  onButtonLeaveHandler = () => {
    this.setState({ showTooltip: null });
  }

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  render() {
    const buttonsList = [];
    let tooltip = null;

    for (let button in this.state.buttons) {
      buttonsList.push(button);
    }

    const buttons = buttonsList.map(button => (
      <SideNavigationItemContainer
        key={this.state.buttons[button].id}
        active={this.state.active === button}>
        <NavigationIconButton
          light
          addTooltip="true"
          iconType={this.state.buttons[button].id}
          name={this.state.buttons[button].title}
          active={this.state.active === button}
          clicked={this.iconButtonClickHandler}
          mouseLeave={this.onButtonLeaveHandler}
          mouseOver={this.onButtonOverHandler} />
      </SideNavigationItemContainer>
    ));

    if (this.state.showTooltip) {
      tooltip = (
        <ButtonTooltip
          show={this.state.showTooltip}
          top={this.state.tooltipTopCoordinate}>
          {this.state.buttons[this.state.showTooltip].title}
        </ButtonTooltip>
      );
    }

    return (
      <React.Fragment>
        <SideNavigationContainer>
          {buttons}
        </SideNavigationContainer>
          {tooltip}
          <SideDrawer
            showed={this.state.showSideDrawer}
            closeDrawer={this.closeSideDrawerHandler} />
      </React.Fragment>
    );
  }
}

export default SideNavigation;