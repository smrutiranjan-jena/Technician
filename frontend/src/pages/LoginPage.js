import { useDispatch, useSelector } from 'react-redux'
import { useState, useRef } from 'react'
import { asyncUserLogin } from '../redux/actions/userLoginActions'
import NavBar from "../component/NavBar"
import Footer from "../component/Footer"
import validator from 'validator'
const LoginPage = (props) => {
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const loginInfo = useSelector((state) => {
        return state.loginInfo
    })
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const runValidation = () => {
        if (username.trim().length === 0) {
            errors.username = "username can't be blank"
        }
        if (password.trim().length === 0) {
            errors.password = "password can't be blank and at least 8 character long"
        } else if (!validator.isStrongPassword(password)) {
            errors.password = 'the password should be 8 characters long at least 1 capital letter 1 lowercase letter 1 special character/symbol(@/-*) 1 numeric character'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormError({})
            const logInData = {
                username: username,
                password: password
            }
            dispatch(asyncUserLogin(logInData, props))
            const reset = () => {
                setUsername('')
                setPassword('')
            }
            reset()
        } else {
            console.log(formError)
            setFormError(errors)
        }

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
                    {formError.username && <span style={{ color: "red", fontSize: "13px" }}>{formError.username}</span>}
                    <input type="password" placeholder="password" onChange={handlePasswordChange} ref={passwordRef} />
                    <i className="fa fa-eye" onClick={showHidePassword}></i><br />
                    {formError.password && <span style={{ color: "red", fontSize: "13px" }}>{formError.password}</span>}<br />
                    <input type="checkbox" /><span className='f-text'> I agree to the terms & conditions</span><br />
                    <input type="submit" className='btn' value="Login" />
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