import { Link } from 'react-router-dom'
import '../index.css'
const LandingPage = (props) => {
    const handleClick = () => {
         props.history.push('/home')
    }
    return (
        <div className='landingPageContainer'>
             <div className="logo">
                 <p>Technician.com</p>
             </div>
             <div className="center-content">
                 <p className='simple'>The most trusted Service Provider for electronic gadgets</p>
                 <p className='heading'>Find your Technician</p>
                 <p className='simple'>Happy Welcome</p>
             </div>
                
             <button onClick={handleClick}>Get Started</button>
        </div>
    )
}
export default LandingPage