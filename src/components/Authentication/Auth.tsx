import React, { useEffect, VFC } from 'react';

interface props {
  children: React.ReactNode;
}

const Auth: VFC<props> = ({ children }) => {
  useEffect(() => {
    console.log('認証');
  }, []);

  return <div>{children}</div>;
};

export default Auth;
