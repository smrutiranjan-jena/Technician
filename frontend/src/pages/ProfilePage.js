import profile from '../assets/images/5907.jpg'
import '../index.css'
import TechDetailsForm from '../component/TechDetailsForm'
import TechDetailsShow from '../component/TechDetailsShow'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetUserProfileDetails } from '../redux/actions/userActions'
const ProfilePage = (props) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => {
        return state.user
    })
    useEffect(() => {
        (function () {
            dispatch(startGetUserProfileDetails())
        })()
    }, [])
    const userRole = localStorage.getItem('role')
    return (
        <div>
            <h1 className="commonHeading">My Profile</h1>
            <div className="commonContainer">
                <div className="boxContainer">
                    <div className="imagearea">
                        <img src={profile} />
                    </div>
                    <div className="textarea">
                        <p><span className="commonmagic">{userRole}</span>
                            <br />
                            <br />
                            <i className="fa fa-user"></i>
                            {user.username}
                            <br />
                            <br />
                            Email :  
                            {user.email}
                        </p>
                    </div>
                </div>
            </div>
            {userRole === 'technician' ? (
                <div>
                    <h1 className="commonHeading">Are You a Technician ? Add Your Details</h1>
                    <p style={{ textAlign: 'center', padding: '20px', color: 'red' }}>Alert! This Details helps the customer to reach with you, so be careful while adding these credential .</p>
                    <div className="commonContainer">
                        <div className="boxContainer">
                            <TechDetailsForm />
                            <TechDetailsShow/>
                        </div>
                    </div>
                </div>
            ) : (
                null
            )}
        </div>
    )
}
export default ProfilePage