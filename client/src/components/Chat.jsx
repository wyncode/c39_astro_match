import React, { useState, useEffect } from 'react';
import socketIo from '../utils/socket-io';

const Chat = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socketIo.on('receive message', (data) => {
      addMessage(data);
    });
  }, [chats]);

  const addMessage = (msg) => {
    setChats(chats.concat({ author: msg.author, message: msg.message }));
  };

  const sendMessage = (e) => {
    e.preventDefault();
    socketIo.emit('message', { author: username, message: message });
    setMessage('');
  };
  return (
    <div className="container">
      <div className="messages">
        {chats.map((chat) => {
          return (
            <div>
              {chat.author}: {chat.message}
            </div>
          );
        })}
      </div>
      <div className="card-footer">
        <input
          type="name"
          name="Username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="messages"
          placeholder="Messages"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
