import React from 'react';
import { tsPropertySignature } from '@babel/types';

const NavMenuItem = (props) => {
    return ( 
        <li>
            <a href="#/">{props.itemName}</a>
        </li>
     );
}
 
export default NavMenuItem;