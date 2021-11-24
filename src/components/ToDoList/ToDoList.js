import store from "../../services/redux/store"
import { useEffect, useState } from "react"

const ToDoList = () => {

    const [task, setTask] = useState([])

    useEffect(() => {
        setTask(store.getState().task)
        store.subscribe(()=>{
            setTask(store.getState().task)
        })
    }, [])

    

    return(
        <>
        <h1>LISTA DE TAREAS</h1>
            {task.map((task) => 
                <>
                    <h3>{task.title}</h3>
                    <span>{task.textBlock}</span>
                </>
            )}
        </>
    )
}

export default ToDoList