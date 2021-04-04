import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from 'styles/Home.module.css';
import Calc from '../../components/Calc';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Programmable-Calculator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
      </Head>
      <div className="styles.container">
        <Calc />
      </div>
    </>
  );
};

export default Home;
