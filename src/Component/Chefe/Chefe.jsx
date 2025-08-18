import React from 'react'
import "./Chefe.css"
import chef1 from "../../IMG/chef1.png"
import chef2 from "../../IMG/chef2.png"
import chef3 from "../../IMG/chef3.png"
import img from "../../IMG/chefup.png"


const Chefe = () => {
  return (
    <section className="Chefe bg-slate-100 py-20 relative">
        <h4>OUR CHEFE</h4>
        <h2>Meet Our Expert Chefe</h2>
        <div className="Chefes">
            <div className="Chef">
                <img src={chef1} alt="Cheif" loading='lezy' />
                <h3>Ralph Edwards</h3>
                <p>Chef Lead</p>
            </div>
            <div className="Chef">
                <img src={chef2} alt="Cheif" loading='lezy' />
                <h3>Ronald Richards</h3>
                <p>Chef Assistant</p>
            </div>
            <div className="Chef">
                <img src={chef3} alt="Cheif" loading='lezy' />
                <h3>Leslie Alexander</h3>
                <p>Chef Assistant</p>
            </div>
        </div>
        <img src={img} alt="" loading='lezy' className='absolute top-0 left-0 chefup lg:block md:hidden hidden' />
    </section>
  )
}

export default Chefe