import  svg from './create-task.svg'
import './CreateItemButton.css'
export function CreateItemButton(){
        return(
            <div className="create-new-task">
                <img
                src={svg}
                alt="create task"
                onClick ={(event) => {
                    alert('me clickeaste')
                    console.log(event)
                }}    
                />
                
                <p>Create new task...</p>
            </div>
        )
}