import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';

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

  const[filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
     try {
      const paramsString = queryString.stringify(filters);
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();

      const {data, pagination} = responseJSON;
      setPostList(data);
      setPagination(pagination);
     } catch (error) {
       console.log('Failed to fetch post list ', error.message);
     }
    }

    console.log('POST list effect')
    fetchPostList();
  }, [filters]);

  useEffect(() => console.log('TODO list effect'));

  //
  const [pagination, setPagination] = useState({
    _page: 1,
    _litmit: 10,
    _totalRows: 11
  });

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage
    });
  }

  function handleFiltersChange(newFilters) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm
    });
  }

  //
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      <h1>Welcome to React Hooks</h1>
      <ColorBox/>

      <h1>React Hooks - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <TodoList 
        todos={todoList}
        onTodoClick={handleTodoClick}/>

      <h1>React Hooks - PostList</h1>
      <PostFiltersForm onSubmit={handleFiltersChange}/>
      <PostList posts={postList}/>
      <Pagination
        pagination = {pagination}
        onPageChange = {handlePageChange}/>

      <h1>React Hooks - Clock</h1>
        <button onClick={() => setShowClock(!showClock)}>Hide Clock</button>
        {showClock && <Clock />}
        <BetterClock/>
    </div>
  );
}

export default App;
