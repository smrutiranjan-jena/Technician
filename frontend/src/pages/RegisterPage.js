import '../index.css'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useRef } from 'react'
import { asyncUserRegister } from '../redux/actions/userRegisterActions'
import NavBar from "../component/NavBar"
import Footer from "../component/Footer"
const RegisterPage = (props) => {
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const registerInfo = useSelector((state) => {
        return state.registerInfo
    })
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleRoleChange = (e) => {
        setRole(e.target.value)
    }
    const runValidation = () => {
        if (username.trim().length === 0) {
            errors.username = "username can't be blank"
        }

        if (email.trim().length === 0) {
            errors.email = "email can't be blank"
        }
        else if (!validator.isEmail(email)) {
            errors.email = "invalid email id "
        }

        if (password.trim().length === 0) {
            errors.password = "password can't be blank"
        }
        else if (!validator.isStrongPassword(password)) {
            errors.password = 'the password should be 8 characters long at least 1 capital letter 1 lowercase letter 1 special character/symbol(@/-*) 1 numeric character'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormError({})
            const registeredData = {
                username: username,
                email: email,
                password: password,
                role: role
            }
            dispatch(asyncUserRegister(registeredData, props))
            const reset = () => {
                setUsername('')
                setEmail('')
                setPassword('')
                setRole('')
            }
            reset()
        } else {
            setFormError(errors)
        }
    }
    console.log(registerInfo)
    const redirect = () => {
        props.history.push('/login')
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
                <i className="fa fa-address-card"></i>
                <form onSubmit={handleSubmit}>
                    <p style={{ color: "blue", fontSize: "20px" }}>Register</p>
                    <input type="text" placeholder="username" value={username} onChange={handleUsernameChange} /><br />
                    {formError.username && <span style={{ color: "red", fontSize: "13px" }}>{formError.username}</span>}
                    <input type="text" placeholder="email" value={email} onChange={handleEmailChange} /><br />
                    {formError.email && <span style={{ color: "red", fontSize: "13px" }}>{formError.email}</span>}
                    <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} ref={passwordRef} />
                    <i className="fa fa-eye" onClick={showHidePassword}></i><br />
                    {formError.password && <span style={{ color: "red", fontSize: "13px" }}>{formError.password}</span>}<br/>
                    <select id="user" value={role} onChange={handleRoleChange}>
                        <option>who are you?</option>
                        <option value="customer">customer</option>
                        <option value="technician">technician</option>
                    </select><br />
                    <input type="checkbox" /><span className='f-text'> I agree to the terms & conditions</span><br />
                    <input type="submit" className='btn' value="Create Account" /><br />
                    <p className='ff'>Already have an account?<span className='f-login' onClick={redirect}> Login</span></p>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default RegisterPage