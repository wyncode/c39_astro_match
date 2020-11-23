import React, { useContext, /*useState*/ } from 'react';
// import { AppContext } from '../../context/AppContext';
// import axios from 'axios';
import MessageCard from './MessageCard';
import './Inbox.css';


const Inbox = () => {
  return (
    <div>
      <div className="messageCard" >
          {/* {data.map((data, index) => { */}
              {/* return( */}
                <MessageCard key="{data._id}" description="{data.lastMessage}" sender="{data.firstName}" imgName="{data.imgName}" />
                {/* ); */}
          {/* })} */}
      </div>
    </div>
  )
}

export default Inbox