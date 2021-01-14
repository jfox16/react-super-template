import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from 'store';
import { INCREMENT } from 'store/counter/types';
import { useStyles } from './styles';



const mapState = (state: RootState) => ({
  counter: state.counter
});

const mapDispatch = {
  increment: (amount: number) => ({ type: INCREMENT, payload: amount})
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type IncrementerProps = PropsFromRedux & {
  backgroundColor: string
}



const Incrementer = (props: IncrementerProps) => {
  const classes = useStyles();

  const increment = () => {
    props.increment(10);
  }

  return (
    <div
      className={classes.root}
      style={{backgroundColor: props.backgroundColor}}
      onClick={increment}
    >
      Go Faster
    </div>
  );
}

export default connector(Incrementer);