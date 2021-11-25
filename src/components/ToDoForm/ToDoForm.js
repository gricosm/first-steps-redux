import store from "../../services/redux/store"
import {loginUser} from "../../services/redux/actions/actionCreator"

const ToDoForm = () => {

    const handleChanges = (e) => {
        
        e.preventDefault() 

        store.dispatch(loginUser({"title": e.target.title.value, "textBlock": e.target.textBlock.value}))
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