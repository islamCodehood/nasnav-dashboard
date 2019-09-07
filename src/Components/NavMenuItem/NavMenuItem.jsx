import React from 'react';
import './NavMenuItem.scss'

const NavMenuItem = (props) => {
    return ( 
        <li className="nav-item">
            <a href="#/" className="small">{props.itemName}</a>
        </li>
     );
}
 
export default NavMenuItem;