import './TodoSearcher.css'
export function TodoSearcher (){
    return (
        <div className="TodoSearch">
            <p>Search task</p>
            <input placeholder="Search"></input>
            <p>To Do</p>
        </div>
    )
}