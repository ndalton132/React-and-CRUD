import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList'
import uuidv4 from 'uuid/dist/v4'
import Navbar from './One/Navbar/nav';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css'
//import signin from './components/signup';
import Home from './components';



const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
       <Router>
      <Navbar/>
      <Switch>
      <Route path='/signin' exact component={Home}/>
      <div className="todo">
      <Route path='/contact-us' ><TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" className="input-box"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      
      </Route>
      </div>
      </Switch>

      </Router>
      
    </>
  )
}

export default App;

//
      
   