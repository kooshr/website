import React from 'react';
import { TfiHome } from "react-icons/tfi";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";

const Nav = () => {
  return (
    <div className="fixed items-center justify-center bottom-14 left-20 h-[320px] w-[40px] flex-column bg-transparent text-white shadow-lg">
      <NavBarIcon icon={<TfiHome size = "20"/>}/>
      <NavBarIcon icon={<GoMarkGithub size="20" />} link="https://github.com/kooshr/" />
      <NavBarIcon icon={<AiFillLinkedin size="20" />} link="https://www.linkedin.com/in/kaushal-ramesh/" />
      <NavBarIcon icon={<ImInstagram size="20" />} link="https://www.instagram.com/kooshr_/"/>
      <div className='m-auto rounded-xl h-48 w-1 bg-gradient-to-t from-primaryblue to-primaryred'/>
  </div>
  );
};

const NavBarIcon = ({icon, link}) => (
  <a href={link}>
    <div className='navbar-icon'>
        {icon}
    </div>
  </a>
);

export default Nav;
