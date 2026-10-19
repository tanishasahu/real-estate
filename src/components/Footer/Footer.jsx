import React from 'react'
import footerbg from './../../assets/footer-bg.png'

function Footer() {
  return (
    <>
    <div className="footer-wrapper container-fluid position-relative">
        <img src={footerbg} className='img-fluid footer-bg position-absolute' alt="" />
        <div className="container px-5">
            <div className="logo-text">
                <h2>DREAM HOMES</h2>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <p className="footer-text">Experience the epitome flexibility and enpower your real estate venture with our feature-rich theme.</p>
                   <p className="footer-text">Effortlessly adapt to various property types and market demands with our comprehensive solution.</p>
                   <div className="social-icons">
             <a href="#"><i className="ri-facebook-fill"></i></a>
             <a href="#"><i className="ri-twitter-fill"></i></a>
             <a href="#"><i className="ri-instagram-fill"></i></a>
             <a href="#"><i className="ri-youtube-fill"></i></a>
                   </div>
                     </div>
                     <div className="col-md-3 mb-4">
                        <h6 className="footer-heading">Quick Links</h6>
                        <ul className='footer-links'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Properties Listing</a></li>
                            <li><a href="#">Agents</a></li>
                            <li><a href="#">COntact</a></li>

                        </ul>

                     </div>
                     <div className="col-md-3 mb-4">
                        <div className="search-box">
                            <input type="text" placeholder='Search...' />
                            <button>Search</button>
                        </div>
                     </div>
            </div>
            <div className="contact-help-box">
                <div className="help-text">Need Help?</div>
                <div className="help-items"><i className="ri-phone-fill">1-800-555-4321</i></div>
                 <div className="help-items"><i className="ri-whatsapp-fill">1-800-555-4321</i></div>
                  <div className="help-items"><i className="ri-mail-fill">Example@site.com</i></div>
            </div>
            <div className="footer-bottom">
                <p>2026 All Rights Reserved Bya <a href="#">K2infocom</a></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer