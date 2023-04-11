import React from 'react';

const About = () => {
  return (
    <div id = "about" className='flex flex-col items-center justify-center h-screen '>
      <div className='flex flex-col justify-center w-1/2 align-middle h-2/3'>
        <div className='flex flex-row w-96'>
            <div className='text-4xl font-bold text-white align-middle'>
              01.&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          <div className='w-2/3 h-1 mt-4 rounded-xl bg-gradient-to-r from-primaryblue to-primaryred' />
        </div>
        <div className='flex flex-row h-2/3 '>
          <p className='top-0 justify-between w-3/5 mt-10 ml-5 overflow-scroll text-2xl leading-6 h-5/6 indent-7'>
          Hey! I'm <b className='text-transparent transition-all duration-300 cursor-pointer hover:text-3xl bg-clip-text bg-gradient-to-r from-primaryred to-primaryblue'>Kaushal Ramesh </b> 
          (He/Him), and I am currently an
          Undergrad at UC Santa Cruz and an avid computer science geek.
          I enjoy coding simple (and sometimes complex) projects in
          various languages (mainly python and react) and try to implement my 
          hobbies into them, such as sports, mainly basketball, and 
          creating games. Feel free to contact me if you want to get in touch!
          </p>
          <div className='hover:-translate-y-3 cursor-pointer hover:-translate-x-3 transition-all duration-300 w-52 h-[300px] ml-4'>
            <div className=' bg-gradient-to-tr from-primaryblue to-primaryred w-52 h-[277px] mt-[17px] ml-[15px]'/>
            <img src="assets/Kaushal Tree pfp.jpg" alt="Img not Found. Maybe Reload?" className=' mt-[-290px] w-52'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
