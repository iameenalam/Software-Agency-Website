import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog from './components/UI/Blog';
import Testimonial from './components/UI/Testimonial';
import Newsletter from './components/UI/Newsletter';
import Footer from './components/Footer/Footer';
import Projects from './components/UI/Projects';
import ContactUs from './components/UI/ContactUs';

function App() {
  const [showContactUs, setShowContactUs] = useState(false);

  const handlePlaceOrderClick = () => {
    setShowContactUs(true);
  };

  return (
    <>
      <Header onPlaceOrderClick={handlePlaceOrderClick} />
      {showContactUs ? (
        <>
          <ContactUs />
          <Newsletter />
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <Counter />
          <Services />
          <About />
          <Team />
          <Projects />
          <Blog />
          <Testimonial />
          <Newsletter />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
