import '../index.css'
import NavBar from "../component/NavBar"
import Footer from '../component/Footer'
import contactone from "../assets/images/5143151.jpg"
import contacttwo from "../assets/images/5057936.jpg"
const ContactUsPage = (props) => {
    return (
        <div>
            <NavBar />
            <h1 className="commonHeading">Meet With Us!</h1>
            <div className="commonContainer">
                <div className="boxContainer">
                    <div className="textarea">
                        <p><span className="commonmagic">Welcome to  Technician.com!</span>
                            <br />
                            <br />
                            <i className="fa fa-home"></i>
                            TECHNICIAN.COM SERVICE PLATFORM
                            <br />
                            <i className="fa fa-calendar"></i>
                            Mon - Sunday: 9:00am - 9:00pm
                            <br />
                            <i className="fa fa-phone"></i>
                            +91-8917591529 , +91-7684094990
                            <br />
                            <i className="fa fa-mobile"></i>
                            Technicianteaminfo@gmail.com
                            <br />
                            <br />
                            Services Available for kolkata, chennai, Delhi,
                            Mumbai, Bengaluru, Pune.
                            <br />
                        </p>
                    </div>
                    <div className="imagearea">
                        <img src={contacttwo} />
                    </div>
                </div>
            </div>
            {/* second..................................................... */}
            <h1 className="commonHeading">Need Help?</h1>
            <div className="commonContainer">
                <div className="boxContainer">
                    <div className="imagearea">
                        <img src={contactone} />
                    </div>
                    <div className="textarea">
                        <div className="FormContainer">
                            <i class="fa fa-phone"></i>
                            <form>
                                <input type="text" placeholder="name" /><br />
                                <input type="text" placeholder="email" /><br />
                                <textarea cols="21" rows="4" placeholder='message' />
                                <input type="button" className='btn' value="Submit" /><br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ContactUsPage