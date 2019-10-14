import React, { useState } from 'react';

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>

const App = () => {
    const [ todos, setTodo ] = useState([
        { text: 'First Thing' },
        { text: 'Next Thing' },
        { text: 'Third Thing' }
    ]);


    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                    />
                ))}
            </div>
        </div>
    )
}

export default App;