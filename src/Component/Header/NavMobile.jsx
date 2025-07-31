import { faFacebook, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../IMG/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'

const NavMobile = ( { isNavMobile, toggleNavMobile } ) => {
  return (
    <motion.div className={`slidebar p-4 z-50 overflow-y-auto ${isNavMobile === "active" ? "active" : "inactive"}`}>
        <div className="top flex justify-between items-center">
            <div className="logo">
                <img className="py-5" src={Logo} alt="Logo" loading='lazy' />
            </div>
            <div className="close" onClick={toggleNavMobile}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
        <div className="nav">
            <ul className='flex flex-col space-y-4 text-gray-800'> 
                <li><a href="/HOME">Home</a></li>
                <li><a href="/">about us</a></li>
                <li><a href="/">shop</a></li>
                <li><a href="/">chif</a></li>
                <li><a href="/">blog</a></li>
                <li><a href="/">contact us</a></li>
            </ul>
        </div>
        <div className="contact">
            <h4>contact info</h4>
            <p>Address: 123 Main St, City, Country</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: 8EYq4@example.com</p>
            <p>mod-friday,09am-06pm</p>
        </div>
        <button>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>order now</span>
        </button>
        <div className="social">
            <p><FontAwesomeIcon icon={faXTwitter} /></p>
            <p><FontAwesomeIcon icon={faInstagram} /></p>
            <p><FontAwesomeIcon icon={faLinkedinIn} /></p>
            <p><FontAwesomeIcon icon={faFacebook} /></p>
        </div>
    </motion.div>
  )
}

export default NavMobile