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
    <main className="hero">
        <AnimatePresence mode='wait'>
            <motion.div 
                key={`text-${index}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="hero-content z-10 w-2/3"
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
                className="hero-image z-10 w-1/3"
            >
                <img src={heroimage[index]} alt="hero1" loading='lazy' />
            </motion.div>
            <div className="hero-overlay"></div>
        </AnimatePresence>
    </main>
  )
}

export default Hero