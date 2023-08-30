'use client'

import React, { useState } from 'react';

function PaymentMethod() {

    const [selectedPayment, setSelectedPayment] = useState('online');

    const handlePaymentChange = (e) => {
        setSelectedPayment(e.target.value);
    };

    return (
        <>

            {/* Name & Mobile Number */}

            <div className='row row-cols-lg-3 g-4 mx-auto'>
                <div className="col form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="CheckOnlinePayment"
                        value="online"
                        checked={selectedPayment === "online"}
                        onChange={handlePaymentChange}  
                        required
                    />
                    <label className="form-check-label" htmlFor="CheckOnlinePayment">
                        Online Payment
                    </label>
                </div>
                <div className="col form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="CheckDeliveryPayment"
                        value="delivery"
                        checked={selectedPayment === "delivery"}
                        onChange={handlePaymentChange}
                        required
                    />
                    <label className="form-check-label" htmlFor="CheckDeliveryPayment">
                        Cash On Delivery
                    </label>
                </div>
                <div className="col form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="CheckPOSOnDeliveryPayment"
                        value="posondelivery"
                        checked={selectedPayment === "posondelivery"}
                        onChange={handlePaymentChange}
                        required
                    />
                    <label className="form-check-label" htmlFor="CheckPOSOnDeliveryPayment">
                        POS On Delivery
                    </label>
                </div>
            </div>

        </>
    )
}

export default PaymentMethod