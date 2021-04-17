import React from 'react';
import { NextPage } from 'next';
import Calc from '../../components/Calc';
import { Layout } from '../../components/layout';

const Home: NextPage = () => {
  return (
    <Layout title="Please give it a try!" header="Programmable-Calculator">
      <div className="styles.container">
        <Calc />
      </div>
    </Layout>
  );
};

export default Home;
