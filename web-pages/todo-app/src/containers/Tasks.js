import React from 'react';

import TasksContainer from '../components/Layout/TasksContainer/TasksContainer';
import TasksConstructor from '../components/TasksConstructor/TasksConstructor';

class Tasks extends React.Component {
  state = {
    showedControls: false
  };

  hideControlsHandler = () => {
    this.setState({ showedControls: false });
  };

  showControlsHandler = () => {
    console.log('over')
    this.setState({ showedControls: true });
  };

  render() {
    return (
      <TasksContainer>
        <TasksConstructor
          onMouseOver={this.showControlsHandler}
          onMouseLeave={this.hideControlsHandler}
          showedControls={this.state.showedControls} />
      </TasksContainer>
    );
  }
};

export default Tasks;