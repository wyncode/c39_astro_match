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
    background: 'transparent'
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
    width: '8em',
    background: '#ffffff'
  }
}));

const Match = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.avatar}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="p" variant="p" className={classes.message}>
            {props.text || 'test'}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default Match;
