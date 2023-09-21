import '../index.css'
import NavBar from "../component/NavBar"
import Footer from '../component/Footer';
import CategoryList from '../component/CategoryList';
const HomePage = (props) => {
  return (
    <div>
      <NavBar />
      <CategoryList {...props}/>
      <Footer />
    </div>)
}
export default HomePage