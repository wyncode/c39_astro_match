import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import socketIo from '../../../utilities/socket.io';
import axios from 'axios';
import Sender from './MessageCard2';
import Match from './MessageCard3';
import './MessageThread.css';
import { TextField } from '@material-ui/core';
import { AppContext } from '../../../context/AppContext';

const Chat = (props) => {
  // const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  // const [toggleMe, setToggleMe] = useState(false);
  const [participants, setParticipants] = useState('');
  const messagesEndRef = useRef(null);
  const { recipient, setRecipient, currentUser } = useContext(AppContext);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => getMessages(), []);

  useEffect(() => {
    socketIo.on('change data', (data) => {
      console.log('receive message', data);
      getMessages();
      scrollToBottom();
    });
  }, [chats]);

  // const getMessages = () => {
  //   axios
  //   .get('/api/chat/5fc1b07dae94215ee0e7cbcb', { withCredentials: true })
  //   .then((response) => setChats(response.data))
  //   .catch((e) => console.log(e));
  // };

  const getMessages = async () => {
    try {
      let response = await axios.get(`/api/chat/${props.match.params.id}`, {
        withCredentials: true
      });
      // setParticipants(response.data)
      setChats(response.data.messages);
      setParticipants(response.data.participants);
    } catch (error) {
      console.log(error);
    }
  };
  // let filteredTasks = (participants && participants.find((x) => {
  //   return x !== currentUser._id
  // })).ID;
  // console.log(filteredTasks)

  let filteredTasks = (
    participants &&
    participants.find((x) => {
      return x !== currentUser._id;
    })
  ).ID;
  // const filteredPartcipants = participants?.filter((person)=> {
  //   return person.sender_id
  // })

  const sendMessage = async (event) => {
    event.preventDefault();
    setRecipient(filteredTasks);
    try {
      console.log('i tried');
      let response = await axios.post(
        '/api/messages',
        {
          participants: {
            recipient: `${recipient}`,
            sender: `${currentUser._id}`
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

  // const otherParticipant = participants?.find(x => {return x !==currentUser._id})

  return (
    <div className="thread-container">
      <div>
        {/* <Link to="/inbox"> */}{' '}
        <p className="link-dm" onClick={() => props.history.push('/inbox')}>
          {' '}
          Go to Your Messages{' '}
        </p>
        {/* </Link> */}
        <p className="title-dm">
          {' '}
          DIRECT MESSAGES WITH{' '}
          {
            (
              participants &&
              participants.find((x) => {
                return x !== currentUser._id;
              })
            ).firstName
          }
        </p>
        <div className="dm-container">
          <Sender />
          {chats &&
            chats.map((chat) => {
              if (chat.from === 'user') {
                return <Sender from={chat.from} text={chat.text} />;
              } else {
                return <Match from={chat.from} text={chat.text} />;
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
