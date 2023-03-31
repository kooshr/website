import React from 'react';
import { TfiHome } from "react-icons/tfi";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";

const Nav = () => {
  return (
    <div className="fixed items-center justify-center bottom-14 left-20 h-[320px] w-[40px] flex-column bg-transparent text-white shadow-lg">
      <NavBarIcon 
        icon={<TfiHome size = "20"/>} 
        text = "Home"
      />
      <NavBarIcon 
        icon={<GoMarkGithub size="20" />} 
        link="https://github.com/kooshr/"
        text="Github! ⌨️"
      />
      <NavBarIcon 
        icon={<AiFillLinkedin size="20" />} 
        link="https://www.linkedin.com/in/kaushal-ramesh/"
        text="Linkedin! ✉️" 
      />
      <NavBarIcon 
        icon={<ImInstagram size="20" />} 
        link="https://www.instagram.com/kooshr_/"
        text="Instagram! 📸"
      />
      
      <div className='m-auto rounded-xl h-48 w-1 bg-gradient-to-t from-primaryblue to-primaryred'/>
  </div>
  );
};

const NavBarIcon = ({icon, link, text}) => (
  <a href={link}>
    <div className='navbar-icon group'>
        {icon}
        <span className='navbar-tooltip group-hover:scale-100'>
          {text}
        </span>
    </div>
  </a>
);

export default Nav;
