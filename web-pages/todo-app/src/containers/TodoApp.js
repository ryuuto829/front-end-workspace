import React from 'react';
import { connect } from 'react-redux';

import TodoContainer from '../layouts/TodoContainers/TodoContainer';
import TodoList from '../components/TodoList/TodoList';

class Tasks extends React.Component {
  state = {
    showedControls: false,
    input: ''
  };

  hideControlsHandler = () => {
    this.setState({ showedControls: false });
  };

  showControlsHandler = () => {
    console.log('over')
    this.setState({ showedControls: true });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.addTodo(this.state.input)

    // sets state back to empty string
    this.setState({ input: '' })
  }

  render() {
    return (
      <TodoContainer>
        <TodoList
          onMouseOver={this.showControlsHandler}
          onMouseLeave={this.hideControlsHandler}
          showedControls={this.state.showedControls} />
      </TodoContainer>
    );
  }
};

export default connect()(Tasks);