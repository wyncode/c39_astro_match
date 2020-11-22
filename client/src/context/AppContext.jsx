import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
<<<<<<< HEAD
=======
  // const [userData, setUserData] = useState('')
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
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
