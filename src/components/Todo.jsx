import React from 'react';
import CompleteTodo from './completeTodo.jsx';

const Todo = ({ todo }) => {
  return (

    <div className="todo">
      {todo.text}
      <CompleteTodo
      />
    </div>

  )
}
//asr 
export default Todo;