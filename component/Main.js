import React, { useState } from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
      value: '',
    }
  }

  onChange(e) {
    this.setState({value: e.target.value})
  }

  add() {
    this.setState({
      todoList: this.state.todoList.concat(this.state.value)
    })
  }

  render() {
    const todoListNode = this.state.todoList.map((todo, idx) => {
      return <li key={idx}>{todo}</li>
    })

    return(
      <main>
        <p>単語リスト</p>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.onChange(e)}
        />
        <button onClick={() => this.add}>追加</button>
        <ul>
          {todoListNode}
        </ul>
      </main>
    )
  }
}

export default Main;


const TodoElement = (props) => {
  return(
    <li>
      {props.content}
    </li>
  )
}