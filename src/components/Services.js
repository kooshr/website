import React from 'react';

const Services = () => {
  return (
  <div id = 'projects' className='h-screen'>
    <div className='flex flex-row justify-center w-screen pt-10 pb-6 h-1/6'>
        <div className='text-4xl font-bold text-white'>
          03.&nbsp;Projects and More&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      <div className='h-1 mt-4 rounded-xl w-96 bg-gradient-to-r from-primaryblue to-primaryred' />
    </div>
    <div className='flex flex-col items-center w-screen align-middle h-5/6 justify-evenly'>
      <div class="h-1/4 w-5/6 rounded-lg bg-gradient-to-r from-primaryblue  to-primaryred p-1 hover:scale-105 transition-all duration-200">
        <div class=" h-full w-full bg-gray-800 rounded-lg relative group">
          <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-bgblack opacity-40 group-hover:animate-shine" />
            Spotify Downloader
        </div>
      </div>
      <div class="h-1/4 w-5/6 rounded-lg bg-gradient-to-r from-primaryblue  to-primaryred p-1 hover:scale-105 transition-all duration-200">
        <div class=" h-full w-full bg-gray-800 rounded-lg relative group">
          <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-bgblack opacity-40 group-hover:animate-shine" />
            FireTracker
        </div>
      </div>
      <div class="h-1/4 w-5/6 rounded-lg bg-gradient-to-r from-primaryblue  to-primaryred p-1 hover:scale-105 transition-all duration-200">
        <div class=" h-full w-full bg-gray-800 rounded-lg relative group">
          <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-bgblack opacity-40 group-hover:animate-shine" />
            AWS Certified Solutions Architect
        </div>
      </div>
    </div>
  </div>
  );
};

export default Services;
