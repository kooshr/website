import React from 'react';

const Work = () => {
  return (
  <div id="work" className='items-center h-screen'>
    <div className='flex flex-col justify-center'>
    <div className='flex flex-row justify-center w-screen pt-10 pb-6 h-1/6'>
        <div className='text-4xl font-bold text-white'>
          02.&nbsp;Work&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      <div className='h-1 mt-4 rounded-xl w-96 bg-gradient-to-r from-primaryblue to-primaryred' />
      </div>
      <h className='mb-4 -mt-5 text-2xl text-center'>
        Hover over each card to learn more!
      </h>
    </div>
    <div className='flex flex-row justify-center w-screen h-5/6'>
      <div className='flex flex-col w-60 justify-evenly'>
        <div className='mb-20 work-icon group'>
            <h>
              Machine Learning Intern <br/>
            </h>
            <h>
              @Deepsphere.AI
            </h>
            <div className='origin-left -mt-36 ml-80 work-info group-hover:scale-100'>
             <p className='w-56 pl-1 text-sm leading-5 h-60'>
              <ul className='list-disc'>
             <li>Created Machine Learning Use Cases w/ Python APIs, including 
             Linear and Exponential regression that tailored real-world data</li>
             <li>Created Practice Problems for Machine Learning based curricula 
             for Grades 6-12 (Coded in Python) </li>
             <li>Tutored International Students in Python & Coding Algorithms 
             Worked extensively with Google Collabs and Python</li>
             </ul>
              </p>
              <div className='absoulte bg-gradient-to-tr from-primaryblue to-primaryred w-[139px] h-[126px] ml-[251px] mt-[-180px] rounded-lg'/>
              <img src="assets/deepsphere_logo.jpeg" alt="Img not Found. Maybe Reload?" className='w-[139px] h-[126px] ml-[241px] mt-[-140px] rounded-lg'/>
            </div>
        </div>
        <div className='mt-20 work-icon group'>
            <h>
              High School Reading/Math Tutor <br/>
            </h>
            <h>
              @North America Kumon
            </h>
            <div className='origin-left -mt-36 ml-80 work-info group-hover:scale-100'>
            <p className='w-56 text-sm h-60'>
              <ul className='list-disc'>
              <br/><br/><br/>
              <li>Helped K-12 Students with their understanding of math and 
              reading/writing.</li> <br/>
              <li>Spend time grading work and assisting students in schoolwork</li>
              </ul>
              </p>
              <div className='absoulte bg-gradient-to-tr from-primaryblue to-primaryred w-[139px] h-[126px] ml-[251px] mt-[-180px] rounded-lg'/>
              <img src="assets/kumon-logo.jpeg" alt="Img not Found. Maybe Reload?" className='w-[139px] h-[126px] ml-[243px] mt-[-140px] rounded-lg'/>
            </div>
        </div>
      </div>
      <div className='w-1 pb-10 ml-10 mr-10 bg-gradient-to-b from-primaryblue to-primaryred rounded-xl'>
        <div className='w-5 h-5 -ml-2 bg-white rounded-full mt-36 pt-[2px] '>
          <div className='w-4 h-4 ml-[2px] rounded-full bg-bgblack'/>
        </div>
        <div className='w-5 h-5 mt-40 -ml-2 bg-white rounded-full pt-[2px]'>
          <div className='w-4 h-4 ml-[2px] rounded-full bg-bgblack'/>
        </div>
        <div className='w-5 h-5 -ml-2 bg-white rounded-full mt-36 pt-[2px]'>
          <div className='w-4 h-4 ml-[2px] rounded-full bg-bgblack'/>
        </div>
      </div>
      <div className='flex flex-col w-60 justify-evenly'>
        <div className='work-icon group'>
            <h>
              Computer Science Intern <br/>
            </h>
            <h>
              @Cisco Inc.
            </h>
            <div className='ml-[-470px] -mt-36 work-info group-hover:scale-100 origin-right'>
            <p className='w-56 text-sm h-60'>
              <ul className='list-disc'>
                <li>In-depth use of InfluxDB, a time-series, cloud-based, 
            data visualization tool- Implemented with Python Modules and 
            APIs in order to send in live data and present a clear and 
            concise dashboard</li>
            <li>Worked on both Backend and Frontend aspects; organized 
            databases and created the dashboards</li> 
            <li>Collaborated with others and delivered a presentation</li>
            </ul>
              </p>
              <div className='absoulte bg-gradient-to-tr from-primaryblue to-primaryred w-[139px] h-[126px] ml-[251px] mt-[-180px] rounded-lg'/>
              <img src="assets/cisco_logo.jpeg" alt="Img not Found. Maybe Reload?" className='w-[139px] h-[126px] ml-[242px] mt-[-140px] rounded-lg'/>
            </div>
        </div>
      </div>
    </div>
  </div> 
  );
};

export default Work;
