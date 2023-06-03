import './TodoItem.css'
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'

export function TodoItem({text, completed, onComplete, onDelete}){
    return (
        <li className="TodoItem">
            <CompleteIcon />
            {/* <svg className ={` Icon Icon-check ${completed && "Icon-check--active"}`}  
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={onComplete}
            >
                <path fill="#00B5C4" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg> */}
            <p className= {`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <DeleteIcon />
            
            {/* <span 
            className='Icon Icon-delete'
            onClick={onDelete}>X</span> */}
        </li>
    )
}