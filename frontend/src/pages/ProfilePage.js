import profile from '../assets/images/5907.jpg'
import '../index.css'
import { useState } from 'react'
const ProfilePage = (props) => {
    const userRole = localStorage.getItem('role')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [category, setCategory] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [exp, setExp] = useState('')
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleMobileChange = (e) => {
        setMobile(e.target.value)
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }
    const handleExpChange = (e) => {
        setExp(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const TechnicianDetails = {
            name: name,
            mobile: Number(mobile),
            category: category,
            city: city,
            address: address,
            experience: Number(exp)
        }
        // dispatch(asyncUserRegister(registeredData,props))
        console.log(TechnicianDetails)
        const reset = () => {
            setName('')
            setMobile('')
            setCategory('')
            setCity('')
            setAddress('')
            setExp('')
        }
        reset()
    }
    return (
        <div>
            <h1 className="aboutUsHeading">My Profile</h1>
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

                    {userRole === 'technician' ? (
                        <div>
                            <h1 className="aboutUsHeading">Are You a Technician ? Add Your Details</h1>
                            <p style={{ textAlign: 'center', padding: '20px', color: 'red' }}>Alert! This Details helps the customer to reach with you, so be careful while adding these credential .</p>
                            <div className="FormContainer">
                                <i className="fa fa-address-card"></i>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="name" value={name} onChange={handleNameChange} /><br />
                                    <input type="text" placeholder="mobile" value={mobile} onChange={handleMobileChange} /><br />
                                    <select id="category" value={category} onChange={handleCategoryChange} style={{ width: '150px' }}>
                                        <option>category</option>
                                        <option value="AIR CONDITIONER">AIR CONDITIONER</option>
                                        <option value="WASHING MACHINE">WASHING MACHINE</option>
                                        <option value="TELEVISION">TELEVISION</option>
                                        <option value="MICROWAVE OVEN">MICROWAVE OVEN</option>
                                        <option value="COOLER">COOLER</option>
                                        <option value="REFRIGERATOR">REFRIGERATOR</option>
                                        <option value="GRINDER">GRINDER</option>
                                    </select><br />
                                    <input type="text" placeholder="city" value={city} onChange={handleCityChange} /><br />
                                    <input type="text" placeholder="address" value={address} onChange={handleAddressChange} /><br />
                                    <input type="number" placeholder="experience" value={exp} onChange={handleExpChange} /><br />
                                    <input type="submit" className='btn' value="Save Details" /><br />
                                </form>
                            </div>
                        </div>
                    ) : (
                        null
                    )}
                </div>
            </div>
        </div>
    )
}
export default ProfilePage