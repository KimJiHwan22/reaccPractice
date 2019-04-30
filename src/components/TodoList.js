import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { todos, onCheck, onRemove } = this.props;
    const todoList = todos.map(todo => (
      <TodoItem
        id={todo.id}
        key={todo.id}
        checked={todo.checked}
        text={todo.text}
        onCheck={onCheck}
        onRemove={onRemove}
      />
    ));
    // Fragment 는, JSX 를 감싸고 싶은데 따로 DOM 엘리먼트를 만들고싶지 않을 때 사용합니다.

    return <Fragment>{todoList}</Fragment>;
  }
}

export default TodoList;
