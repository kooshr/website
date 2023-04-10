import React from 'react';

const About = () => {
  return (
    <div id = "about" className='flex flex-col h-screen justify-center items-center'>
      <div className='w-96 flex flex-row justify-center'>
        <div className='text-white font-bold text-4xl'>
          01.&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      <div className='mt-4 rounded-xl h-1 w-2/3 bg-gradient-to-r from-primaryblue to-primaryred' />
      </div>
      <div className='flex flex-row w-2/3 h-72 items-center'>
      <p className='h-[300px] ml-5 mt-10 leading-6 indent-7 text-2xl w-3/5 align-middle justify-between'>
      Hey! I'm <b className='bg-clip-text bg-gradient-to-r from-primaryred to-primaryblue text-transparent'>Kaushal Ramesh </b> 
      (He/Him), and I am currently an
      Undergrad at UC Santa Cruz and an avid computer science geek.
      I enjoy coding simple (and sometimes complex) projects in
      various languages and try to implement my hobbies into them, 
      such as sports, mainly basketball, and creating games. 
      Feel free to contact me if you want to get in touch!
      </p>
      <div>
      <div className='absoulte bg-gradient-to-r from-primaryblue to-primaryred w-52 h-[277px] mt-[17px] ml-[70px]'/>
      <img src="assets/Kaushal Tree pfp.jpg" className='absolute mt-[-290px] ml-[55px] w-52'/>
      </div>
      </div>
    </div>
  );
};

export default About;
