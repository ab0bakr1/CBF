import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-top">
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} />
                <div className="">
                    <h6>address</h6>
                    <p>400 Main St, New York, NY</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} />
                <div className="">
                    <h6>email</h6>
                    <p>8EYq4@example.com</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhoneVolume} />
                <div className="">
                    <h6>phone</h6>
                    <p>+1 234 567 8901</p>
                </div>
            </div>
        </div>
        <div className="footer-middle"></div>
        <div className="footer-bottom"></div>
    </footer>
  )
}

export default Footer