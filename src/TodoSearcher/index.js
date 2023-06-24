import React from 'react';
import './TodoSearcher.css'
import { TodoContext } from '../TodoContext';
export function TodoSearcher (){
    const { 
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext)
    return (
        <div className="TodoSearch">
            <p>Search task</p>
            <input placeholder="Terminar el curso de react"
            value={searchValue}
            onChange={(event)=> {
                setSearchValue(event.target.value);
            }}
            />
            <p>To Do</p>
        </div>
    )
}