import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

function TodoForm(){
    const {addTodo, setOpenModal} = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    const onKeyPress = (event) => {
        if(event.keyCode === 13){
            onSubmit()
        }
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return(
        <aside  transition-style="in:wipe:left">
            <form onSubmit={onSubmit} className='task'>
                <h2>Add your New Task</h2>
                <input id="your-task" type="text" value={newTodoValue} onChange={onChange} required />
            <div className='butons'>
                <button onKeyDown = {onKeyPress} type = "submit" className='add'>Add Task</button>
                <button type = "button" onClick = {onCancel}  className='cancel'>Cancel</button>
            </div>
            </form>
        </aside>
    )
}

export { TodoForm }