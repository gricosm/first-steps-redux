const taskInitialState = [  
    {"title": "Hacer la compra", "textBlock": "Tengo que ir a hacer la compra, pero siempre después de comer que si no luego compro chorradas de más."},
    {"title": "Terminar proyecto", "textBlock": "Tengo que terminar el React junto a Gustavo y Raúl."}
]

const taskReducer = (task = taskInitialState , action) => {

    switch(action.type){
        case "ADD_NEW_TASK":
            return task.concat(action.payload)
        default:
            return task;
        }
}

export default taskReducer;