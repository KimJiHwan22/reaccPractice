import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
  state = {
    input: ''
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    // Form Submit 은 페이지를 새로고침을 트리거하는데
    // 이를 방지해줍니다.
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({
      input: ''
    });
  };

  render() {
    return (
      <form className="CreateForm" onSubmit={this.handleSubmit}>
        <input
          placeholder="오늘 뭐하지..?"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type="submit">추가</button>
      </form>
    );
  }
}

export default CreateForm;
