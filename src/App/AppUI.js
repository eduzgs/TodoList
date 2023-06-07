import {User} from '../User'
import {TodoCounter} from '../TodoCounter'
import {TodoSearcher} from '../TodoSearcher'
import {CreateItemButton} from '../CreateItemButton'
import {NewTask} from '../NewTask'
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
export function AppUI({completedTodos,
totalTodos,
searchValue,
setSearchValue,
searchedTodos,
completeTodo,
deleteTodo
}){
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

