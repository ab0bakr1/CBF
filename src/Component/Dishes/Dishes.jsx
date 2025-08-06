import React from 'react'
import "./Dishes.css"
import Dishes1 from "../../IMG/Dishes1.png"
import Dishes2 from "../../IMG/Dishes4.png"
import Dishes3 from "../../IMG/Dishes2.png"
import Dishes4 from "../../IMG/Dishes3.png"
import Dishes5 from "../../IMG/food3.png"
import Dishes6 from "../../IMG/spicy.png"
import Dishes7 from "../../IMG/spicy2.png"

const dishes = [
  {
    id: 1,
    name: "chicken fried rice",
    image: Dishes1,
    price: 10.99,
    description: "the registration fee"
  },
  {
    id: 2,
    name: "chinese pasta",
    image: Dishes2,
    price: 12.99,
    description: "the registration fee"
  },
  {
    id: 3,
    name: "chicken pizza",
    image: Dishes3,
    price: 12.99,
    description: "the registration fee"
  },
  {
    id: 4,
    name: "chicken noodles",
    image: Dishes4,
    price: 12.99,
    description: "the registration fee"
  },
  {
    id: 5,
    name: "grilled chicken",
    image: Dishes5,
    price: 12.99,
    description: "the registration fee"
  },
]
const Dishes = () => {
  return (
    <section className='dishes relative py-10 bg-slate-100 text-center'>
        <h4>POPULAR DISHES</h4>
        <h2>Best selling Dishes</h2>
        <div className="Dishes-item flex flex-wrap justify-center items-center">
          {dishes.map((dish) => (
            <div className="Dishes-card lg:w-1/5 md:w-1/3 sm:w-1/2 w-1/2">
              <img src={dish.image} alt="" />
              <h3>{dish.name}</h3>
              <h4>{dish.description}</h4>
              <p>${dish.price}</p>
            </div>
          ))}
        </div>
        <button>view all item</button>
        <img className='absolute top-0 right-5' src={Dishes6} alt="" />
        <img className='absolute bottom-10 left-5' src={Dishes7} alt="" />
    </section>
  )
}

export default Dishes