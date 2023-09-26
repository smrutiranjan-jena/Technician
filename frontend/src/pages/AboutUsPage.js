import NavBar from "../component/NavBar"
import Footer from '../component/Footer'
import {Button} from 'reactstrap'
import manright from "../assets/images/plumber-pointing-lateral.jpg"
import manthumb from "../assets/images/plumber-with-thumb-up.jpg"
import whyus from "../assets/images/5217215.jpg"
const AboutUsPage = (props) => {
    return (
        <div>
            <NavBar />
            <h1 className="commonHeading">About Us</h1>
            <div className="commonContainer">
                <div className="boxContainer">
                    <div className="textarea">
                        <p><span className="commonmagic">Welcome to  Technician.com!</span>
                            <br />
                            <br />
                            At <span className="commonmagic">Technician.com</span>, we are passionate about simplifying the way you connect with skilled
                            technicians for all your home and office needs. Our mission is to make your life easier by
                            providing a platform that brings together highly trained technicians and individuals seeking
                            their services.
                            <br />
                            <br />
                            <span className="commonmagic">Technician.com</span> was founded with a vision to revolutionize the way people access and
                            experience technical services. We saw a need for a convenient, reliable, and efficient
                            platform that could bridge the gap between technicians and customers. Our journey began with
                            a simple idea: to create a space where users could find trusted professionals for various
                            technical tasks, from appliance repairs to IT support.
                        </p>
                        <Button
                            color="primary"
                            outline
                        >
                            Contact Now
                        </Button>
                    </div>
                    <div className="imagearea">
                        <img src={manright} />
                    </div>
                </div>
            </div>
            {/* second.......................................... */}
            <h1 className="commonHeading">What We Offer ?</h1>
            <div className="commonContainer">
                <div className="boxContainer">
                    <div className="imagearea">
                        <img src={manthumb} />
                    </div>
                    <div className="textarea">
                        <p> <span className="commonmagic">Quality Assurance : </span> We understand the importance of quality service. That's why we rigorously vet and verify all
                            technicians on our platform to ensure they meet our high standards of expertise and
                            professionalism.
                            <br />
                            <br />
                            <span className="commonmagic">Convenience : </span> Booking a technician with us is quick and hassle-free. With just a few taps on
                            your smartphone, you can have a skilled
                            professional at your doorstep.
                            <br />
                            <br />
                            <span className="commonmagic">Transparency : </span> We believe in transparency in all our transactions. You'll know the cost of
                            the service upfront, and there are no hidden fees.
                            <br />
                            <br />
                            <span className="commonmagic">Customer-Centric Approach : </span> Your satisfaction is our top priority. We're here to listen to
                            your feedback and address any concerns you may have.
                            <br />
                            <br />
                            <Button
                            color="primary"
                            outline
                        >
                            Book Now
                        </Button>
                        </p>
                    </div>
                </div>
            </div>
            {/* third .......................................... */}
            <h1 className="commonHeading">Why Choose Us ?</h1>
            <div className="commonContainer">
                <div className="boxContainer">
                    <div className="textarea">
                        <p>
                            <span className="commonmagic">Innovation : </span> We constantly evolve our app, adding new features and improvements to stay at the
                            forefront of technology.
                            <br />
                            <br />
                            <span className="commonmagic">Customer-Centric : </span> Your satisfaction is our top priority. We value your feedback and are always here
                            to support you.
                            <br />
                            <br />
                            <span className="commonmagic">Security : </span> Your data's security is our concern. We use the latest encryption and security measures to
                            keep your information safe.

                        </p>
                    </div>
                    <div className="imagearea">
                        <img src={whyus} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default AboutUsPage