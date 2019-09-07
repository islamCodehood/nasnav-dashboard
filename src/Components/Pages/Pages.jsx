import React from 'react';
import BurgerIcon from '../Icons/BurgerIcon/BurgerIcon';
import CaretDownIcon from '../Icons/CaretDownIcon/CaretDownIcon';
import './Pages.scss'
const Pages = () => {
    return ( 
        <div className="Pages-pag d-flex flex-column align-items-between">
            <div className="row no-gutters justify-content-start px-3">
                <BurgerIcon />
                <span className="small mt-1">Pages</span>
            </div>
            <div className="row no-gutters justify-content-between align-items-center px-3 pagination-links-wrapper">
                <a href="#/">Next</a>
                <div>
                    <span>1</span>
                    <CaretDownIcon />
                </div>
                <a href="#/">Previous</a>
            </div>
        </div>
     );
}
 
export default Pages;