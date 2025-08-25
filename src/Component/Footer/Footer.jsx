import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../../IMG/Logo.png'
import './Footer.css'
import { faFacebook, faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'

const Footer = () => {
  return (
    <footer className='bg-stone-900 pt-5'>
        <div className="footer-top">
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} />
                <div>
                    <h6>address</h6>
                    <p>400 Main St, New York, NY</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} />
                <div>
                    <h6>email</h6>
                    <p>8EYq4@example.com</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhoneVolume} />
                <div>
                    <h6>phone</h6>
                    <p>+1 234 567 8901</p>
                </div>
            </div>
        </div>
        <div className="footer-middle lg:flex-row md:flex-col sm:flex-col flex-col">
            <div className="lg:w-1/4 md:w-1/2 sm:w-full w-full lg:px-10">
                <img src={logo} alt="Logo" loading='lazy' className='mb-5' width={200} />
                <p>Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis</p>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faXTwitter} />
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 sm:w-full w-full lg:px-10">
                <h4>Quick Links</h4>
                <ul className='text-left'>
                    <li>About us</li>
                    <li>our gallery</li>
                    <li>our blogs</li>
                    <li>FAQ's</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 sm:w-full w-full lg:px-10">
                <h4>our menu</h4>
                <ul>
                    <li>burger king</li>
                    <li>pizza</li>
                    <li>pasta</li>
                    <li>fresh food</li>
                    <li>desserts</li>
                </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 sm:w-full w-full lg:px-10">
                <h4>contact us</h4>
                <h5>monday - friday <span>8am - 4pm</span></h5>
                <h5>saturday <span>8am - 12am</span></h5>
                <form action="">
                    <input type="email" placeholder='Your Email' />
                    <button type='submit'><FontAwesomeIcon icon={faArrowRight} /></button>
                </form>
                <input type="checkbox" name="agree" id="agree" />
                <label htmlFor="agree"> I agree to the <a href="#">Privacy Policy.</a></label>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2025 All Rights Reserved by Abobakr Almashhor</p>
            <div className="flex gap-5">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer