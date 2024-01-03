import React from 'react';

const Color = ({ numero }) => {
  let sinColor = 'white';

  if (numero >= 0 && numero <= 49) {
    sinColor = 'red';
  } else if (numero >= 50 && numero <= 59) {
    sinColor = 'yellow';
  } else if (numero >= 60 && numero <= 100) {
    sinColor = 'green';
  }

  const style = {
    background: sinColor,
    color: 'black',
  };

  return <span style={style}>{numero}</span>;
};

export default Color;
