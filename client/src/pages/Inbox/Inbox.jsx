import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import './Inbox.css';

const Inbox = () => {
  const [userInbox, setUserInbox] = useState([]);
  const [conversation, setConversation] = useState();
  const [user, setUser] = useState();
  const [match, setMatch] = useState();
  const { currentUser } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`/api/chat/${currentUser.inbox}`)
      .then((response) => {
        setConversation(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (conversation.participants[0] === currentUser.id) {
    setUser(conversation.participants[0]);
    setMatch(conversation.participants[1]);
  } else {
    setUser(conversation.participants[1]);
    setMatch(conversation.participants[0]);
  }

  // Conversation, participants, message, time, id,
  return (
    <div>
      {userInbox.map((conversation) => {
        return (
          <>
            <div className="background">
              <div className="title">YOUR MESSAGES</div>

              <div className="incoming">
                <span className="avatar">{match.avatar}</span>

                <div className="messageBox">
                  <div classsName="messageTitle">SUBJECT: HI!</div>
                  <div className="text"> {conversation.participant.text} </div>
                </div>
              </div>

              <div className="button">
                <span className="buttonText">Upgrade Membership</span>
              </div>
            </div>
            ;
          </>
        );
      })}
      ;
    </div>
  );
};

export default Inbox;
