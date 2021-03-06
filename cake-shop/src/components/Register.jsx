import { useState, useEffect } from "react"
import { getAllUsers, postUser } from "../service"
import { useHistory } from "react-router-dom"
import { StyledRegister } from './styled/StyledRegister'
import { BsXCircle } from "react-icons/bs"
import Home from './Home'
const Register = ({openRegister,setOpenRegister}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])
    const[emailError,setEmailError]=useState('')
    const[passwordError,setPasswordError]=useState('')
    const[usernameError,setUsernameError]=useState('')

   
    const history = useHistory()

    useEffect(() => {
        getAllUsers().then(res => setUsers(res.data))
    }, [])

    let regExLetters = /[a-zA-Z]/
    let regExNumbers = /[0-9]/
    let regExEmail = /\S+@\S+\.\S+/

    const isValid = () => username.length >= 4
        &&
        password.length >= 8
        &&
        regExEmail.test(email)
        &&
        regExNumbers.test(password)
        &&
        regExLetters.test(password)


    const displayError = () => {
        if (username.length < 4) { setUsernameError('Username is too short')}  
        if (users.map(user => user.username).includes(username)) {setUsernameError('Username is taken')  } 
        if (!regExEmail.test(email)) {setEmailError('Email is invalid')  } 
        if (users.map(user => user.email).includes(email)) { setEmailError('Email is already registered') } 
        if (password.length < 8) { setPasswordError('Password is too short')  }
        if (!regExLetters.test(password)) { setPasswordError('Password must contain at least one letter') }  
        if (!regExNumbers.test(password)) { setPasswordError('Password must contain a least one number') 
    }} 

    return (
        <>
            <StyledRegister style={{ display: openRegister ? "block" : ""}}>

                <div className="forma">
                <BsXCircle className="x-button-form" onClick={() => setOpenRegister(!openRegister)} /> 
                    <h2>Register</h2>
                    <div>
                        <label>Username: </label>
                        <input value={username} type='text' onChange={(e) => setUsername(e.target.value)} />
                        <p className="error">{usernameError} </p>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input value={password} type='password' onChange={(e) => setPassword(e.target.value)} />
                        <p className="error">{passwordError}</p>
                      
                    </div>
                    <div>
                        <label>Email: </label>
                        <input value={email} type='text' onChange={(e) => setEmail(e.target.value)} />
                        <p className="error">{emailError}</p>
                    </div>


                    <button onClick={(e) => {
                        e.preventDefault()
                        if (!isValid()) {
                            setUsername('')
                            setEmail('')
                            setPassword('')
                            displayError()
    
                            return
                        }
                        getAllUsers().then(res => {
                            if (!res.data.some(user => user.username === username || user.email === email)) {
                                postUser(username, email, password).then(res => {
                                    history.push('/login')
                                })
                            }
                            else {
                                setUsername('')
                                setEmail('')
                                setPassword('')
                            }
                        })

                    }}>Submit</button>

                </div>
            </StyledRegister >
            <Home blur={openRegister}/>
        </>
    )
}
export default Register