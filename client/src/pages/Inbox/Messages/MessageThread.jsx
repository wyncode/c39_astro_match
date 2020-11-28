import React, { useState, useEffect } from 'react';
import socketIo from '../../../utilities/socket.io';
import axios from 'axios';
import MessageCard2 from './MessageCard2';

const Chat = (props) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [toggleMe, setToggleMe] = useState(false);
  const [particpants, setParticpants] = useState([]);
  //   const[text, setText] = useState([])

  const sendMessage = async (event) => {
    event.preventDefault();
    //we want to create a object in order to assign an author and message
    //the first paramter always has to be a string
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
    //clear message input box upon send
    setMessage('');
  };

  //   useEffect(()=>{
  //     //   let response = await axios.get('/chat/5fc1b07dae94215ee0e7cbcb', {withCredentials: true})
  //     fetch('/chat/5fc1b07dae94215ee0e7cbcb').then(res => res.json()).then(data => )
  //   })

  // useEffect(()=>{

  // }, [])

  useEffect(() => {
    // you need the first parameter to match the .emit on server side
    // if there is an on there must be an emit
    //when database changes, socket needs to render again
    socketIo.on('change data', (data) => {
      console.log('receive message', data);
      axios
        .get('/api/chat/5fc1b07dae94215ee0e7cbcb', { withCredentials: true })
        .then((response) => setChats(response.data))
        .catch((e) => console.log(e));
      //   console.log(data)
      //   addMessage()
      // setToggleMe(!toggleMe)
    });
  }, [chats]);

  return (
    <>
      <div className="dm-container">
        <p> Go to Your Messages </p>
        <p> DIRECT MESSAGES WITH JOHN</p>
        <div>
          <MessageCard2 />
          {chats.map((chat) => {
            return (
              // <div>
              //   {chat.from} == {chat.text}
              // </div>
              <MessageCard2 text={chat.text} />
            );
          })}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-control"
        />
        <button onClick={sendMessage} className="btn btn-primary form-control">
          Send
        </button>
      </div>
    </>
  );
};

export default Chat;
