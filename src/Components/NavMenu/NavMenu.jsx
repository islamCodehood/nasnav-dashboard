import React from 'react';
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import './NavMenu.scss'

const NavMenu = () => {
    const navItems = [
        'NasNav', 'Dashboard home', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item'
    ]
    return ( 
        <nav className="col-7">
            <ul className="top-nav d-flex">
                {
                    navItems.map((item, index) => (
                        <NavMenuItem itemName={item} key={index} />
                    ))
                }
                
            </ul>
        </nav>
     );
}
 
export default NavMenu;