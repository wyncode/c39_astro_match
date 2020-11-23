import React from 'react';
import './Inbox.css';
/*import {Message, Title, Sender, Recipient, SenderAvatar} from = require(');*/


const Inbox = () => {
  return(
    <div>

      <div className="background">

        <div className="title">YOUR MESSAGES</div>

          <div className="incoming"> 

            <span className="avatar" /*backgroundimg={}*/></span>

            <div className="messageBox">
              <div classsName="messageTitle">SUBJECT: msgTitle</div>
              <div className="text"> incomingMessage </div>
            </div>

          </div>

          <div className="button"><span className="buttonText">Upgrade Membership</span></div>

      </div>

    </div>


  );
};

export default Inbox;
