import logo from './logo.svg';
import React from 'react';
import './App.css';

let id = 0;

const Todo = (props) => {
    return(<li  >
            <input type="checkbox" checked = {props.todo.checked} onChange={props.onToggle} />
            <span>{props.todo.text}</span>
            <button onClick={props.deleteTodo}>delete</button>
    </li>)
}

function App() {
    const[todos, setTodos] = React.useState([]);

    function addTodo() {
        const text = prompt("Enter task to do")
        const todo = {
            id: id++,
            text,
            checked: false
          }
          setTodos([...todos, todo])
    }

    function deleteTodo(id) {
        setTodos([...todos.filter(a => a.id !== id)]);
    }

    function toggleTodo(id) {
        setTodos([...todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo)]);
    }
      
    return (
      <div>
        <h1>My TODO App</h1>
            <div>
                <span>Item count: <span>{todos.length}</span></span>
                <span>Unchecked count: <span>{todos.filter(todo => todo.checked == false).length}</span></span>
            </div>
        <button onClick={addTodo}>New TODO</button>
        <ul>
            {todos.map(todo => 
            <Todo 
            todo={todo} 
            key={todo.id}
            deleteTodo = {() => deleteTodo(todo.id)}
            onToggle = {() => toggleTodo(todo.id)} 
            />
            )}
        </ul>
      </div>
    );
  }

export default App;
