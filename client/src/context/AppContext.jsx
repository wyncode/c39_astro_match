import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [gender, setGender] = useState('string');

  const user = sessionStorage.getItem('user');

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get(`/api/users/me`, {
          withCredentials: true
        })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => console.error(error));
    }
  }, [currentUser, user]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        gender,
        setGender
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// for the inbox and real-time messages


// const Conversation = ({ place }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [perfectMatch, perfectMatch] = useState(null);
//   const [conversation, setConversation] = useState(null);
//   const [login, setLogin] = useEffect();
//   const [timeout, setTimeout]= = useEffect(0);

//   const user = sessionStorage.getItem('user');

  // Redirect them to log-in if failed UP in Ianne's thing !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // useEffect(() => {
  //     if (user && !currentUser) {
  //     axios
  //       .get(`/api/users/me`, {
  //         withCredentials: true
  //       })
  //       .then(({ data }) => {
  //         setCurrentUser(data);
  //       })
  //       .catch((error) => console.error(error));
  //       setTimeout(() => {
  //       res.redirect(process.env.URL + '/me');
  //       }, 3000);
  //     }
  //   }, [currentUser, user]);


//============================= START HERE - YOUR BUSINESS LOGIC. WE'VE ALMOST CRACKED EVERYTHING :) ==================================


//   useEffect(() => {
//     if (user && perfectMatch) {
//       axios
//         .get(`/api/users/thread`, {
//           withCredentials: true
//         })
//         .then(({ data }) => {
//           setConversation(data);
//         });
//         if (data.id === user.id) {
//           let user = data.id
//         };
//         let mysms = data.messages where messageId === data.user.id //(this isnt gonna work, you haven't figured out how to keep each version separate.
//         //....unless you match for ids))
//         let  data.ids.user_Id
//         set
//         axios.get(`api/messages/`{dataId}``, {
//           withCredentials: true})
//           .then(({data}) => {
//           for let i=0;i<dataId.length;i-- {
//             return dataId.message
//           }

//           })
//         }
        
//         .catch((error) => console.error(error));
//     }
//   }, [currentUser, user]);

// // is it always the user as the requestor, separated in effect, from the sender? Or do we have to define it in each instance?
// // can requestor always be user? Or is there a time these might conflate that you're not seeing? think for future bugs.
// // Otherwise all documents...user===user, stored as objectId[0] and potential===recipient/match etc, stored as objectId[1];


//   useEffect(() => {
//     if (user && !perfectMatch) {
//       let newMatch = req.body.
//       axios
//         .get(`/api/users/me`, {
//           withCredentials: true
//         })
//         .then(({ data }) => {
//           setCurrentUser(data);
//         })
//         .catch((error) => console.error(error));
//     }
//   }, [currentUser, user]);



//   const user = sessionStorage.getItem('user');

//   useEffect(() => {
//     if (user && !currentUser) {
//       axios
//         .get(`/api/users/me`, {
//           withCredentials: true
//         })
//         .then(({ data }) => {
//           setCurrentUser(data);
//         })
//         .catch((error) => console.error(error));
//     }
//   }, [currentUser, user]);
//   return (
//     <div className="tile is-parent">
//       <div className="tile is-child card" style={{ width: 200 }}>
//         <div className="card-image">
//           <figure
//             className="image is-4by3"
//             style={{
//               backgroundImage: `url(${place.image_url})`,
//               backgroundPosition: 'center',
//               backgroundSize: 'cover',
//               backgroundRepeat: 'no-repeat'
//             }}
//           >
//             <a href={place.url}>
//               <div style={{ height: 100 }}></div>
//             </a>
//           </figure>
//         </div>
//         <div className="card-content is-centered">
//           <p className="title is-5">{place.name}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;