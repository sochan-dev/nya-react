import React, { useEffect, VFC } from 'react';
import Router from 'next/router';

interface props {
  children: React.ReactNode;
}

const Auth: VFC<props> = ({ children }) => {
  useEffect(() => {
    //認証
    console.log('認証');
    if (true) Router.push('/login');
  }, []);

  return <div>{children}</div>;
};

export default Auth;
