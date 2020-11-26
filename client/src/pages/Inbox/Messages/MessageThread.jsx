import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MessageCard from '../../Inbox/Messages/MessageCard';
import './MessageThread.css';

function MessageThread() {
    // const [user, setUser] = useState('');
    // const [userImage, setUserImage] = useState('');
    // const [matchImage, setMatchImage] = useState('');
    // const [participants, setParticipants] = useState('');
    // const [userMessage, setUserMessage] = useState('');
    // const [matchMessage, setmatchMessage] = useState('');

useEffect(() => {
axios
    .get('api/chat', { withCredentials: true })
    .then((response) => {(response.data)}
        setParticipant(data.participants[i]);
        setUserMessage(messages[i]);
        setmatchMessage(response.)
    })
    .catch((error) => {
        swal(`Oops!`, 'Something went wrong.');




    axios
        .get('/api/chat', { withCredentials: true })
        .then((response) => {(response.data)};
        setFilteredTasks(response.data);
        })
        .catch((error) => {
        swal(`Oops!`, 'Something went wrong.');
        });
    }, [setTasks, setFilteredTasks, search, loading]);




    // get current conversation id
    // attach message?

    async handleConversationData(conversation, user, match) {
        await('./api')
        (await this._isMounted) &&
          this.setState({
            room: room_id,
            username: username,
            userID: userID
          });
        this.updateChat();
      }

    useEffect(() => {
        fetch('./api/')
    return (
    );

    async handleConversation(conversation, user, match) {
        await('./api')


    }; 

    call from message schema
        <Message
        image={item.image}
        name={item.name}
        lastMessage={item.message}
      />

        <div>

            <div className="back" Link to="/Inbox" name="back">Go to Your Messages</div>

                <div className="title">`DIRECT MESSAGES WITH ${match.name}`</div>

                    <div className="duoLogo">
                        <div className="userImage" name="userImage">{user.avatar}</div>
                        <div className="matchImage" name="matchImage">{match.avatar}</div>
                    </div>

            <div classname="window">
                <div className="display"><MessageCard /></div>
            </div>

            <div className="inputFooter">
                <div className="input" type="input">Type Here</div> 
                <div className="button" name="submit" onClick{(e) => setMessage(e.target.value)}>
                <span className="buttonText">Send</span>
                </div>
            </div>

            </div>
        </div>
    )
}

export default MessageThread
const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.password !== password.confirmPassword) {
        swal('Error', 'Oops, passwords must match.');
      return;
    }
    await axios.put(
      '/api/users/password',
      { password: password.password },
      { withCredentials: true }
    );
    swal('Updated!', 'Your password has been updated!');
    history.push('/login');



const form = document.querySelector('form');
const input = document.querySelector('input');
const chatbox = document.querySelector('#chatbox');
const imFeelingLonely = document.querySelector('button');
const from = ['Me', 'Myself', 'I'];
let id = 3;
let apiURL = "https://api.chucknorris.io/jokes/random";
const timestamp = new Date().toLocaleTimeString('en-US');

form.addEventListener('submit', hitSubmit);
imFeelingLonely.addEventListener('click', chuckTime);

function hitSubmit(go) {
  go.preventDefault();
  id++
  const randomNumber = Math.floor(Math.random() * me.length);
//   const timestamp = new Date().toLocaleTimeString('en-US');
  
  const giveJoke = document.createElement('div');
  giveJoke.className = 'message';
  giveJoke.setAttribute('id', id);
  giveJoke.innerHTML = `
    <span>${timestamp}</span>
    <span class="sender">${from[randomNumber]}:</span>
    <span>${input.value}</span>
    <span class="delete" onclick="deleteJoke(${id})">❌</span>`;
  chatbox.appendChild(giveJoke);
  input.value = ''
}


function deleteJoke(id) {
    const joke = document.getElementById(id)
    joke.remove();
}

function chuckTime(){
  
    fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
        let joke = data.value
        let chuckJoke = document.createElement('div')
        chuckJoke.className = 'message'
        chuckJoke.setAttribute('id', id);
        chuckJoke.innerHTML =
        `
        <span>${(timestamp)}</span>
          <span class="sender">Fact:</span>
          <span>${joke}</span>
          <span class="delete" onclick="deleteJoke(${id})">❌</span>
        `;
        chatbox.appendChild(chuckJoke);
    });


}