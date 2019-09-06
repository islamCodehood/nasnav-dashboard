import React from 'react';
import SearchIconButton from '../Icons/SearchIconButton/SearchIconButton';
import './SearchInput.scss'

const SearchInput = () => {
    return ( 
        <div>
            <input type="text" name="search" id="search" className=" p-3" placeholder="Search" />
            <SearchIconButton />
        </div>
     );
}
 
export default SearchInput;