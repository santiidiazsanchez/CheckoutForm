'use client'

import React, { useState } from 'react';
import { TypographyHeading, TypographyText } from './Typography'

function CardItem({ img, name, code, price }) {

    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = (e) => {
        e.preventDefault(); // Evitar que el botón "-" recargue la página
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = (e) => {
        e.preventDefault(); // Evitar que el botón "+" recargue la página
        setQuantity(quantity + 1);
    };

    return (
        <div className='text-center text-lg-start row row-cols-1 row-cols-lg-3 g-4 my-2'>
            <div className="col">
                <img
                    src={img}
                    className="img-fluid rounded"
                    alt="..."
                />
            </div>
            <div className="col">
                <div className="d-flex flex-column justify-content-center h-100">
                    <TypographyHeading
                        centerText={false}
                        children={name}
                        colActive={false}
                        level={'5'}
                        margin={'1'}
                    />
                    <TypographyText
                        centerText={false}
                        children={code}
                        colActive={false}
                        margin={'1'}
                        weight={'normal'}
                    />
                    <TypographyText
                        centerText={false}
                        children={price + ' $'}
                        colActive={false}
                        margin={'1'}
                        weight={'normal'}
                    />
                </div>
            </div>
            <div className="col">
                <div className='d-flex justify-content-center justify-content-lg-end align-items-center h-100'>
                    <button className='btn btn-primary btn-sm rounded-start rounded-0' onClick={decreaseQuantity}>
                        -
                    </button>
                    <input id={code} type="text" className="form-control form-control-sm w-25 text-center rounded-0" defaultValue={quantity} key={quantity} disabled />
                    <button className='btn btn-primary btn-sm rounded-end rounded-0' onClick={increaseQuantity}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItem