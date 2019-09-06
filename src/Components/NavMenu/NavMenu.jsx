import React from 'react';
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import './NavMenu.scss'

const NavMenu = () => {
    const navItems = [
        'NasNav', 'Dashboard home', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item'
    ]
    return ( 
        <nav className="">
            <ul className="top-nav d-flex">
                {
                    navItems.map(item => (
                        <NavMenuItem itemName={item} />
                    ))
                }
                
            </ul>
        </nav>
     );
}
 
export default NavMenu;