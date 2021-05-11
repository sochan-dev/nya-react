import React from 'react';
import Styles from 'styles/sass/test.module.scss';

const Test: React.FC = () => {
  type f = {
    a: String;
  };

  const s: f = {
    a: 'ff',
  };

  console.log('testLog');
  return (
    <div className={Styles.test}>
      <p>success!!!!!!</p>
    </div>
  );
};
export default Test;
