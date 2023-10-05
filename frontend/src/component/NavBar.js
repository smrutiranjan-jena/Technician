import { Link } from 'react-router-dom'
import '../index.css'
const NavBar = (props) => {
    const userRole = localStorage.getItem('role')
    return (
        <div>
            {userRole === 'customer' ? (
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
                            <Link to="/mybook" className="nav-item">MyBook</Link>
                            <Link to="/profile" className="nav-item">Profile</Link>
                            <Link to="/logout" className="nav-item">Logout</Link>
                        </div>
                    </div>
                </nav>
            ) : userRole === 'technician' ? (
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
                            <Link to="/appointments" className="nav-item">Apponintments</Link>
                            {/* <Link to="/enquiries" className="nav-item">Enquiries</Link> */}
                            <Link to="/profile" className="nav-item">Profile</Link>
                            <Link to="/logout" className="nav-item">Logout</Link>
                        </div>
                    </div>
                </nav>
            ) : userRole === 'admin' ? (
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <p className="appLogo">Technician.com</p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <Link to="/home" className="nav-item">Home</Link>
                            <Link to="/allbookings" className="nav-item">AllBookings</Link>
                            <Link to="/allcustomers" className="nav-item">Customers</Link>
                            <Link to="/alltechnicians" className="nav-item">Technicians</Link>
                            <Link to="/profile" className="nav-item">Profile</Link>
                            <Link to="/logout" className="nav-item">Logout</Link>
                        </div>
                    </div>
                </nav>
            ) : (
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
            )}
        </div>
    )
}
export default NavBar