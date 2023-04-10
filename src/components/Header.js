import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineDown } from 'react-icons/ai';

//hover:text-9xl border-2 transition-all duration-300 cursor-pointer

const Header = () => {

  return (
    <div className='h-screen'>
      <div className="flex p-4">
        <div className='absolute'>
          <img src="assets/Logo Gradient.png" className='h-a w-24'/>
        </div>
        <div className="flex m-auto mr-0 space-x-8
        flex-row w-[800px] h-12 text-white shadow-lg">
          <HeaderNode num = "1" name="About" link='#about'/>
          <HeaderNode num="2" name="Work" link='#work' />
          <HeaderNode num="3" name="Projects" />
          <HeaderNode num="4" name="Contact" />
          <a href= "assets/Kaushal Ramesh Resume.pdf">
            <div className='text-4xl h-10 w-36 font-extrabold text-center bottom-0 rounded-md 
            bg-gradient-to-r from-primaryblue to-primaryred hover:border-[1px] cursor-pointer'>
              Resume
            </div>
          </a>
        </div>
      </div>
      <div className='right-0 h-44' />
      <div className='m-auto ml-0 rounded-xl h-1 w-1/4 bg-gradient-to-r from-primaryblue to-primaryred' />
      <div className='flex flex-col justify-center items-center h-2/7 p-10 '>
        <p className='text-3xl w-[920px] pb-0 text-left text-white h-10 
        hover:bg-clip-text hover:bg-gradient-to-r from-primaryred to-primaryblue
        hover:text-transparent hover:text-4xl
        transition-all duration-300 cursor-pointer
        '>
          Hey! I'm
        </p>
        <h id = "text" className='relative text-8xl w-[1000px] text-center text-transparent
        bg-clip-text bg-gradient-to-r from-primaryred to-primaryblue'>
          <TypeAnimation
            sequence={[
              'Kaushal Ramesh', 2000,
              'A Programmer', 2000,
              'A Comp Sci Student', 2000,
              () => {
                console.log('Sequence completed'); // Place optional callbacks anywhere in the array
              }
            ]}
            wrapper="span"
            speed={1}
            deletionSpeed={1}
            cursor={true}
            repeat={Infinity}
            style={{display: 'inline-block' }}
          />
        </h>
        <p className=' text-3xl w-[920px] text-right text-white h-10
        hover:bg-clip-text hover:bg-gradient-to-r from-primaryred to-primaryblue
        hover:text-transparent hover:text-4xl
        transition-all duration-300 cursor-pointer origin-center
        '>
          Scroll Down to Learn More about Me!
        </p>
      
      </div>
      <div className='m-auto mr-0 rounded-xl h-1 w-1/4 bg-gradient-to-r from-primaryblue to-primaryred' />
        <a href='#about' className="flex justify-center align-middle">
          <div className='flex bg-transparent justify-evenly items-center 
          flex-row animate-bounce bottom-4 absolute ml-0 mr-0 m-0 r-0
          h-16 w-96 rounded-2xl hover:bg-gradient-to-r
          hover: from-primaryred hover: to-primaryblue 
          transition-all duration-3000 cursor-pointer origin-center'>
            <AiOutlineDown size={36}/>
            <AiOutlineDown size={36} />
            <AiOutlineDown size={36} />
          </div>
        </a>
      </div>
  );
};



const HeaderNode = ({num, name, link}) => (
  <a href={link}>
    <div className='header'>
      <p className='text-white bottom-0'>
        .0{num}&nbsp; 
      </p>
      <h className='text-4xl bottom-0'>
          {name}
      </h>
    </div>
  </a>
);



export default Header;
