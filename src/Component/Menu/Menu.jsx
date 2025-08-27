import React from 'react'
import MenuJson from "./MenuJson.json"
import "./Menu.css"
import {motion, AnimatePresence } from 'framer-motion'
import { faBurger } from '@fortawesome/free-solid-svg-icons/faBurger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Menu = () => {
  const [fillter, setFillter] = React.useState("all")

  const category = ["all", "breakfast" , "pizza", "pasta", "fast food"]
  const filltered = fillter === "all" ? MenuJson : MenuJson.filter(item => item.MenuType.toLowerCase() === fillter.toLowerCase());
  const repeatedItems = [...MenuJson, ...MenuJson];
  return (
    <>
    <section className='lg:p-20 md:p-10 sm:p-5 p-5 bg-slate-100'>
      <div className="menu text-center lg:p-10 md:p-10 sm:p-5 p-2 bg-white rounded-3xl">
        <h4><span><FontAwesomeIcon icon={faBurger} /></span>FOOD MENU<span><FontAwesomeIcon icon={faBurger} /></span></h4>
        <h2>Fresheat Foods Menu</h2>
        <ul className="fillter flex justify-center items-center flex-wrap lg:gap-20 md:gap-10 sm:gap-5 gap-5 mb-5">
          {category.map((item) => (
            <li key={item} onClick={() => setFillter(item)} className={fillter === item ? "active" : ""}>{item}</li>
          ))}
        </ul>
        <hr className='my-10 border-slate-800 '/>
        <div className="menu-items">
          <AnimatePresence>
            {filltered.map((item) => (
              <motion.div key={item.id} className="menu-card lg:w-1/2 md:w-1/2 sm:w-full w-full" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.4 }}>
                <div className="flex justify-center items-center">
                  <img src={require(`../../IMG/${item.image}`)} alt={item.name} />
                  <div className="text-start"> 
                    <h3>{item.name}</h3>
                    <h4>{item.description}</h4>
                  </div>
                </div>
                <p>${item.price}</p>
              </motion.div>
            ))}
          </AnimatePresence>     
        </div>
      </div>
    </section>
    <div className="loop-container bg-slate-100">
        <ul className='loop-list'>
          {repeatedItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Menu
