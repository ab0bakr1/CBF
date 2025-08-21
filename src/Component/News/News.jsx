import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './News.css';
import NewsJson from './NewsJson.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faTableList } from '@fortawesome/free-solid-svg-icons';

const News = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemCount, setItemCount] = useState(1);
  
    const UItemCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemCount(3); // Large screens
      } else if (width >= 768) {
        setItemCount(2); // Medium screens
      } else {
        setItemCount(1); // Small screens
      }
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        setStartIndex(prevIndex => (prevIndex + 1) % NewsJson.length);
      }, 3000); // Change every 3 seconds
  
      UItemCount();
      window.addEventListener('resize', UItemCount);
  
      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', UItemCount);
      };
    }, []);
  
    const visibleItems = Array.from({ length: itemCount }, (_, index) => 
      NewsJson[(startIndex + index) % NewsJson.length]
    );  
  return (
    <section className='News text-center lg:py-20 md:py-8 sm:py-6 py-4 lg:px-10 md:px-8 sm:px-6 px-4'>
      <h4>LATEST NEWS</h4>
      <h2>Our Latest Foods News</h2>
      <div className="News-items">
        <AnimatePresence mode='popLayout'>
          {visibleItems.map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} layout className="News-item lg:w-1/3 md:w-1/2 sm:w-full w-full py-5 px-10">
              <img src={item.images[0]} alt={item.name} loading='lazy' className="w-full h-1/2" />
              <div className="h-1/2 p-5 bg-white">
                <div className="flex justify-between items-center">
                  <div className="date">
                    <span>{item.date.day}</span>
                    <span>{item.date.month}</span>
                  </div>
                  <div className="author">
                    <FontAwesomeIcon icon={faUser} />
                    <p>By <span>{item.author}</span></p>
                  </div>
                  <div className="category">
                    <FontAwesomeIcon icon={faTableList} />
                    <p>{item.category}</p>
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