// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Inbox.css';
// import { AppContext } from '../../context/AppContext';

// const Inbox = () => {
//   useEffect(() => {
//     // const [userInbox, setUserInbox] = useState([]);
//     const { setCurrentUser } = useContext(AppContext);

//     axios
//       .get(`/api/chat/${currentUser.inbox}`)
//       .then((response) => {
//         setConversation(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   if (conversation.participants[0] === currentUser.id) {
//     let user = conversation.participants[0];
//     let match = conversation.participants[1];
//   } else {
//     let user = conversation.participants[1];
//     let match = conversation.participants[0];
//   }

//   // Conversation, participants, message, time, id,
//   return (
//     <div>
//       {userInbox.map((conversation.participants) => {
//         <div className="background">
//           <div className="title">YOUR MESSAGES</div>

//           <div className="incoming">
//             <span className="avatar">{match.avatar}</span>

//             <div className="messageBox">
//               <div classsName="messageTitle">SUBJECT: HI!</div>
//               <div className="text"> {conversation.participant.text} </div>
//             </div>
//           </div>

//           <div className="button">
//             <span className="buttonText">Upgrade Membership</span>
//           </div>
//         </div>;
//       })}
//       ;
//     </div>
//   );
// };

// export default Inbox;
