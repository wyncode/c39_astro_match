import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Profile from './pages/Profile/Profile';
import { AppContextProvider } from './context/AppContext';
import './App.css';

import Inbox from './pages/Inbox/Inbox';
import Matches from './pages/Matches/Matches';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <AppContextProvider>
      <NavigationBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/matches' component={Matches} />
          <Route exact path='/inbox' component={Inbox} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
