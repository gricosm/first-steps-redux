import store from "../redux/store"

export const APIConsumer = {

    loginUser: async (data) =>{
        try{
            let result = await fetch('http://localhost:0420/user/login',{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: data
            })

            result = await result.json()

            store.dispatch({
                type: "USER_LOG_IN",
                payload: result.data
            })

        } catch(data){
            console.log(data)
        }
     }
}

export default APIConsumer;