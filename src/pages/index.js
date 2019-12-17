import React from 'react';

import '../assets/css/main.css';

import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <Header />
    <Portfolio />
    <About />
    <Footer />
  </div>
);

export default IndexPage;
