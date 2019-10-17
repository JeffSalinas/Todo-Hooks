import React, { useState } from 'react';
import Todo from './components/Todo.jsx';
import Form from './components/Form.jsx';

const App = () => {
    const [ todos, setTodos ] = useState([
        { 
            text: 'First Thing',
            isCompleted: false 
        },
        { 
            text: 'Next Thing',
            isCompleted: false  
        },
        { 
            text: 'Third Thing',
            isCompleted: false  
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }]
        console.log(temp)
        setTodos(newTodos);
    }

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
                <Form
                    addTodo={addTodo} 
                />
            </div>
        </div>
    )
};

export default App;