import React from 'react';
import Hero from '../../components/Hero/Hero';
import ContentSection from '../../components/ContentSection/ContentSection';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <ContentSection />
    </main>
  );
};

export default Home;