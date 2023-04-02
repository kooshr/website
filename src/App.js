import React from 'react';
// components
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-bgblack overflow-hidden scroll-smooth'>
      <Header/>
      <Nav/>
      <About/>
      <Work/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default App;

