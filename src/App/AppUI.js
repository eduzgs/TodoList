import React from 'react'
import {User} from '../User'
import {TodoCounter} from '../TodoCounter'
import {TodoSearcher} from '../TodoSearcher'
import {CreateItemButton} from '../CreateItemButton'
import {NewTask} from '../NewTask'
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Loading } from '../Loading'
import { TodoContext } from '../TodoContext'
export function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo} = React.useContext(TodoContext)
    return (
        <>
          <User />
          <TodoCounter />
          <TodoSearcher />
          
              <TodoList>
                {loading && (<Loading />)}
                {error && (<p>Ups!, something went wrong ...</p>)}
                {(!loading && searchedTodos.lenght === 0) && <p>Create new todos to begin!</p>}
                
                {searchedTodos.map(todo =>
                  <TodoItem
                    key = {todo.text}
                    text = {todo.text}
                    completed={todo.completed}
                    onComplete = { () => completeTodo(todo.text)}
                    onDelete ={() => deleteTodo(todo.text)}
                  />
                )}
            </TodoList>
          <CreateItemButton />
        </>
    )
}

