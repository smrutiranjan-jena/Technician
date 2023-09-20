import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { asyncUserLogin } from '../redux/actions/userLoginActions'
import NavBar from "../component/NavBar"
import Footer from "../component/Footer"
const LoginPage = (props) => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const logInData = {
            username: username,
            password: password
        }
        dispatch(asyncUserLogin(logInData))
        setUsername('')
        setPassword('')
    }
    const redirect = () => {
        props.history.push('/register')
    }
    return (
        <div>
            <NavBar />
            <div className="FormContainer">
                <i className="fa fa-sign-in" aria-hidden="true"></i>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" onChange={handleUsernameChange} /><br />
                    <input type="password" placeholder="password" onChange={handlePasswordChange} /><br />
                    <input type="checkbox" /><span className='f-text'> I agree to the terms & conditions</span><br />
                    <input type="submit" className='btn' value="Login" /><br />
                    <p className='ff'>New user?<span className='f-login' onClick={redirect}> Register</span></p>
                    <p className='ff'>All rights reserved.
                        Copyright (2006-2023) - Technician.com™</p>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default LoginPage