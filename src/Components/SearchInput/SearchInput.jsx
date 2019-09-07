import React from 'react';
import SearchIconButton from '../Icons/SearchIconButton/SearchIconButton';
import './SearchInput.scss'

const SearchInput = () => {
    return ( 
        <div className="col-3 text-right">
            <input type="text" name="search" id="search" className=" p-2" placeholder="Search" />
            <SearchIconButton />
        </div>
     );
}
 
export default SearchInput;