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
