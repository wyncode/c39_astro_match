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

  //   let
  //   if (inbox.participant === currentUser.id) {
  //   setUser(inbox.participant[0]);
  //   setMatch(inbox.participant[1]);
  // } else {
  //   setUser(inbox.participant[1]);
  //   setMatch(inbox.participant[0]);
  // }

  // let news = ());
  console.log(inbox);

  return (
    <div>
      <div>
        <div className="background">
          <div className="title">YOUR MESSAGES</div>

          {inbox &&
            inbox.map((chat) => {
              return (
                <div className="incoming">
                  <span className="avatar">{chat.id}</span>

                  <div className="messageBox">
                    <div classsName="messageTitle">SUBJECT: HI!</div>
                    <div className="text"> {chat._id}</div>
                  </div>
                </div>
              );
            })}
          {/* <div className="button"> */}
          {/* <span className="buttonText">Upgrade Membership</span> */}
          {/* </div> */}
        </div>
        ; ;
      </div>
    </div>
  );
};

export default Inbox;
