import React from 'react';  
import BurgerIcon from '../Icons/BurgerIcon/BurgerIcon';

const Action = () => {
    return ( 
        <div className="Pages-pag d-flex flex-column align-items-between">
            <div className="row no-gutters justify-content-start px-3">
                <BurgerIcon />
                <span className="small mt-1">Action</span>
            </div>
            <div className="row no-gutters justify-content-between align-items-center px-3 pagination-links-wrapper">
                <a href="#/">Create new brand</a>
            </div>
        </div>
     );
}
 
export default Action;