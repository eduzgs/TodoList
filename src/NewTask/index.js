import React from 'react'
import { TodoContext } from '../TodoContext'
import './NewTask.css'

function NewTask(){
    const {addTodo, setOpenModal} = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return(
        <aside >
            <form onSubmit={onSubmit} className='task'>
                <h2>Add your New Task</h2>
                <label htmlFor="your-task">Your task</label>
                <input id="your-task" type="text" value={newTodoValue} onChange={onChange}/>
            <div className='butons'>
                <button type = "submit" className='add'>Add Task</button>
                <button type = "button" onClick = {onCancel}  className='cancel'>Cancel</button>
            </div>
            </form>
        </aside>
    )
}

export { NewTask }