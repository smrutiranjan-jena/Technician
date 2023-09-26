import { useState } from "react"
import { useDispatch } from 'react-redux'
import { startAddOwnDetails } from "../redux/actions/technicianActions"
const TechDetailsForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [category, setCategory] = useState('')
    const [city, setCity] = useState('')
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
    const handleExpChange = (e) => {
        setExp(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const technicianDetails = {
            name: name,
            mobile: Number(mobile),
            category: category,
            city: city,
            experience: Number(exp)
        }
        dispatch(startAddOwnDetails(technicianDetails))
        const reset = () => {
            setName('')
            setMobile('')
            setCategory('')
            setCity('')
            setExp('')
        }
        reset()
    }
    return (
        <div>
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
                    <input type="number" placeholder="experience" value={exp} onChange={handleExpChange} /><br />
                    <input type="submit" className='btn' value="Save Details" /><br />
                </form>
            </div>
        </div>
    )
}
export default TechDetailsForm