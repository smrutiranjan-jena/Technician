import { Link } from 'react-router-dom'
import '../index.css'
const NavBar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <p className="appLogo">Technician.com</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Link to="/home" className="nav-item">Home</Link>
                        <Link to="/about" className="nav-item">About Us</Link>
                        <Link to="/contact" className="nav-item">Contact Us</Link>
                        <Link to="/register" className="nav-item">Register</Link>
                        <Link to="/login" className="nav-item">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar