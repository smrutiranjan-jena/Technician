import '../index.css'
import TechDetailsForm from '../component/TechDetailsForm'
import TechDetailsShow from '../component/TechDetailsShow'
const AddDetailsPage = () => {
    return (
        <div>
            <h1 className="commonHeading">Are You a Technician ? Add Your Details</h1>
            <p style={{ textAlign: 'center', padding: '20px', color: 'red' }}>Alert! This Details helps the customer to reach with you, so be careful while adding these credential .</p>
            <div className="commonContainer">
                <div className="boxContainer">
                    <TechDetailsForm />
                    <TechDetailsShow />
                </div>
            </div>
        </div>
    )
}
export default AddDetailsPage