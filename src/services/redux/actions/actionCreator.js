import { USER_LOG_IN } from "./types"

const loginUser = (payload) => {return {
    type: USER_LOG_IN,
    payload: payload
}}

export { loginUser }