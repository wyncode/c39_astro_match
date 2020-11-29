import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { useHistory } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CustomizedDropDown from './MenuDropDown';
import './NavigationBar.css';
import NavLogo from './NavLogo';
import swal from 'sweetalert';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      'linear-gradient(180deg, #181827 53.09%, rgba(24, 24, 39, 1) 77.05%)',
    color: '#dfbc60',
    boxShadow: 'none',
    height: '2.5em'
  },
  menuButton: {
    marginLeft: 'auto',
    color: 'white',
    position: 'relative',
    bottom: '6%'
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const { setCurrentUser, currentUser } = useContext(AppContext);
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true
      });
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      swal(response.data.message, 'You have signed out!', 'success').then(
        () => {
          history.push('/login');
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <div className={classes.root}>
    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <NavLogo height={1} width={1} />
        <h6 className="title">AstroDate</h6>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <CustomizedDropDown
          anchorEl={anchorEl}
          handleClick={handleClick}
          handleClose={handleClose}
          handleSignOut={handleSignOut}
        />
      </Toolbar>
    </AppBar>
  );
}
