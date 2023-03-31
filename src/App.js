import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-bgblack overflow-hidden'>
      <Header />
      <Banner />
      <div className='flex '>
        <Nav />
      </div>
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[4000px]'/>
    </div>
  );
};

export default App;
