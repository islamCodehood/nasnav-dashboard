import React from 'react';
import SideMenu from '../SideMenu/SideMenu';
import './BodyWrapper.scss'

const BodyWrapper = () => {
    return ( 
        <div className="row no-gutters px-5 justify-content-between body-wrapper">
            <div className="col-3 d-flex">
                <SideMenu />
            </div>
            <div className="col-9"></div>
        </div>
     );
}
 
export default BodyWrapper;