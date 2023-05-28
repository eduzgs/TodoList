import  svg from './create-task.svg'
import './CreateItemButton.css'
import {list} from './arr'
export function CreateItemButton(){
    console.log(list.length)
    if(list.lenght === 0){ /*porque no se muestra si la lista no tiene ningun item */
        return(
            <div className="create-new-task">
                <img src={svg} alt="create task"/>
                <p>Create new task...</p>
            </div>
        )
    }else {
        return <></>
    }
}