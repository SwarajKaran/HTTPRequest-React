import React from 'react';
import { PuffLoader } from 'react-spinners';
const Loader = () => {
  const style = { textAlign: 'center' };
  return (
    <div style={style}>
      <PuffLoader color="#230052" />
    </div>
  );
};

export default Loader;
