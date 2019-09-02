import React from 'react';
import SortIcon from '../Icons/SortIcon/SortIcon'
import CaretDownIcon from '../Icons/CaretDownIcon/CaretDownIcon'
const SortOption = () => {
    return ( 
        <div className="row no-gutters sort">
            <div className="row no-gutters justify-content-start">
                <SortIcon />
                <span>Sorting</span>
            </div>
            <div className="row no-gutters justify-content-between">
                <span>Descending</span>
                <CaretDownIcon />
            </div>
        </div>
     );
}
 
export default SortOption;