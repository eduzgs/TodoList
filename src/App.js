import React from "react";
import {User} from './components/User'
import {TodoCounter} from './components/TodoCounter'
import {TodoSearcher} from './components/TodoSearcher'
import {CreateItemButton} from './components/CreateItemButton'
import {NewTask} from './components/NewTask'
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import {list} from './components/arr.js';

// localStorage.setItem('TODOS_V1', JSON.stringify(list))
// localStorage.removeItem('TODOS_V1', list)
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed ;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <>
      <User />
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearcher 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}/>
      <TodoList />
        {searchedTodos.map(todo =>
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
