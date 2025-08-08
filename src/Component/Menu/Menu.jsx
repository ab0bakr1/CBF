import React from 'react'
import MenuJson from "./MenuJson.json"
import "./Menu.css"

const Menu = () => {
  return (
    <section className='p-20 bg-slate-100'>
      <div className="menu text-center lg:p-10 md:p-10 sm:p-5 p-2 bg-white rounded-3xl">
        <h4>FOOD MENU</h4>
        <h2>Fresheat Foods Menu</h2>
        <ul className="fillter flex justify-center items-center lg:gap-20 md:gap-10 sm:gap-5 gap-2 mb-5">
          <li>all</li>
          <li>breakfast</li>
          <li>pizza</li>
          <li>pasta</li>
        </ul>
        <hr className='my-10 border-slate-800 '/>
        <div className="menu-items">
          {MenuJson.map((item) => (
            <div key={item.id} className="menu-card lg:w-1/2 md:w-1/2 sm:w-full w-full">
              <div className="flex justify-center items-center">
                <img src={require(`../../IMG/${item.image}`)} alt={item.name} />
                <div className="text-start"> 
                  <h3>{item.name}</h3>
                  <h4>{item.description}</h4>
                </div>
              </div>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <ul>
          {MenuJson.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Menu
