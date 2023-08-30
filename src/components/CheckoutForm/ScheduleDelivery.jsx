import React from 'react';

function ScheduleDelivery({ isChecked }) {
    return (
        <>
            {/* Start & End Dates */}
            <div className='row mb-4 g-4'>
                <div className='col-lg-6'>
                    <label htmlFor="StartDateInput" className="form-label">
                        Start Date
                    </label>
                    <input
                        type="date" className="form-control" id="StartDateInput" disabled={!isChecked} required
                    />
                </div>
                <div className='col-lg-6'>
                    <label htmlFor="EndDateInput" className="form-label">
                        End Date
                    </label>
                    <input
                        type="date" className="form-control" id="EndDateInput" disabled={!isChecked} required
                    />
                </div>
            </div>

            {/* Address */}
            <div className='row row-cols-1 g-4'>
                <div className='col'>
                    <label htmlFor="TextInput" className="form-label d-flex justify-content-between">
                        Note
                        <small className='text-secondary'>(Optional)</small>
                    </label>
                    <input
                        type="text" className="form-control" id="TextInput"
                        placeholder='Note' disabled={!isChecked}
                    />
                </div>
            </div>
        </>
    );
}

export default ScheduleDelivery;
