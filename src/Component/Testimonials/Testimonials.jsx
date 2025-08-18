import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Testimonials.css'
import TestJson from './TestJson.json'
import { AnimatePresence,motion } from 'framer-motion'




const Testimonials = () => {
    const [TestCard, setTestCard] = useState(0);

    const handleNext = () => {
        setTestCard((prev) => (prev + 1) % TestJson.length);
    };

    const handlePrev = () => {
    setTestCard((prev) => (prev - 1 + TestJson.length) % TestJson.length);
    };
  return (
    <section className="bg-zinc-900 relative">
        <div className="backimg"></div>
        <div className="Test-info">
            <h4 className='text-center'>Testimonials</h4>
            <h2 className='text-center'>What Our Customers Say</h2>
            <div className="flex justify-center overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.div key={TestCard} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="Test-card flex justify-between items-center gap-8">
                        <div className="flex justify-center gap-10 items-center">
                            <img src="https://cdn.pixabay.com/photo/2015/01/31/18/17/arabs-618749_1280.jpg" alt="" />
                            <div className="flex flex-col items-left capitalize gap-1">
                                <h5>{TestJson[TestCard].name}</h5>
                                <p>{TestJson[TestCard].role}</p>
                                <div className="rating text-yellow-500">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className={i < TestJson[TestCard].rating ? "text-yellow-500" : "text-gray-400"}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem officiis magni amet, soluta assumenda dolorum nostrum obcaecati quibusdam omnis quasi!</h6>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="left-right flex gap-5">
                <button onClick={handlePrev}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <button onClick={handleNext}><FontAwesomeIcon icon={faArrowRight} /></button>
                
            </div>
        </div>
    </section>
  )
}

export default Testimonials