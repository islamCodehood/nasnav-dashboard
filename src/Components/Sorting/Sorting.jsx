import React from 'react';
import SortIcon from '../Icons/SortIcon/SortIcon'
import CaretDownIcon from '../Icons/CaretDownIcon/CaretDownIcon'
import './Sorting.scss'
const Sorting = () => {
    return ( 
        <div className="sorting-option d-flex flex-column align-items-between">
            <div className="row no-gutters justify-content-start px-3">
                <SortIcon />
                <span>Sorting</span>
            </div>
            <div className="row no-gutters justify-content-between align-items-center px-3">
                <span>Descending</span>
                <CaretDownIcon />
            </div>
        </div>
     );
}
 
export default Sorting;