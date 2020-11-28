import React from 'react';

const MessageCard = (
  {
    /*data*/
  }
) => {
  return (
    <div>
      <div className="messageBar" style={{ width: 200, height: 50 }}>
        <div className="matchImage" float="left">
          <img
            src=""
            alt="profile-picture"
            width={250}
            height={250}
            roundedCircle
          />
        </div>
        <div class="sender">{/* {data.firstName} */}</div>
        <div className="messagePreview" float="right">
          {/* {data.lastMessage} */}
        </div>
      </div>
    </div>
  );
};

export default MessageCard;

//     <div>
//       <div>
//         <div className="background">
//           <div className="title">YOUR MESSAGES</div>

//           {inbox &&
//             inbox.map((chat) => {
//               return (
//                 <div className="incoming">
//                   <span className="avatar">{chat.avatar}</span>

//                   <div className="messageBox">
//                     <div classsName="messageTitle">{chat.firstName}</div>
//                     <div className="text"> {chat._id}</div>
//                   </div>
//                 </div>
//               );
//             })}
//           {/* <div className="button"> */}
//           {/* <span className="buttonText">Upgrade Membership</span> */}
//           {/* </div> */}
//         </div>
//         ; ;
//       </div>
//     </div>
//   );
// };

// export default Inbox;
