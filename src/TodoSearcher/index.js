import React from 'react';
import './TodoSearcher.css'
export function TodoSearcher ({searchValue, setSearchValue}){
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