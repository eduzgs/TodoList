import React from 'react'
import { User } from '../User'
import { TodoCounter } from '../TodoCounter'
import { TodoSearcher } from '../TodoSearcher'
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoLoading } from '../TodoLoading'
import { TodoError } from '../TodoError'
import { EmptyTodos } from '../EmptyTodos'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal'
import { TodoContext } from '../TodoContext'
function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal} = React.useContext(TodoContext)
    return (
        <>
          <User setOpenModal={setOpenModal} />
          {openModal &&
            (<Modal>
              <TodoForm />
            </Modal>)}
          <TodoCounter />
          <TodoSearcher />
              <TodoList>
                {loading && (<TodoLoading />)}
                {error && (<TodoError />)}
                {(!loading && searchedTodos.lenght === 0) && <EmptyTodos />}

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
          <CreateTodoButton setOpenModal={setOpenModal} />
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>)}
        </>
    )
}

export { AppUI }
