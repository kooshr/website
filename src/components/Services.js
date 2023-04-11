import React from 'react';

const Services = () => {
  return (
  <div id = 'projects' className='h-screen'>
    <div className='flex flex-row justify-center w-screen pt-10 pb-6 h-1/6'>
        <div className='text-4xl font-bold text-white '>
          03.&nbsp;Projects and More&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      <div className='h-1 mt-4 rounded-xl w-96 bg-gradient-to-r from-primaryblue to-primaryred' />
    <h className='absolute mt-16 text-2xl font-bold'>
      Click on each image to access the link!
    </h>
    </div>
    <div className='flex flex-col items-center w-screen align-middle h-5/6 justify-evenly'>
      <div class="h-1/4 w-5/6 rounded-lg bg-gradient-to-r from-primaryblue  to-primaryred p-1 hover:scale-105 hover:cursor-pointer transition-all duration-200">
        <div class=" h-full w-full bg-gray-800 rounded-lg relative group">
          <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-bgblack opacity-40 group-hover:animate-shine" />
            <h className='pl-5 mt-5 text-4xl font-bold text-center text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] bg-gradient-to-r from-primaryblue to-primaryred bg-clip-text '>
            Spotify Downloader
            </h>
            <ul className='pl-10 leading-6 list-disc'>
              <li>
              One of my favorite projects I made was a music downloader
              </li>
              <li>
              Using python and spotDL APIs as well as tkinter for a GUI, 
              I was able to make an application that dynamically downloads <br/> 
              music in an mp3 file.
              </li>
              <li>
                We can download it from all the major sources, 
                ie YouTube links, Spotify playlist links, or SoundCloud 
                link
              </li>
            </ul>
            <a href='https://github.com/kooshr/spotifydownloader'>
              <div className='absoulte bg-gradient-to-tr from-primaryblue to-primaryred w-[108px] h-[105px] ml-[1008px] mt-[-110px] rounded-lg'/>
              <img src='assets/spotify_logo.png' alt="Img not Found. Maybe Reload?" className='w-[108px] h-[105px] ml-[1000px] mt-[-115px] rounded-lg'/>
            </a>
        </div>
      </div>
      <div class="h-1/4 w-5/6 rounded-lg bg-gradient-to-r from-primaryblue  to-primaryred p-1 hover:scale-105 transition-all duration-200">
        <div class=" h-full w-full bg-gray-800 rounded-lg relative group">
          <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-bgblack opacity-40 group-hover:animate-shine" />
          <h className='pl-5 mt-5 text-4xl font-bold text-center text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] bg-gradient-to-r from-primaryblue to-primaryred bg-clip-text '>
            FireTracker
            </h>
            <ul className='pl-10 leading-6 list-disc'>
            <li>
              Built this project for Digitize II Hackathon and won 1st place
              </li>
              <li>
              Uses Arduino and C++ in order to track fires and send the data to a website
              </li>
              <li>
              We made a basic website using HTML and CSS that displays the 
              fire tracking data it collects, <br/> which includes the time of 
              fire, the location, and the intensity of the fire.
              </li>
            </ul>
            <a href='https://github.com/kooshr/Fire-Tracker'>
              <div className='absoulte bg-gradient-to-tr from-primaryblue to-primaryred w-[108px] h-[105px] ml-[1008px] mt-[-110px] rounded-lg'/>
              <img src='assets/firetracker_logo.png' alt="Img not Found. Maybe Reload?" className='w-[108px] h-[105px] ml-[1000px] mt-[-115px] rounded-lg'/>
            </a>
        </div>
      </div>
      <div class="h-1/4 w-5/6 rounded-lg bg-gradient-to-r from-primaryblue  to-primaryred p-1 hover:scale-105 transition-all duration-200">
        <div class=" h-full w-full bg-gray-800 rounded-lg relative group">
          <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-bgblack opacity-40 group-hover:animate-shine" />
          <h className='pl-5 mt-5 text-4xl font-bold text-center text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] bg-gradient-to-r from-primaryblue to-primaryred bg-clip-text '>
            AWS Certified Solutions Architect
            </h>
            <ul className='pl-10 list-disc'>
            <li>
              I was able to study for this and obtained a comprehensive understanding of AWS services and technologies.
              </li>
              <li>
              I achieved this certification Dec 2022
              </li>
            </ul>
            <a href='https://www.credly.com/badges/5ae7035a-93af-40db-896e-32232d65bf6d/public_url'>
              <div className='absoulte bg-gradient-to-tr from-primaryblue to-primaryred w-[108px] h-[105px] ml-[1008px] mt-[-80px] rounded-lg'/>
              <div className='w-[108px] h-[105px] ml-[1000px] mt-[-115px] rounded-lg bg-bgblack'>
                <img src='assets/aws_credly.png' alt="Img not Found. Maybe Reload?" className='w-[108px] h-[105px] rounded-lg'/>
              </div>
            </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Services;
