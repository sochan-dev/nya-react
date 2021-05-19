import { NextPage } from 'next';
import React, { VFC } from 'react';
import { LoginTemplate } from '../components/templates';
export const getStaticProps = async () => {
  return { props: {} };
};

const login: VFC = () => {
  return (
    <>
      <LoginTemplate />
    </>
  );
};

export default login;
