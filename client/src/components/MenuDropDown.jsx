import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import OverLayBG from './Images/Vectors/Matches/MenuOverLay.jpg';

const StyledMenu = withStyles({
  paper: {},
  list: {
    padding: '0em',
    color: 'white',
    height: 'auto',
    width: '15em',
    background: `url(${OverLayBG})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function CustomizedMenus(props) {
  const history = useHistory();
  return (
    <div>
      <StyledMenu
        id="customized-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
        <StyledMenuItem button component={Link} to="/profile">
          <ListItemText primary="Profile Page" />
        </StyledMenuItem>
        <StyledMenuItem button component={Link} to="/inbox">
          <ListItemText primary="Messages" />
        </StyledMenuItem>
        <StyledMenuItem button component={Link} to="/matches">
          <ListItemText primary="Matches" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
