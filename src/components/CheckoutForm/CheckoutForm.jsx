'use client'

import React, { useState } from 'react';
import { TypographyHeading, TypographyText } from '../Typography';
import DeliveryInformation from './DeliveryInformation';
import ScheduleDelivery from './ScheduleDelivery';
import PaymentMethod from './PaymentMethod';
import OrderSummary from './OrderSummary';

function CheckoutForm() {

    const checked = true;
    const [isChecked, setIsChecked] = useState(checked);

    const handleSwitchChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Tu lógica para enviar el formulario aquí
    };

    return (
        <form className='row py-5'>

            {/* Tittle */}
            <div className="col-lg-6">
                <TypographyHeading
                    centerText={false}
                    children={'Delivery Information'}
                    colActive={false}
                    level={'5'}
                    margin={'4'}
                />
            </div>
            <div className="d-none d-lg-flex col-lg-6">
                <TypographyHeading
                    centerText={false}
                    children={'Summary Order'}
                    colActive={false}
                    level={'5'}
                    margin={'4'}
                />
            </div>

            <div className='col-lg-6'>

                {/* First Form */}

                <div className="card">
                    <div className="card-body">
                        <DeliveryInformation />
                    </div>
                </div>

                {/* Second Form */}

                <TypographyHeading
                    centerText={false}
                    children={'Payment Method'}
                    colActive={false}
                    level={'5'}
                    margin={'4'}
                />

                <div className="card">
                    <div className="card-body">
                        <PaymentMethod />
                    </div>
                </div>

                {/* Third Form */}

                <div className='d-flex align-items-center justify-content-between gap-4'>
                    <TypographyHeading
                        centerText={false}
                        children={'Schedule Delivery'}
                        colActive={false}
                        level={'5'}
                        margin={'4'}
                    />

                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            checked={isChecked}
                            onChange={handleSwitchChange}
                        />
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <ScheduleDelivery isChecked={isChecked} />
                    </div>
                </div>

            </div>

            <div className='col-lg-6'>

                <div className="d-lg-none col-lg-6">
                    <TypographyHeading
                        centerText={false}
                        children={'Summary Order'}
                        colActive={false}
                        level={'5'}
                        margin={'4'}
                    />
                </div>

                {/* Summary Form */}

                <div className="card h-100">

                    <div className="card-body">
                        <OrderSummary />
                    </div>

                    <hr className='m-0 text-secondary' />
                    <div className='m-4'>
                        <div className='d-flex justify-content-between'>
                            <TypographyText
                                centerText={false}
                                children={'Subtotal'}
                                colActive={false}
                                margin={'2'}
                            />
                            <TypographyText
                                centerText={false}
                                children={'440.00' + ' $'}
                                colActive={false}
                                margin={'2'}
                                weight={'bold'}
                            />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <TypographyText
                                centerText={false}
                                children={'Shipping'}
                                colActive={false}
                                margin={'2'}
                            />
                            <TypographyText
                                centerText={false}
                                children={'--'}
                                colActive={false}
                                margin={'2'}
                                weight={'bold'}
                            />
                        </div>
                    </div>
                    <hr className='m-0 text-secondary' />

                    <div className="m-4">
                        <div className='d-flex justify-content-between'>
                            <TypographyText
                                centerText={false}
                                children={'Total (USD)'}
                                colActive={false}
                                margin={'2'}
                            />
                            <TypographyText
                                centerText={false}
                                children={'440.00' + ' $'}
                                colActive={false}
                                margin={'2'}
                                weight={'bold'}
                            />
                        </div>
                    </div>

                    <button className='btn btn-primary mt-auto m-4' type="submit">
                        Confirm Order
                    </button>

                </div>

            </div>


        </form>
    )
}

export default CheckoutForm