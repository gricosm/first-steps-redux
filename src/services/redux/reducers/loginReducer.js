import {USER_LOG_IN, USER_LOG_OUT} from '../actions/types'

const loginInitialState = null

const loginReducer = (token = loginInitialState, action) => {
    switch(action.type){
        case USER_LOG_IN:
            return action.payload

        case USER_LOG_OUT:
            return false

        default: {
            return token
        }
    }
}

export default loginReducer;