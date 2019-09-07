import React from 'react'; 
import Logo from '../Logo/Logo'
import NavMenu from '../NavMenu/NavMenu'
import SearchInput from '../SearchInput/SearchInput';
import Avatar from '../Avatar/Avatar';
import UserName from '../UserName/UserName';
import AccountSettings from '../AccountSettings/AccountSettings';
import MessagesLink from '../MessagesLink/MessagesLink';
import NotificationLink from '../NotificationLink/NotificationLink';
import Sorting from '../Sorting/Sorting';
import Status from '../Status/Status';
import Pages from '../Pages/Pages';
import Action from '../Action/Action';
import './Header.scss'

const Header = () => {
    return ( 
        <div className="d-flex flex-column header-wrapper  px-5 py-3 ">
            <div className="row no-gutters">
                <Logo />
                <NavMenu />
                <SearchInput />
            </div>
            <div className="row no-gutters justify-content-between">
                <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                    <Avatar />
                    <UserName />
                    <AccountSettings />
                    <div className="d-flex justify-content-between">
                        <MessagesLink />
                        <NotificationLink />
                    </div>
                </div>
                <div className="col-9 d-flex justify-content-between">
                    <Sorting />
                    <Status />
                    <Pages />
                    <Action />
                </div>
            </div>
        </div>
     );
}
 
export default Header;