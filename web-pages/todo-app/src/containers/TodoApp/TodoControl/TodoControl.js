import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  toggleAddTodoPosition,
  moveCompletedTodo
} from '../../../store/actions/index';

const todoControl = (props) => {
  const changeAddTodoPositionHandler = () => {
    props.toggleAddTodoPosition();
  };

  const moveCompletedTodoHandler = () => {
    props.moveCompletedTodo();
  };

  return (
    <Fragment>
      <button
        onClick={changeAddTodoPositionHandler}>
        {props.isAddTodoDown ? "Change to add todo on start" : "Change to add todo on end"}
      </button>
      <button
        onClick={moveCompletedTodoHandler}>
        {props.isCompletedTodoDown ? "Return completed todo back" : "Move completed todo down"}
      </button>
    </Fragment>
  );
};

const mapStateToProps = state => {
  const { todos } = state;
  return {
    isAddTodoDown: todos.isAddTodoDown,
    isCompletedTodoDown: todos.isCompletedTodoDown
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAddTodoPosition: () => dispatch(toggleAddTodoPosition()),
    moveCompletedTodo: () => dispatch(moveCompletedTodo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(todoControl);

todoControl.propTypes = {
  toggleAddTodoPosition: PropTypes.func.isRequired,
  moveCompletedTodo: PropTypes.func.isRequired,
  isAddTodoDown: PropTypes.bool.isRequired,
  isCompletedTodoDown: PropTypes.bool.isRequired
};