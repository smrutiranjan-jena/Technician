import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import ContactUsPage from "./pages/ContactUsPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Logout from './pages/LogoutPage';
import ProfilePage from './pages/ProfilePage';
import DisplayTechniciansByCategoryPage from './pages/DisplayTechniciansByCategoryPage';
import BookingPage from './pages/BookingPage';
import MyBookPage from './pages/MyBookPage';
import AllTechListPage from './pages/AllTechListPage';
import AllCustoListPage from './pages/AllCustoListPage';
import AddDetailsPage from './pages/AddDetailsPage';
import AppointmentPage from './pages/AppointmentPage';
import AllBookListPage from './pages/AllBookListPage';
import PageNotFound from './pages/PageNotFound';
const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutUsPage} />
        <Route exact path="/contact" component={ContactUsPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/techbycategory" component={DisplayTechniciansByCategoryPage} />
        <Route exact path="/booking" component={BookingPage} />
        <Route exact path="/mybook" component={MyBookPage} />
        <Route exact path="/alltechnicians" component={AllTechListPage} />
        <Route exact path="/allcustomers" component={AllCustoListPage} />
        <Route exact path="/details" component={AddDetailsPage} />
        <Route exact path="/appointments" component={AppointmentPage} />
        <Route exact path="/allbookings" component={AllBookListPage} />
        <Route exact path="*" component={PageNotFound} />//fallback route
      </Switch>
    </div>
  )
}
export default App