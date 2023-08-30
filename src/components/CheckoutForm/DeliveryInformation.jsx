import React from 'react';
import { useState } from 'react'; // Importa useState para manejar el estado de los campos

function DeliveryInformation() {
    const [formData, setFormData] = useState({
        name: '',
        mobileNumber: '',
        email: '',
        city: '',
        state: '',
        zip: '',
        stateSelect: '',
        address: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <>
            {/* Name & Mobile Number */}
            <div className='row row-cols-1 row-cols-lg-2 mb-4 g-4'>
                <div className='col'>
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text" className="form-control" id="name"
                        placeholder='Name' required
                        value={formData.name} // Asigna el valor desde el estado
                        onChange={handleInputChange} // Maneja el cambio
                        autoComplete="on"
                    />
                </div>
                <div className='col'>
                    <label htmlFor="mobileNumber" className="form-label">
                        Mobile Number
                    </label>
                    <input
                        type="tel" pattern="[0-9 ]*" className="form-control" id="mobileNumber"
                        placeholder='Mobile Number' required
                        value={formData.mobileNumber} // Asigna el valor desde el estado
                        onChange={handleInputChange} // Maneja el cambio
                    />
                </div>
            </div>

            {/* Email & City */}
            <div className='row mb-4 g-4'>
                <div className='col-lg-6'>
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email" className="form-control" id="email"
                        placeholder='Email' required
                        value={formData.email} // Asigna el valor desde el estado
                        onChange={handleInputChange} // Maneja el cambio
                        autoComplete="on"
                    />
                </div>
                <div className='col-lg-6'>
                    <label htmlFor="city" className="form-label">
                        City
                    </label>
                    <input
                        type="text" className="form-control" id="city"
                        placeholder='City' required
                        value={formData.city} // Asigna el valor desde el estado
                        onChange={handleInputChange} // Maneja el cambio
                    />
                </div>
            </div>

            {/* State & Zip and State */}
            <div className='row mb-4 g-4'>
                <div className='col-lg-6'>
                    <label htmlFor="state" className="form-label">
                        State
                    </label>
                    <input
                        type="text" className="form-control" id="state"
                        placeholder='State' required
                        value={formData.state} // Asigna el valor desde el estado
                        onChange={handleInputChange} // Maneja el cambio
                    />
                </div>
                <div className='col-lg-3'>
                    <label htmlFor="zip" className="form-label">
                        Zip
                    </label>
                    <input
                        type="number" className="form-control" id="zip"
                        placeholder='Zip' required
                        value={formData.zip} // Asigna el valor desde el estado
                        onChange={handleInputChange} // Maneja el cambio
                    />
                </div>
                <div className='col-lg-3'>
                    <label htmlFor="AbbreviatedStatusSelect" className="form-label">
                        State
                    </label>
                    <select className="form-select" aria-label="Default select example" id='AbbreviatedStatusSelect' required>
                        <option defaultValue=''>Open this select menu</option>
                        <option defaultValue="1">One</option>
                        <option defaultValue="2">Two</option>
                        <option defaultValue="3">Three</option>
                    </select>
                </div>
            </div>

            {/* Address */}
            <div className='row row-cols-1 g-4'>
                <div className='col'>
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text" className="form-control" id="address"
                        placeholder='Address' required
                        value={formData.address} // Asigna el valor desde el estado
                        onChange={handleInputChange} // Maneja el cambio
                        autoComplete="on"
                    />
                </div>
            </div>
        </>
    );
}

export default DeliveryInformation;
