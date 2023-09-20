import 'bootstrap/dist/css/bootstrap.min.css';
import { Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import ContactUsPage from "./pages/ContactUsPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Logout from './pages/LogoutPage';
import ProfilePage from './pages/ProfilePage';
const App = (props) => {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/about" component={AboutUsPage} />
      <Route exact path="/contact" component={ContactUsPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/profile" component={ProfilePage} />
    </div>
  )
}
export default App