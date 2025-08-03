import React from 'react'
import "./Hero.css"
import { motion, AnimatePresence } from 'framer-motion'
import hero1 from "../../IMG/hero1.png"
import hero2 from "../../IMG/hero2.png"
import hero3 from "../../IMG/hero3.png"

const Hero = () => {
    const [index, setIndex] = React.useState(0);
    const herotitale = ["chicago deep burger king","chicago deep pizza king","spicy fried chicken"]
    const heroimage = [hero1, hero2, hero3];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % herotitale.length);
        }, 5000);

        return () => clearInterval(interval);

    }, []);
  return (
    <main className="hero overflow-x-hidden">
        <AnimatePresence mode='wait'>
            <motion.div 
                key={`text-${index}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="hero-content z-10 lg:w-2/3 md:w-2/3 w-full lg:ps-10 md:ps-8 sm:ps-4 ps-0"
            >
                <h3>welcome fresheat</h3>
                <h1>{herotitale[index]}</h1>
                <button>order now</button>
            </motion.div>
            <motion.div 
                key={`image-${index}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="hero-image z-10 lg:w-1/3 md:w-1/3 sm:hidden hidden lg:block md:hidden w-full h-full lg:pe-10 md:pe-8 sm:pe-4 pe-0"
            >
                <img src={heroimage[index]} alt="hero1" loading='lazy' />
            </motion.div>
            <div className="hero-overlay"></div>
        </AnimatePresence>
    </main>
  )
}

export default Hero