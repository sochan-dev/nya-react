import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Test from '../components/Test';
const Home: React.FC = () => {
  return (
    <div>
      <Test />
    </div>
  );
};

export default Home;
