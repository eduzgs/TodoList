import  svg from './create-task.svg'
export function CreateItemButton(){
    return(
        <div className="create-new-task">
            <img src={svg} alt="create task"/>
        </div>
    )
}