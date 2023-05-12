import  './TodoCounter.css'
export function TodoCounter({completed, total}){
    return (
        <>
                <h4> Hi, <span>Eduardo!</span></h4>
                <h2> Your <span>tasks</span></h2>
                <h2>completed {completed} of {total}</h2>
        </>
    )
}