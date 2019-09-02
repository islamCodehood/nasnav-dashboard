import React from 'react';
import MessageIcon from '../Icons/MessageIcon/MessageIcon'
import './MessagesLink.scss'
const MessagesLink = () => {
    return ( 
        <div className="row no-gutters justify-content-around align-items-center message-notification">
                <MessageIcon />
            <span>Messages</span>
        </div>
    );
}
 
export default MessagesLink;