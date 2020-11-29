import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [gender, setGender] = useState('string');
  const [loading, setLoading] = useState(false);
  const user = sessionStorage.getItem('user');
  const [recipient, setRecipient] = useState('');

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get(`/api/users/me`, {
          withCredentials: true
        })
        .then((response) => {
          console.log(response.data);
          setCurrentUser(response.data);
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
        setGender,
        loading,
        setLoading,
        recipient,
        setRecipient
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
