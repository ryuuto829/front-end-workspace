import React from 'react';

import NavigationIconButton from '../components/SideNavigation/IconButton/IconButton';
import ButtonTooltip from '../components/SideNavigation/ButtonTooltip/ButtonTooltip';
import SideNavigationWrapper from '../components/Layout/SideNavigationWrapper/SideNavigationWrapper';
import SideDrawer from '../components/SideNavigation/SideDrawer/SideDrawer';
import NavigationItem from '../components/SideNavigation/NavigationItem/NavigationItem';

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
      <NavigationItem
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
      </NavigationItem>
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
        <SideNavigationWrapper>
          {buttons}
        </SideNavigationWrapper>
        {tooltip}
        <SideDrawer
          showed={this.state.showSideDrawer}
          closeDrawer={this.closeSideDrawerHandler} />
      </React.Fragment>
    );
  }
}

export default SideNavigation;