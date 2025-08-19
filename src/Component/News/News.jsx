import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import './News.css';
import NewsJson from './NewsJson.json';

const News = () => {
  return (
    <section>
        <h4>LATEST NEWS</h4>
        <h2>Our Latest Foods News</h2>
        <div className="News-items">
          <AnimatePresence mode='popLayout'>
            {NewsJson.map((item) => (
              <motion.div key={item.id} initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} layout className="News-item lg:w-1/4 md:w-1/3 sm:w-full w-full py-5 px-10">
                <img src={item.images[0]} alt={item.name} loading='lazy' className="w-full h-1/2" />
                <div className="h-1/2">
                    <div className="">
                        <div className="date">
                            <span>{item.date.day}</span>
                            <span>{item.date.month}</span>
                        </div>
                        <div className="author">
                            
                            <span>By {item.author}</span>
                        </div>
                        <div className="category">

                            <span>{item.category}</span>
                        </div>
                    </div>
                  <h3>{item.title}</h3>
                  <a href="http://">read more</a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
    </section>
  )
}

export default News