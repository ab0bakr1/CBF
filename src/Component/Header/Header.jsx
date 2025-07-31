import React from 'react'
import Logo from '../../IMG/Logo.png'
import './Header.css'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <header className='flex items-center'>
        <div className="logo">
            <img className="py-3 px-5" src={Logo} alt="Logo" loading='lazy' />
        </div>
        <div className="header-content">
            <div className="top-header">
                <div className="">
                    <p>09:00 am - 06:00 pm</p>
                </div>
                <div className="follow">
                    <p>follow us:<FontAwesomeIcon icon={faXTwitter} /> <FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faLinkedinIn} /></p>
                </div>
            </div>
            <div className="bottom-header  bg-gray-800 text-white">
                <Navbar />
                <div className="icons">
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faCartShopping} />
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header