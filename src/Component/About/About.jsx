import React from 'react'
import about1 from "../../IMG/about1.png"
import about2 from "../../IMG/about2.png"
import "./About.css"

const About = () => {
  return (
    <section className='about flex justify-between items-center gap-5 text-center'>
        <div className="about-img lg:w-4/12 md:w-3/12 lg:block md:hidden hidden" style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2023/08/31/15/42/grill-8225405_1280.jpg)",borderRadius:"0 50% 50% 0"}}>
            <img src={about1} alt="" loading="lazy" />
        </div>
        <div className="about-content lg:w-4/12 md:w-6/12 w-full px-5">
            <h4>about us</h4>
            <h2>Variety of flavours from american cuisine</h2>
            <p>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that</p>
            <button>order now</button>
        </div>
        <div className="about-img lg:w-4/12 md:w-3/12 lg:block md:hidden hidden" style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/11/19/12/44/burgers-1839090_1280.jpg)",borderRadius:"50% 0 0 50%"}}>
            <img src={about2} alt="" loading="lazy" />
        </div>
    </section>
  )
}

export default About