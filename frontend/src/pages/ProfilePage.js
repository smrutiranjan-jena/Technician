import profile from '../assets/images/5907.jpg'
import '../index.css'
const ProfilePage = (props) => {
    const userRole = localStorage.getItem('role')
    return (
        <div>
            <h1 className="aboutUsHeading">Profile</h1>
            <div className="aboutUsContainer">
                <div className="boxContainer">
                    <div className="imagearea">
                        <img src={profile} />
                    </div>
                    <div className="textarea">
                    <p><span className="aboutUsmagic">{userRole} Details</span>
                            <br />
                            <br />
                            <i className="fa fa-user"></i>
                            smruti123
                            <br />
                            <br />
                            <i className="fa fa-mobile"></i>
                            smruti123@gmail.com
                            <br />
                            <br />
                            <i className="fa fa-phone"></i>
                            +91-8917591529
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage