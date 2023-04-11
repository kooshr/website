import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='h-screen'>
      <div className='flex flex-row justify-center w-screen pt-10 pb-6 h-1/6'>
        <div className='text-4xl font-bold text-white '>
          04.&nbsp;Contact Me&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className='h-1 mt-4 rounded-xl w-96 bg-gradient-to-r from-primaryblue to-primaryred' />
      </div>
      <div className='flex items-center justify-center w-screen align-middle h-5/6'>
        <div className='items-center w-1/2 align-middle h-1/2'>
          <p className='text-4xl indent-10'>
            There are a variety of ways to contact me. Feel Free to either 
            <a href='mailto:kaushalramesh1@gmail.com'><h className='font-bold text-transparent bg-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]  hover:bg-gradient-to-r hover: from-blue-700 to-primaryred bg-clip-text '> Email me</h></a>
            , message me through <a href='https://www.linkedin.com/in/kaushal-ramesh/'><h className='font-bold text-transparent bg-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]  hover:bg-gradient-to-r hover: from-blue-700 to-primaryred bg-clip-text '> LinkedIn</h></a>
            , or even message me on <a href='https://www.instagram.com/kooshr_/'><h className='font-bold text-transparent bg-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]  hover:bg-gradient-to-r hover: from-blue-700 to-primaryred bg-clip-text '> Instagram</h></a>. 
            I am always looking for new opportunities and adventures to embark
            on so feel free to reach out to me anytime! <br/>
            <h className='pl-10 font-bold text-transparent bg-gradient-to-r from-blue-700 to-primaryred bg-clip-text'>
            ~Kaushal Ramesh
            </h>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
