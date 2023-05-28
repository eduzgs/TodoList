import './TodoItem.css'
export function TodoItem({text}){
    return (
        <div className="contenedor">
            <svg className = "check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#00B5C4" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg>
            {text}
            <span className='close'>X</span>
        </div>
    )
}