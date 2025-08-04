import React from 'react'
import Spacial1 from '../../IMG/spacial1.png'
import Spacial2 from '../../IMG/spacial2.png'
import Spacial3 from '../../IMG/spacial3.png'

const Spacial = () => {
  return (
    <div className='spacial flex justify-between items-center lg:flex-row md:flex-row sm:flex-col flex-col lg:px-10 md:px-5 sm:px-3 px-1 py-10 gap-5'>
        <div className="spacial-item lg:w-1/3 md:w-1/2 sm:w-full w-full px-5">
            <div className="text-white text-start w-1/2">
                <h4>on this week</h4>
                <h2>spicy fried chicken</h2>
                <p>limite time offer</p>
                <button>order now</button>
            </div>
            <div className="spacial-image w-1/2">
                <img src={Spacial1} alt="" className='w-full' />
            </div>
        </div>
        <div className="spacial-item lg:w-1/3 md:w-1/2 sm:w-full w-full px-5">
            <div className="text-white text-start w-1/2">
                <h4>WELCOME FRESHEAT</h4>
                <h2>TODAY SPACIAL FOOD</h2>
                <p>limite time offer</p>
                <button>order now</button>
            </div>
            <div className="spacial-image w-1/2">
                <img src={Spacial2} alt="" className='w-full' />
            </div>
        </div>
        <div className="spacial-item lg:w-1/3 md:w-1/2 sm:w-full w-full px-5">
            <div className="text-white text-start w-1/2">
                <h4>on this week</h4>
                <h2>SPECIAL CHICKEN ROLL</h2>
                <p>limite time offer</p>
                <button>order now</button>
            </div>
            <div className="spacial-image w-1/2">
                <img src={Spacial3} alt="" className='w-full' />
            </div>
        </div>
    </div>
  )
}

export default Spacial