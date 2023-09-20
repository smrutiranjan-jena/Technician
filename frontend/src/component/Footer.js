import '../index.css'
const Footer = () => {
    return (
        <div className='FooterContainer'>
             <div className="FooterBox">
                        <p className='FooterHeading'>About Us</p>
                        <p style={{color: "dimgrey",fontWeight:900}}>Technician.com Service Platform is the authorized appliance repair service for everyday products. We have accomplished hundreds of appliance repairs on Air Conditioners, Microwave Oven, Refrigerator, Washing Machine and more.</p>
                 </div>
                <div className="FooterBox">
                        <p className='FooterHeading'>Legal and support</p>
                        <li>Term and condition</li>
                        <li>Licence agreement</li>
                        <li>Privay policy</li>
                        <li>Copyright information</li>
                        <li>Cookies policy</li>
                        <li>Cookies setting</li>
                 </div>
                 <div className="FooterBox">
                        <p className='FooterHeading'>Contact details</p>
                        <li>Technician.com</li>
                        <li>technician@gmail.com</li>
                        <li><i className="fa fa-phone"></i>+91-8917591528</li>
                        <li><i className="fa fa-phone"></i>+91-7694094996</li>
                        <li>Monday - Sunday | 9:00am - 10:00pm</li>
                        <li>Founder - Smruti Ranjan Jena</li>
                 </div>
                 <div className="FooterBox">
                        <p className='FooterHeading'>social media</p>
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube"></i>
                        <i className="fa fa-twitter"></i>
                 </div>
        </div>
    )
}
export default Footer