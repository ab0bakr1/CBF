import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import './Popular.css';
import Popular1 from '../../IMG/food1.png';
import Popular2 from '../../IMG/food2.png';
import Popular3 from '../../IMG/food3.png';
import Popular4 from '../../IMG/food4.png';
import Popular5 from '../../IMG/food5.png';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const FoodItems = [
  {
    id: 1,
    name: "Chicago Deep Burger King",
    image: Popular1,
    price: 10.99,
    description: "A delicious deep burger with a unique Chicago twist."
  },
  {
    id: 2,
    name: "Chicago Deep Pizza King",
    image: Popular2,
    price: 12.99,
    description: "A classic Chicago deep dish pizza with all the toppings."
  },
  {
    id: 3,
    name: "Spicy Fried Chicken",
    image: Popular3,
    price: 8.99,
    description: "Crispy fried chicken with a spicy kick."
  },
  {
    id: 4,
    name: "Veggie Delight Salad",
    image: Popular4,
    price: 7.99,
    description: "A fresh salad loaded with seasonal vegetables."
  },
  {
    id: 5,
    name: "Classic Cheeseburger",
    image: Popular5,
    price: 9.99,
    description: "A juicy cheeseburger with all the classic toppings."
  }
]
const Popular = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemCount, setItemCount] = useState(1);

  const UItemCount = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemCount(4); // Large screens
    } else if (width >= 768) {
      setItemCount(3); // Medium screens
    } else {
      setItemCount(1); // Small screens
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prevIndex => (prevIndex + 1) % FoodItems.length);
    }, 3000); // Change every 3 seconds

    UItemCount();
    window.addEventListener('resize', UItemCount);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', UItemCount);
    };
  }, []);

  const visibleItems = Array.from({ length: itemCount }, (_, index) => 
    FoodItems[(startIndex + index) % FoodItems.length]
  );  


  return (
    <section className='popular lg:py-20 md:py-16 sm:py-12 py-8 text-center'>
      <div className="container mx-auto">
        <h4><span><FontAwesomeIcon icon={faBurger} /></span>best food<span><FontAwesomeIcon icon={faBurger} /></span></h4>
        <h2>Popular food items</h2>
        <div className="popular-items">
          <AnimatePresence mode='popLayout'>
            {visibleItems.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} layout className="popular-item lg:w-1/4 md:w-1/3 sm:w-full w-full py-4 px-8">
                <img src={item.image} alt={item.name} loading='lazy' className="w-full h-1/2" />
                <div className="h-1/2">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
)
}

export default Popular