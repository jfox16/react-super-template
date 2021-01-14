import React from 'react';
import { useStyles } from './styles';

import Logo from 'components/Logo';
import Incrementer from 'components/Incrementer';

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Welcome to the React Super Template! Looks like everything is working.</h1>
      <Logo size="50vw" />
      <p className={classes.bigNumber}></p>
      <Incrementer backgroundColor='#bfe3ff' />
    </div>
  );
}

export default Main;