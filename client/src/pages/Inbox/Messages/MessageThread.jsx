import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import socketIo from '../../../utilities/socket.io';
import axios from 'axios';
import Sender from './SenderCard';
import Match from './MatchCard';
import './MessageThread.css';
import { AppContext } from '../../../context/AppContext';

const Chat = (props) => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [participants, setParticipants] = useState('');
  const messagesEndRef = useRef(null);
  const { recipient, setRecipient, currentUser } = useContext(AppContext);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    getMessages();
  }, [currentUser]);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  useEffect(() => {
    socketIo.on('change data', (data) => {
      console.log('receive message', data);
      getMessages();
      scrollToBottom();
    });
  }, [chats]);

  const getMessages = async () => {
    try {
      let response = await axios.get(`/api/chat/${props.match.params.id}`, {
        withCredentials: true
      });
      setChats(response.data.messages);
      console.log(response.data.participants[0].ID);
      console.log(currentUser?._id);
      if (response.data.participants[0].ID !== currentUser?._id) {
        setParticipants(response.data.participants[0]);
      } else {
        setParticipants(response.data.participants[1]);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    try {
      console.log('i tried');
      let response = await axios.post(
        '/api/messages',
        {
          participants: {
            recipient: `${recipient}`,
            sender: `${currentUser?._id}`
          },
          text: message,
          conversation: `${props.match.params.id}`
        },
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    socketIo.emit('send message', { message: message });
    setMessage('');
  };

  return (
    <div className="thread-container">
      <div>
        <Link to="/inbox">
          {' '}
          <p className="link-dm"> Go to Your Messages </p>
        </Link>
        <p className="title-dm">
          {' '}
          DIRECT MESSAGES WITH {participants.firstName || 'MATCH'}
        </p>
        <div className="dm-container">
          {chats &&
            chats.map((chat) => {
              if (chat.from === 'user') {
                return (
                  <Sender
                    from={chat.from}
                    text={chat.text}
                    avatar={currentUser?.avatar}
                  />
                );
              } else {
                return (
                  <Match
                    from={chat.from}
                    text={chat.text}
                    avatar={participants.avatar}
                  />
                );
              }
            })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="input-dm">
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-control"
        />
        <button onClick={sendMessage} className="submit-dm">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
