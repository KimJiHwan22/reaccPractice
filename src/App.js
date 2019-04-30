import React, { Component } from 'react';
import TodoList from './components/TodoList';
import CreateForm from './components/CreateForm';

import './App.css';

class App extends Component {
  // 유동적인 값이지만 따로 렌더링 되지 않는 경우엔 이렇게 멤버 변수로 설정가능합니다.
  id = 3;

  // state 의 초깃값을 설정합니다.
  state = {
    // 그 초깃값은 배열 형태로 넣어주었고, 내부에 기본 값들을 넣어주었습니다.
    todos: [
      {
        id: 0,
        text: '앵귤러 배우고',
        checked: true
      },
      {
        id: 1,
        text: '리액트 배우고',
        checked: false
      },
      {
        id: 2,
        text: '뷰 배우자',
        checked: false
      }
    ]
  };

  handleCreate = text => {
    // 데이터 만들고
    const todoData = {
      id: this.id++,
      text,
      checked: false
    };
    // 데이터를 등록
    this.setState({
      todos: this.state.todos.concat(todoData)
    });
  };

  handleCheck = id => {
    // map 을 통하여 원하는 데이터만 바꿔줍니다.
    const nextTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    this.setState({
      todos: nextTodos
    });
  };

  handleRemove = id => {
    // filter 를 통하여 불필요한 데이터는 필터링합니다.
    const nextTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: nextTodos
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까?</h1>
        </div>
        <CreateForm onSubmit={this.handleCreate} />
        <div className="white-box">
          <TodoList
            todos={this.state.todos}
            onCheck={this.handleCheck}
            onRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
