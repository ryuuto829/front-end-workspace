import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
} from '../../../store/actions/index';

import TodosContainer from '../../../layouts/TodosContainer/TodosContainer';
import DummyContainer from '../../../layouts/DummyContainer/DummyContainer';
import TodoList from '../../../components/TodoList/TodoList';
import TodoItem from '../../../components/TodoItem/TodoItem';
import Checkbox from '../../../components/Checkbox/Checkbox';
import ListDivider from '../../../components/ListDivider/ListDivider';

const todoList = (props) => {
  const onCompleteTodoHandler = (id) => {
    props.toggleTodo(id);
  };

  const removeTodoHandler = id => {
    props.removeTodo(id);
  };

  const createTodoList = list => {
    let todoList = null;

    if (list.length > 0) {
      todoList = list.map(id => {
        const todo = props.todoList[id];

        return (
          <TodoItem
            key={id}
            deleted={() => removeTodoHandler(id)}>
            <Checkbox
              checked={todo.completed}
              id={id}
              completed={todo.completed}
              text={todo.text}
              clicked={() => onCompleteTodoHandler(id)} />
          </TodoItem>
        );
      });
    }
    return todoList;
  }

  /**
   *  Sorting and group together ids of todos
   *  isSpliting = condition whether list should be splited or not
   *  generalTodoList = list of all todos ids
   */

  const sortTodoItems = (isSpliting, generalTodoList) => {
    if (!props.todoOrder.length) return null;
    if (isSpliting) {
      const completed = [];
      const uncompleted = [];

      generalTodoList.forEach(id => {
        const todo = props.todoList[id];
        if (todo.completed) {
          return completed.push(id);
        }
        return uncompleted.push(id);
      });
      return [uncompleted, completed];
    } else {
      return [generalTodoList];
    }
  };

  /**
   *  Display two separate lists with todos or one general list
   *  todos = array of ids [uncompleted,completed] or [general]
   */

  const groupTodoItems = (todos) => {
    let id = 0;

    if (todos) {
      return todos.map(list => {
        let divider = null;

        if (id === 1 && list.length !== 0) {
          divider = <ListDivider>Completed Todos</ListDivider>;
        }
        return (
          <Fragment key={++id}>
            {divider}
            <TodoList show={list.length !== 0} >
              {createTodoList(list)}
            </TodoList>
          </Fragment>
        );
      });
    }
    return (
      <DummyContainer>The ToDo List is empty</DummyContainer>
    );
  };

  const todos = groupTodoItems(
    sortTodoItems(
      props.isCompletedTodoDown,
      props.todoOrder)
  );

  return (
    <TodosContainer>
      {todos}
    </TodosContainer>
  );
};

const mapStateToProps = state => {
  const { todos } = state;
  return {
    todoList: todos.todoByID,
    todoOrder: todos.todoAllIDs,
    isCompletedTodoDown: todos.isCompletedTodoDown
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(todoList);

todoList.propTypes = {
  todoList: PropTypes.object.isRequired,
  todoOrder: PropTypes.array.isRequired,
  isCompletedTodoDown: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};
