import { useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllUsers } from "../service"
import { Link } from "react-router-dom"
import {StyledLogin} from './styled/StyledLogin'
import Home from './Home'
import { BsXCircle } from "react-icons/bs"

const Login = ({ setUser,openLogin,setOpenLogin}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const history = useHistory()


    return (
        <>

            <StyledLogin style={{ display: openLogin ? "block" : "" }}>
                <form className="form">
                    <BsXCircle className="x-button-form" onClick={() => setOpenLogin(!openLogin)} />
                    <h2>Login</h2>

                    <label>Username:</label>
                    <input type='text' onChange={(e) => setUsername(e.target.value)} />
                    <label>Password: </label>
                    <input type='password'  onChange={(e) => setPassword(e.target.value)} />
                    <p className="error">{error}</p>
                    
                    <button onClick={(e) => {
                        e.preventDefault()
                        getAllUsers().then(res => {
                            let user = res.data.find(el => el.username === username && el.password === password)
                            if (user) {
                                setUser(user)
                                history.push('/')
                            }
                            else {
                                setError('Information not valid!')
                                setUsername('')
                                setPassword('')
                            }
                        })
                    }}>Login</button>
                  
                    <div>
                        <Link to='/register'>Not registered?</Link>
                    </div>
                </form>
            </StyledLogin>
            <Home blur={openLogin}/>

        </>
    )
}
export default Login