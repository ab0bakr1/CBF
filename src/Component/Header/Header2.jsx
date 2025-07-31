import React from 'react'
import Navbar from './Navbar'
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../IMG/Logo.png'
import NavMobile from './NavMobile';


const Header2 = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 720);
    const [hasmounted, setHasMounted] = React.useState(false);
    const [isNavMobile, setIsNavMobile] = React.useState("inactive");

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 100);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 720);
        };

        setHasMounted(true);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const toggleNavMobile = () => {
        setIsNavMobile(prevState => prevState === "active" ? "inactive" : "active");
    };
    const shouldShowHeader = (isScrolled || isMobile) && hasmounted;

  return (
    <>
        <AnimatePresence>
            {shouldShowHeader && (
                <motion.header key='header2' className='fixed top-0 left-0 w-full z-10 flex items-center justify-between lg:pe-8 md:pe-6 sm:pe-4 pe-2 header2 bg-white' initial={{opacity: 0, y: -80}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -80}} transition={{duration: 0.5, ease: 'easeInOut'}}>
                    <div className="logo">
                        <img className="p-2" src={Logo} alt="Logo" loading='lazy' />
                    </div>
                    <div>
                        <Navbar />
                    </div>
                    <div className="icons">
                        <FontAwesomeIcon icon={faSearch} />
                        <FontAwesomeIcon icon={faCartShopping} />
                        <FontAwesomeIcon icon={faBars} onClick={toggleNavMobile} />
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
        <AnimatePresence>
            {isMobile && (
                <NavMobile isNavMobile={isNavMobile} toggleNavMobile={toggleNavMobile} />
            )}
        </AnimatePresence>
        {isMobile && isNavMobile === "active" && (
            <motion.div className="overlay" onClick={toggleNavMobile} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} />
        )}
    </>
  )
}

export default Header2