import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineDown } from 'react-icons/ai';

//hover:text-9xl border-2 transition-all duration-300 cursor-pointer

const Header = () => {

  return (
    <div className='h-screen'>
      <div className="flex p-4">
        <div className='absolute'>
          <img src="assets/Logo Gradient.png" alt="Img not Found. Maybe Reload?" className='w-24 h-a'/>
        </div>
        <div className="flex m-auto mr-0 space-x-8
        flex-row w-[800px] h-12 text-white shadow-lg">
          <HeaderNode num = "1" name="About" link='#about'/>
          <HeaderNode num="2" name="Work" link='#work' />
          <HeaderNode num="3" name="Projects" link= '#projects' />
          <HeaderNode num="4" name="Contact" link='#contact' />
          <a href= "assets/Kaushal Ramesh Resume.pdf">
            <div className='text-4xl h-10 w-36 font-extrabold text-center bottom-0 rounded-md 
            bg-gradient-to-r from-primaryblue to-primaryred hover:border-[1px] cursor-pointer'>
              Resume
            </div>
          </a>
        </div>
      </div>
      <div className='right-0 h-44' />
      <div className='w-1/4 h-1 m-auto ml-0 rounded-xl bg-gradient-to-r from-primaryblue to-primaryred' />
      <div className='flex flex-col items-center justify-center p-10 h-2/7 '>
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
      <div className='w-1/4 h-1 m-auto mr-0 rounded-xl bg-gradient-to-r from-primaryblue to-primaryred' />
        <a href='#about' className="flex justify-center align-middle">
          <div className='absolute flex flex-row items-center h-16 m-0 ml-0 mr-0 transition-all origin-center bg-transparent cursor-pointer justify-evenly animate-bounce bottom-4 r-0 w-96 rounded-2xl hover:bg-gradient-to-r hover: from-primaryred to-primaryblue duration-3000'>
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
      <p className='bottom-0 text-white'>
        .0{num}&nbsp; 
      </p>
      <h className='bottom-0 text-4xl'>
          {name}
      </h>
    </div>
  </a>
);



export default Header;
