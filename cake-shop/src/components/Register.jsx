import { useState ,useEffect} from "react"
import { getAllUsers, postUser } from "../service"
import { useHistory } from "react-router-dom"


const Register= () => {
const[username, setUsername]= useState('')
const[password, setPassword]= useState('')
const[email,setEmail] =  useState('')
const [users, setUsers] = useState([])

const [error, setError] = useState('')
const history = useHistory()

useEffect(() => {
    getAllUsers().then(res => setUsers(res.data))
}, [])

let regExLetters = /[a-zA-Z]/
let regExNumbers = /[0-9]/
let regExEmail = /\S+@\S+\.\S+/

const isValid = ()=> username.length >= 4
                    &&
                     password.length >= 8 
                    &&
                    regExEmail.test(email)
                    && 
                    regExNumbers.test(password)
                    && 
                    regExLetters.test(password)
                    

const displayError = () => {
if (username.length < 4) { setError('Username is too short') }
if (users.map(user => user.username).includes(username)) { setError('Username is taken') }
if (!regExEmail.test(email)) { setError('Email is invalid') }
if (users.map(user => user.email).includes(email)) { setError('Email is already registered') }
if (password.length < 8) { setError('Password is too short') }
if (!regExLetters.test(password)) { setError('Password must contain at least one letter') }
if (!regExNumbers.test(password)) { setError('Password must contain a least one number') }
}

    return (
        <>
        <h2>Register</h2>
        <div>
        <label>Username: </label>
        <input value = {username} type= 'text' onChange = {(e)=>setUsername(e.target.value)}/>
        </div>
        <div>
        <label>Password: </label>
        <input value = {password} type= 'password' onChange = {(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
        <label>Email: </label>
        <input  value = {email} type= 'text' onChange = {(e)=>setEmail(e.target.value)}/>
        </div>
        

        <button onClick= {()=>{
            if(!isValid()){
                displayError()
                return
            }
            getAllUsers().then(res => {
                if(!res.data.some(user => user.username === username || user.email === email)){
                    postUser(username,email,password).then(res => {
                        history.push('/login')
                    })
                }
                else{
                    displayError()
                    setUsername('')
                    setEmail('')
                    setPassword('')
                }
            })
       
        }}>Submit</button>
         <h4>{error}</h4>
        </>
    )
}
export default Register