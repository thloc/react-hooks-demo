import React, { useState, useEffect } from 'react';

import './App.scss';
// import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';

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

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  //
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
     try {
      const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();

      const {data} = responseJSON;
      setPostList(data);
     } catch (error) {
       console.log('Failed to fetch post list ', error.message);
     }
    }

    console.log('POST list effect')
    fetchPostList();
  }, []);

  useEffect(() => console.log('TODO list effect'));

  return (
    <div className="app">
      {/* <h1>Welcome to React Hooks</h1>

      <ColorBox/> */}

      {/* <h1>React Hooks - TodoList</h1>

      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>

      <TodoList 
        todos={todoList}
        onTodoClick={handleTodoClick}/> */}


      <h1>React Hooks - PostList</h1>
      <PostList posts={postList}/>
      
    </div>
  );
}

export default App;
