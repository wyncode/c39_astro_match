import React, { useState, useEffect } from 'react';
import socketIo from '../../../utilities/socket.io';
import axios from 'axios';
import Sender from './MessageCard2';
import Match from './MessageCard3';
import './MessageThread.css';
import { TextField } from '@material-ui/core';

const Chat = (props) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [toggleMe, setToggleMe] = useState(false);
  const [particpants, setParticpants] = useState([]);

  const sendMessage = async (event) => {
    event.preventDefault();
    try {
      console.log('i tried');
      let response = await axios.post(
        '/api/messages',
        {
          participants: {
            recipient: '5fc1ae7f914cfe5ecb088a25',
            sender: '5fbfbcbfbefd1f76df2a00d4'
          },
          text: message,
          conversation: '5fc1b07dae94215ee0e7cbcb'
        },
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    socketIo.emit('send message', { author: username, message: message });
    setMessage('');
  };

  useEffect(() => {
    socketIo.on('change data', (data) => {
      console.log('receive message', data);
      axios
        .get('/api/chat/5fc1b07dae94215ee0e7cbcb', { withCredentials: true })
        .then((response) => setChats(response.data))
        .catch((e) => console.log(e));
    });
  }, [chats]);

  return (
    <div className="thread-container">
      <div>
        <p className="link-dm"> Go to Your Messages </p>
        <p className="title-dm"> DIRECT MESSAGES WITH JOHN</p>
        <div className="dm-container">
          <Sender />
          {chats &&
            chats.map((chat) => {
              if (chat.from === 'user') {
                return <Sender from={chat.from} />;
              } else {
                return <Match from={chat.from} />;
              }
            })}
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
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined"/> */}
        <button onClick={sendMessage} className="submit-dm">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
