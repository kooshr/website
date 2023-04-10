import React from 'react';

const About = () => {
  return (
    <div id = "about" className=' flex flex-col h-screen justify-center items-center'>
      <div className='justify-center align-middle flex flex-col w-1/2 h-2/3'>
        <div className='w-96 flex flex-row'>
            <div className='text-white align-middle font-bold text-4xl'>
              01.&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          <div className='mt-4 rounded-xl h-1 w-2/3 bg-gradient-to-r from-primaryblue to-primaryred' />
        </div>
        <div className='flex flex-row h-2/3 '>
          <p className='h-5/6 overflow-scroll ml-5 mt-10 leading-6 indent-7 text-2xl w-3/5 top-0 justify-between'>
          Hey! I'm <b className='hover:text-3xl cursor-pointer transition-all duration-300 bg-clip-text bg-gradient-to-r from-primaryred to-primaryblue text-transparent'>Kaushal Ramesh </b> 
          (He/Him), and I am currently an
          Undergrad at UC Santa Cruz and an avid computer science geek.
          I enjoy coding simple (and sometimes complex) projects in
          various languages (mainly python and react) and try to implement my 
          hobbies into them, such as sports, mainly basketball, and 
          creating games. Feel free to contact me if you want to get in touch!
          </p>
          <div className='hover:-translate-y-3 cursor-pointer hover:-translate-x-3 transition-all duration-300 w-52 h-[300px] ml-4'>
            <div className=' bg-gradient-to-r from-primaryblue to-primaryred w-52 h-[277px] mt-[17px] ml-[15px]'/>
            <img src="assets/Kaushal Tree pfp.jpg" className=' mt-[-290px] w-52'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
