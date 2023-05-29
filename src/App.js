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
  return (
    <>
      <User />
      <TodoCounter completed={0} total={list.length}/>
      <TodoSearcher />
      <CreateItemButton />
      <TodoList />
        {list.map(todo =>
        <TodoItem key = {todo.text} 
        text = {todo.text}
        completed={todo.completed}
        />)}
    </>
    )
}

export default App;
