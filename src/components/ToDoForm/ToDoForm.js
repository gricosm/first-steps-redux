import store from "../services/redux/store"

const ToDoForm = () => {

    const handleChanges = (e) => {
        e.preventDefault() 
        console.log(e, e.target.title.value, e.target.textBlock.value)
        store.dispatch({
            type: "ADD_NEW_TASK",
            payload: {"title": e.target.title.value, "textBlock": e.target.textBlock.value}
        })
    }

    return(
        <>
        <form className="taskForm" onSubmit={(e) => handleChanges(e)}>
            <input type="text" name="title" placeholder="Nombre de la tarea..."/>
            <input type="text" name="textBlock" placeholder="Descripción de la tarea..."/>
            <button>CREAR</button>
        </form>
        </>
    )

}

export default ToDoForm