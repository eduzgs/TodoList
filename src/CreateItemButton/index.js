import './CreateItemButton.css'
export function CreateItemButton({setOpenModal}){
        return(
            <div className="create-new-task">
                <button
                onclick = {() => {setOpenModal(state => !state)}}>Create new task</button>
            </div>
        )
}