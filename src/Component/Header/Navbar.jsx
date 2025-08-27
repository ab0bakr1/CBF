import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion,AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen22, setIsOpen22] = useState(false);
  const dropdown = {
    hidden: {opacity: 0, y: 30},
    visible: {opacity: 1, y: 10},
    transition: { duration: 0.3, ease: "easeInOut" },
    exit: {opacity: 0, y: 30 , transition: { duration: 0.3, ease: "easeInOut" }}
  }
  const dropright = {
    hidden: {opacity: 0, x: 240 , y: -41},
    visible: {opacity: 1, x: 120, y: -41},
    transition: { duration: 0.3, ease: "easeInOut" },
    exit: {opacity: 0, x: 240 , transition: { duration: 0.3, ease: "easeInOut" }}
  }

  return (
    <nav className='flex justify-between items-center'>
      <ul className='flex lg:space-x-6 md:space-x-4 sm:space-x-2 space-x-0 text-white'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about us</Link>
        </li>
        <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <li>
            <Link to="/shop">shop <FontAwesomeIcon icon={faPlus} /></Link>
          </li>
          <AnimatePresence>
            {isOpen && (
              <motion.ul key="dropdown" variants={dropdown} initial="hidden" animate="visible" exit="exit" className="absolute top-full left-0 bg-white dropdown shadow">
                <li className="py-2 px-4">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="py-2 px-4">
                  <a href="/">shop right sidebar</a>
                </li>
                <li className=" py-2 px-4">
                  <a href="/">shop list</a>
                </li>
                <li className=" py-2 px-4">
                  <a href="/">shop list right sidebar</a>
                </li>
                <li className=" py-2 px-4">
                  <a href="/">shop details</a>
                </li>
                <li className=" py-2 px-4">
                  <a href="/">cart list</a>
                </li>
                <li className=" py-2 px-4">
                  <a href="/">checkout</a>
                </li>
                <li className=" py-2 px-4">
                  <a href="/">wishlist</a>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div className="relative group" onMouseEnter={() => setIsOpen2(true)} onMouseLeave={() => setIsOpen2(false)}>
          <li>
            <a href="/">pages <FontAwesomeIcon icon={faPlus} /></a>
          </li>
          <AnimatePresence>
            {isOpen2 && (
              <motion.ul key="dropdown" variants={dropdown} initial="hidden" animate="visible" exit="exit" className="absolute top-full left-0 bg-white dropdown shadow">
                <div className='relative group' onMouseEnter={() => setIsOpen22(true)} onMouseLeave={() => setIsOpen22(false)}>
                  <li className="py-2 px-4">
                    <Link to="/chef">chef <FontAwesomeIcon icon={faPlus} /></Link>
                  </li>
                  <AnimatePresence>
                    {isOpen22 && (
                      <motion.ul key="dropdown" variants={dropright} initial="hidden" animate="visible" exit="exit" className="absolute top-full left-0 bg-white dropdown shadow">
                        <li className="py-2 px-4">
                          <a href="/">chif details</a>
                        </li>
                        <li className="py-2 px-4">
                          <a href="/">chif right sidebar</a>
                        </li>
                        <li className="py-2 px-4">
                          <a href="/">chif list</a>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                <li className="py-2 px-4">
                  <Link to="/shop">food menu</Link>
                </li>
                <li className="py-2 px-4">
                  <a href="/">gallery</a>
                </li>
                <li className="py-2 px-4">
                  <a href="/">services</a>
                </li>
                <li className="py-2 px-4">
                  <a href="/">testimonials</a>
                </li>
                <li className="py-2 px-4">
                  <a href="/">reservation</a>
                </li>
                <li className="py-2 px-4">
                  <a href="/">faq's</a>
                </li>
                <li className="py-2 px-4">
                  <a href="/">my account</a>
                </li>
                <li className="py-2 px-4">
                  <a href="/">404 page</a>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div className="relative group" onMouseEnter={() => setIsOpen3(true)} onMouseLeave={() => setIsOpen3(false)}>
          <li>
            <Link to="/blog">blog <FontAwesomeIcon icon={faPlus} /></Link>
          </li>
          <AnimatePresence>
            {isOpen3 && (
              <motion.ul key="dropdown" variants={dropdown} initial="hidden" animate="visible" exit="exit" className="absolute top-full left-0 bg-white dropdown shadow">
                <li className="py-2 px-4">
                  <a href="/">Submenu 1</a>
                </li>
                <li className="py-2 px-4">
                  <a href="/">Submenu 2</a>
                </li>
                <li className="py-2 px-4">
                  <a href="/">Submenu 3</a>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <li>
          <a href="/">contact us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar