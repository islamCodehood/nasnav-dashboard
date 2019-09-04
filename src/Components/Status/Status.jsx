import React from 'react';
import TogglingIcon from '../Icons/TogglingIcon/TogglingIcon'
import CaretDownIcon from '../Icons/CaretDownIcon/CaretDownIcon'
import './Status.scss'

const Status = () => {
    return ( 
        <div className="status-option d-flex flex-column align-items-between">
            <div className="row no-gutters justify-content-start px-3">
                <TogglingIcon />
                <span>Status</span>
            </div>
            <div className="row no-gutters justify-content-between align-items-center px-3">
                <span>Live (ON)</span>
                <CaretDownIcon />
            </div>
        </div>
     );
}
 
export default Status;