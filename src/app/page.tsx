// src/app/page.tsx
"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import './globals.css';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
};

export default Home;
