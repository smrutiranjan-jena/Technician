import '../index.css'
import NavBar from "../component/NavBar"
import Footer from '../component/Footer';
import CategoryList from '../component/CategoryList';
import TechHome from '../component/TechHome';
import AdminHome from '../component/AdminHome';
const HomePage = (props) => {
    const role = localStorage.getItem('role')
    console.log(role)
    return (
        <div>
            <NavBar />
            {role === 'technician' ? (
                <TechHome {...props} />
            ) : role === "customer" ? (
                <CategoryList {...props} />
            ) : role === "admin" ? (
                <AdminHome {...props} />
            ) : (
                <CategoryList {...props} />
            )}
            <Footer />
        </div>)
}
export default HomePage