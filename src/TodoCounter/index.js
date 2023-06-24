import React from 'react'
import { TodoContext } from '../TodoContext'
import  './TodoCounter.css'

export function TodoCounter({completed, total}){
    const { 
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)
    return (
        <>
                <h4> Hi, <span>Productive User!</span></h4>
                <h2> Your <span>tasks</span> <br/>completed {completedTodos} of {totalTodos}</h2>
        </>
    )
}