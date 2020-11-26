import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import MessageCard from './MessageCard';
import './Inbox.css';


const Inbox = () => {

  const App = () => {
    const { setCurrentUser } = useContext(AppContext);
      useEffect(() => {
        axios
          .get(`/api/users/${id}`)
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);

  return (
    <div>
      <div className="messageCard" >
          {data.map((data, index) => {
              return(
                <MessageCard key="{data._id}" description="{data.lastMessage}" sender="{data.firstName}" imgName="{data.imgName}" />
                );
          })};
      </div>
    </div>
  )
}

export default Inbox;
