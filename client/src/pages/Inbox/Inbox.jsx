import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Inbox.css';
import { AppContext } from '../../context/AppContext';

const Inbox = () => {
  const [inbox, setInbox] = useState([]);
  const [user, setUser] = useState('');
  const [last, setLast] = useState('');
  const [match, setMatch] = useState('');
  const { currentUser, recipient, setRecipient } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`/api/users/inbox`, { withCredentials: true })
      .then((response) => {
        setInbox(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`/api/users/lastMessage`, { withCredentials: true })
      .then((response) => {
        setLast(response.data);
        console.log(last);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="background">
          <div className="titleInfo">YOUR MESSAGES</div>
          {inbox &&
            inbox.map((inbox, i) => {
              return (
                <div className="incoming">
                  <span>
                    <Link to={`/match/${inbox.match_id}`}>
                      <img src={`${inbox.avatar}`} className="avatar" />
                    </Link>
                  </span>

                  <Link
                    to={`/conversation/${inbox.conversation_id}`}
                    onClick={() => setRecipient(inbox.match_id)}
                    className="messageBox"
                  >
                    <div className="messageTitle">{inbox.firstName}</div>
                    <div className="text">Last Message: {last && last[i]} </div>
                  </Link>
                </div>
              );
            })}
          <div className="button">
            <span className="buttonText">Upgrade Membership</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
