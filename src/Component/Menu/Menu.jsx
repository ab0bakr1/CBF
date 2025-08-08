import React from 'react'
import MenuJson from "./Menu.json"
import "./Menu.css"

const Menu = () => {
  return (
    <section>
      <div className="">
        <h4></h4>
        <h2></h2>
        <div className="fillter">
          <ul>
            <li>all</li>
            <li>breakfast</li>
            <li>drink & juice</li>
            <li>pizza</li>
            <li>pasta</li>
          </ul>
        </div>
        <div className="menu">
          {MenuJson.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={require(`../../IMG/${item.image}`)} alt={item.name} />
              <h3>{item.name}</h3>
              <h4>{item.description}</h4>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
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