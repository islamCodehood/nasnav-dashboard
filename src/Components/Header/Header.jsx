import React from 'react'; 
import Logo from '../Logo/Logo'
import NavMenu from '../NavMenu/NavMenu'
import SearchInput from '../SearchInput/SearchInput';

const Header = () => {
    return ( 
        <div className="d-flex flex-column">
            <div className="row no-gutters justify-content-between">
                <Logo />
                <NavMenu />
                <SearchInput />
            </div>
        </div>
     );
}
 
export default Header;