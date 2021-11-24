import APIConsumer from '../../services/apiConsumer/apiConsumer'

const LoginPage = () => {

    const setHandleChanges = async (e) => {
        e.preventDefault()
        await APIConsumer.loginUser(JSON.stringify({email: e.target.email.value, password: e.target.password.value}))
    }

    return (
        <form className="color" onSubmit={(e)=>setHandleChanges(e)}>
        <fieldset>
            <legend>Aquí va un Login</legend>
            <div>
                <div className="float-right">
                    <label>
                        <input type='email' name='email' placeholder="Introduce aquí tu email." required />
                    </label>
                </div>
                <div>
                    <label>
                        <input type='password' name='password' placeholder="Introduce aquí tu contraseña." required />
                    </label>
                </div>
            </div>
            <button> ENTRAR </button>
        </fieldset>
        </form>
    )

}

export default LoginPage