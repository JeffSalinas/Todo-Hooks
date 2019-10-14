import React, { useState } from 'react';
import Todo from './components/Todo.jsx';
import Form from './components/Form.jsx';

const App = () => {
    const [ todos, setTodo ] = useState([
        { text: 'First Thing' },
        { text: 'Next Thing' },
        { text: 'Third Thing' }
    ]);

    return (
        <div className="app">
            <Form
                addTodo={setTodo}
            />
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