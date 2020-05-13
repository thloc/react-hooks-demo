import React, { useState } from 'react';

import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'ABC' },
    { id: 2, title: 'DEF' },
    { id: 3, title: 'GHI' },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id = todo.id);

    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      {/* <h1>Welcome to React Hooks</h1>

      <ColorBox/> */}

      <h1>React Hooks - TodoList</h1>

      <TodoList 
        todos={todoList}
        onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
