import React from 'react';
import NotificationIcon from '../Icons/NotificationIcon/NotificationIcon'
import './NotificationLink.scss'
const NotificationLink = () => {
    return ( 
        <div className="row no-gutters justify-content-center align-items-center notification">

            <NotificationIcon />
            <span>Notification</span>
        </div>
    );
}
 
export default NotificationLink;