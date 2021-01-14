import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useStyles } from './styles';

import { RootState } from 'store';
import LogoSvg from 'images/logo.svg';



const mapState = (state: RootState) => ({
  counter: state.counter
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type LogoProps = PropsFromRedux & {
  size: number | string
}



const Logo = ({ size, counter }: LogoProps) => {
  const [ spinDuration, setSpinDuration ] = useState(100);
  const classes = useStyles();

  useEffect(() => {
    setSpinDuration(100 / counter);
  }, [ counter ]);

  return (
    <div className={classes.root} style={{
      width: size,
      animationDuration: spinDuration + 's',
    }}>
      <img src={LogoSvg} alt="A funny spinning thing" />
    </div>
  );
}

export default connector(Logo);