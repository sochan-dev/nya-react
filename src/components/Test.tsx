import React from 'react';

const Test: React.FC = () => {
  type f = {
    a: String;
  };

  const b: f = {
    a: 'ff',
  };

  console.log('testLog');
  return <div>Test!!!!!!</div>;
};
export default Test;
