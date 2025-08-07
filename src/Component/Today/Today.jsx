import React from 'react'
import "./Today.css"
import Today1 from "../../IMG/today1.png"
import Today2 from "../../IMG/today2.png"
import Today3 from "../../IMG/today3.png"

const Today = () => {
  return (
    <section className='today'>
        <div className="today-text lg:w-1/2 w-full">
            <h4>WELCOME FRESHEAT</h4>
            <h2>TODAY SPACIAL FOOD</h2>
            <p>limite time offer</p>
            <button>order now</button>
        </div>
        <div className="today-img lg:w-1/2 lg:block md:hidden hidden">
            <img src={Today1} alt="" />
        </div>
        <img className='absolute bottom-0 right-5'  src={Today2} alt="" />
        <img className='absolute bottom-0 left-5'  src={Today3} alt="" />
    </section>
  )
}

export default Today