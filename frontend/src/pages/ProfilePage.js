import profile from '../assets/images/5907.jpg'
import '../index.css'
import Subscription from '../component/Subscription'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetUserProfileDetails } from '../redux/actions/userActions'
import { startGetOwnDetails } from '../redux/actions/technicianActions'
const ProfilePage = (props) => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const user = useSelector((state) => {
        return state.user
    })
    const technician = useSelector((state) => {
        return state.technician
    })
    console.log(technician)

    useEffect(() => {
        (function () {
            dispatch(startGetUserProfileDetails())
            dispatch(startGetOwnDetails())
        })()
    }, [])
    const userRole = localStorage.getItem('role')
    const callback = (message) => {
        setMessage(message)
    }
    return (
        <div>
            <h1 className="commonHeading">My Profile</h1>
            <div className="commonContainer">
                <div className="boxContainer">
                    <div className="imagearea">
                        <img src={profile} />
                    </div>
                    <div className="textarea">
                        <p><span className="commonmagic" style={
                            {
                                textAlign: "center",
                                color: "blue",
                                textTransform:"capitalize",
                                fontSize:"30px"
                            }}>{userRole}</span>
                            <br />
                            <br />
                            <i className="fa fa-user"></i>
                            {user.username}
                            <br />
                            <br />
                            <b>Email</b> -
                            {user.email}
                        </p>
                    </div>
                </div>
            </div>
            {userRole === 'technician' && Object.keys(technician.ownDetails).length === 0 ? (
                <Subscription props={props} />
            ) : (
                null
            )}
        </div >
    )
}
export default ProfilePage