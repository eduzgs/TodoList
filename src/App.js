import React from "react";
import {User} from './components/User'
import {TodoCounter} from './components/TodoCounter'
import {TodoSearcher} from './components/TodoSearcher'
import {CreateItemButton} from './components/CreateItemButton'
import {NewTask} from './components/NewTask'
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import {list} from './components/arr.js';



function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const [todos, setTodos] = React.useState(list)
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  const searchTodo = todos.filter(todo => {
    const todoSearchText = todo.text.toLocaleLowerCase()
    const todoSearchValue = searchValue.toLocaleLowerCase()
    return todoSearchText.includes(todoSearchValue)
  })
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  } 
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  } 
  return (
    <>
      <User />
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearcher 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}/>
      <TodoList />
        {searchTodo.map(todo =>
        <TodoItem key = {todo.text} 
        text = {todo.text}
        completed={todo.completed}
        onComplete = { () => completeTodo(todo.text)}
        onDelete ={() => deleteTodo(todo.text)}
        />)}
      <CreateItemButton />
    </>
    )
}

export default App;
