const loginInitialState = null

const loginReducer = (token = loginInitialState, action) => {
    switch(action.type){
        case "USER_LOG_IN":
            return action.payload

        case "LOG_OUT_USER":
            return false

        default: {
            return token
        }
    }
}

export default loginReducer;