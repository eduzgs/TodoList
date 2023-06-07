import './NewTask.css'
export function NewTask(){
    return(
        <aside>
            <div className='task'>
                <h2>New Task</h2>
                <label htmlFor="your-task">Your task</label>
                <input id="your-task" type="text" />
            </div>
            <div className='butons'>
                <button className='add'>Add Task</button>
                <button className='cancel'>Cancel</button>
            </div>
        </aside>
    )
}