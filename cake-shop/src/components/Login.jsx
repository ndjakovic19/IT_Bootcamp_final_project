import { useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllUsers } from "../service"
import { Link } from "react-router-dom"
import StyledLogin from './styled/StyledLogin'



const Login = ({setUser }) => {
    
const[username, setUsername]= useState('')
const[password, setPassword]= useState('')

const history = useHistory()


    return (
        <>

        <StyledLogin>
        <form className="form">
        <h2>Login</h2>
        
        <label htmlFor = "username">Username: </label>
        <input type= 'text' name = "username" onChange = {(e)=>setUsername(e.target.value)}/>
        <label htmlFor = "email">Password: </label>
        <input type= 'password' name = "email" onChange = {(e)=>setPassword(e.target.value)}/>

        <button  onClick= {()=> {
            getAllUsers().then(res =>{
                let user = res.data.find(el=> el.username === username && el.password === password )
                if(user){
                    setUser(user)
                    history.push('/quotes')
                }
                else{
                    console.warn('Neispravni podaci');  
                }
            })
        }}>Login</button>

        <div>
            <Link to='/register'>Not registered?</Link>
        </div>
        </form>
        </StyledLogin>

        </>
    ) 
}
export default Login