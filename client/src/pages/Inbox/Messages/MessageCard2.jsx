import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    //   border: 'solid 1px black',
    width: '25em'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '5em',
    height: '5em',
    borderRadius: '50%'
  },
  message: {
    border: 'solid 1px black',
    padding: '1.75rem 0.5rem',
    borderRadius: '4px',
    width: '8em'
  }
  // controls: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   paddingLeft: theme.spacing(1),
  //   paddingBottom: theme.spacing(1),
  // }
}));

const MessageCard2 = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="p" variant="p" className={classes.message}>
            {props.text || 'test'}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://images.pexels.com/photos/5331983/pexels-photo-5331983.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        title="Live from space album cover"
      />
    </Card>
  );
};

export default MessageCard2;
