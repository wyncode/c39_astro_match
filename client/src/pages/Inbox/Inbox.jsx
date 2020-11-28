import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Inbox.css';
import { AppContext } from '../../context/AppContext';
import { ChangeStream } from 'mongodb';

const Inbox = () => {
  const [inbox, setInbox] = useState([]);
  const [user, setUser] = useState('');
  const [match, setMatch] = useState('');
  const { currentUser } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`/api/users/inbox`, { withCredentials: true })
      .then((response) => {
        setInbox(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(inbox);
  console.log(inbox.data);

  return (
    <div>
      {inbox &&
        inbox.map((chat) => {
          return (
            <div className="messageBar" style={{ width: 200, height: 50 }}>
              <div className="matchImage" float="left">
                <img
                  src={chat.avatar}
                  alt="profile-picture"
                  width={250}
                  height={250}
                  roundedCircle
                />
              </div>
              <div class="sender">{chat.firstName}</div>
              <div className="messagePreview" float="right">
                {chat.id}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Inbox;
