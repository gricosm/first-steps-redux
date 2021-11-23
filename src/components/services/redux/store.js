import { createStore } from 'redux'

const initialState = {
    task: [  
        {"title": "Hacer la compra", "textBlock": "Tengo que ir a hacer la compra, pero siempre después de comer que si no luego compro chorradas de más."},
        {"title": "Terminar proyecto", "textBlock": "Tengo que terminar el React junto a Gustavo y Raúl."}
    ]
}

const reducer = (currentState = initialState, action) => {

    console.log('REDUCER', action)

    switch(action.type){
        case "ADD_NEW_TASK":
            return{
                ...currentState,
                task: currentState.task.concat(action.payload)
            }
    default:
        return currentState
    }
}

export default createStore(reducer)