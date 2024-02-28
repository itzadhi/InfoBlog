import React, { Fragment } from 'react';
import spinner from '../assets/Spinner-1s-101px.svg';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '20px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Spinner;
