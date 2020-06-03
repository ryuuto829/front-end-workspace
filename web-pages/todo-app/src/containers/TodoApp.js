import React from 'react';

import TodoContainer from '../layouts/TodoContainers/TodoContainer';
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
      <TodoContainer>
        <TasksConstructor
          onMouseOver={this.showControlsHandler}
          onMouseLeave={this.hideControlsHandler}
          showedControls={this.state.showedControls} />
      </TodoContainer>
    );
  }
};

export default Tasks;