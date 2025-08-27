import React, { useEffect, useState } from 'react'
import './Discount.css'
import DiscountImg from '../../IMG/spacial3.png'
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Discount = () => {
    const time = new Date("2026-12-31T23:59:59").getTime();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = time - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
  return (
    <section className='Discount'>
        <div className="Discount-img lg:w-1/2 md:hidden sm:hidden">
            <img src={DiscountImg} alt="DiscountImg" className='w-full h-full' loading='lazy' />
        </div>
        <div className="Discount-info bg-stone-700 px-10 py-16">
            <h4><span><FontAwesomeIcon icon={faBurger} /></span>Special Offer<span><FontAwesomeIcon icon={faBurger} /></span></h4>
            <h3>Get 30% Discount Every Item</h3>
            <div className="Discount-time">
                <div className="time">
                    <p>{timeLeft.days}</p>
                    <hr />
                    <span>days</span>
                </div>
                <div className="time">
                    <p>{timeLeft.hours}</p>
                    <hr />
                    <span>hrs</span>
                </div>
                <div className="time">
                    <p>{timeLeft.minutes}</p>
                    <hr />
                    <span>mins</span>
                </div>
                <div className="time">
                    <p>{timeLeft.seconds}</p>
                    <hr />
                    <span>secs</span>
                </div>
            </div>
            <button>order now</button>
        </div>
    </section>
  )
}

export default Discount