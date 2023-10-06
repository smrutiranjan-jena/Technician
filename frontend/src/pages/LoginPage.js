import { useDispatch, useSelector } from 'react-redux'
import { useState, useRef } from 'react'
import { asyncUserLogin } from '../redux/actions/userLoginActions'
import NavBar from "../component/NavBar"
import Footer from "../component/Footer"
const LoginPage = (props) => {
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const loginInfo = useSelector((state) => {
        return state.loginInfo
    })
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
        dispatch(asyncUserLogin(logInData, props))
        setUsername('')
        setPassword('')
    }
    // console.log(loginInfo)
    const redirect = () => {
        props.history.push('/register')
    }
    const showHidePassword = () => {
        if (passwordRef.current.type === 'password') {
            passwordRef.current.type = 'text'
        } else {
            passwordRef.current.type = 'password'
        }
    }
    return (
        <div>
            <NavBar />
            <div className="FormContainer">
                <i className="fa fa-sign-in" aria-hidden="true"></i>
                <form onSubmit={handleSubmit}>
                    <p style={{ color: "blue", fontSize: "20px" }}>Login</p>
                    <input type="text" placeholder="username" onChange={handleUsernameChange} /><br />
                    <input type="password" placeholder="password" onChange={handlePasswordChange} ref={passwordRef} />
                    <i className="fa fa-eye" onClick={showHidePassword}></i><br />
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