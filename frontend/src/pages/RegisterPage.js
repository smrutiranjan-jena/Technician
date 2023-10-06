import '../index.css'
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
    const handleSubmit = (e) => {
        e.preventDefault()
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
                    <p style={{color:"blue",fontSize:"20px"}}>Register</p>
                    <input type="text" placeholder="username" value={username} onChange={handleUsernameChange} /><br />
                    <input type="text" placeholder="email" value={email} onChange={handleEmailChange} /><br />
                    <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} ref={passwordRef} />
                    <i className="fa fa-eye" onClick={showHidePassword}></i><br />
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