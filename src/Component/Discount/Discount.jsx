import React from 'react'

const Discount = () => {
  return (
    <section>
        <div className="Discount-img"></div>
        <div className="Discount-info">
            <h4>Special Offer</h4>
            <h3>Get 30% Discount Every Item</h3>
            <div className="Discount-time">
                <div className="time">
                    <p></p>
                    <span>days</span>
                </div>
                <div className="time">
                    <p></p>
                    <span>hrs</span>
                </div>
                <div className="time">
                    <p></p>
                    <span>mins</span>
                </div>
                <div className="time">
                    <p></p>
                    <span>secs</span>
                </div>
            </div>
            <button>order now</button>
        </div>
    </section>
  )
}

export default Discount