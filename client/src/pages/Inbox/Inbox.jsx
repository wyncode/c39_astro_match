import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Inbox.css';
import { AppContext } from '../../context/AppContext';

const Inbox = () => {
  const [inbox, setInbox] = useState([]);
  const [user, setUser] = useState('');
  const [match, setMatch] = useState('');
  const { currentUser, recipient, setRecipient } = useContext(AppContext);

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
                  {/* <Link to={`/conversation/${chat.conversation_id}`}> */}
                  <div className="messageBox">
                    <Link
                      to={`/conversation/${chat.conversation_id}`}
                      onClick={() => setRecipient(chat.match_id)}
                    >
                      <div classsName="messageTitle">{chat.firstName}</div>
                      <div className="text"> {chat.conversation_id}</div>
                    </Link>
                  </div>
                  {/* </Link> */}
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
