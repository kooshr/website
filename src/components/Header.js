import React from 'react';

const Header = () => {
  return (
    <div className='h-screen'>
      <div className="flex justify-between p-4">
        <div>
          Top Left Icon
        </div>
        <div className="flex justify-end space-x-8
        flex-row w-[800px] text-white shadow-lg">
          <HeaderNode num = "1" name="About"/>
          <HeaderNode num="2" name="Work" />
          <HeaderNode num="3" name="Projects" />
          <HeaderNode num="4" name="Contact" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center h-5/6 p-10 '>
        <p className='text-3xl w-[920px] pb-0 text-left text-white h-10 
        hover:bg-clip-text hover:bg-gradient-to-r from-primaryred to-primaryblue
        hover:text-transparent hover:text-4xl
        transition-all duration-300 cursor-pointer
        '>
          Hey! My name is
        </p>
        <h className='relative text-8xl w-[1000px] text-center text-transparent h-32
        bg-clip-text bg-gradient-to-r from-primaryred to-primaryblue
        hover:text-9xl border-2 transition-all duration-300 cursor-pointer'>
          KAUSHAL RAMESH
        </h>
        <div className='h-10 border-2'>
          Wow
        </div>
        <p className='border-2 text-3xl w-[920px] text-center text-white h-10
        hover:bg-clip-text hover:bg-gradient-to-r from-primaryred to-primaryblue
        hover:text-transparent hover:text-4xl
        transition-all duration-300 cursor-pointer origin-center
        '>
          Scroll Down to Learn More about Me!
        </p>
      </div>
    </div>
  );
};

const HeaderNode = ({num, name, link}) => (
  <a href={link}>
    <div className='header'>
      <p className='text-white bottom-0'>
          .0{num}
      </p>
      <h className='text-4xl bottom-0'>
          {name}
      </h>
    </div>
  </a>
);

export default Header;
