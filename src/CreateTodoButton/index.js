import './CreateItemButton.css'
export function CreateTodoButton({setOpenModal}){
        return(
            <div className="create-new-task">
                <button
                onClick = {() =>{setOpenModal(state => !state)}}>Create new task</button>
            </div>
        )
}