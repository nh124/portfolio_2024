import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import Resume from "../Assets/Nur_Haque_Resume.pdf";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [copy, setCopy] = useState("Copy Email");
  const onClickHandler = () => {
    navigator.clipboard.writeText("nur.haque99@gmail.com");
    setCopy("Copied!");
    setTimeout(() => setCopy("Copy Email"), 1000);
  };

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] bg-opacity-50 text-gray-300 z-20 max-sm:h-[60px]">
      <div className="absolute top-5 left-5">
        <img className="w-[70px] max-sm:w-[40px]" src={logo} alt="logo" />
      </div>
      {/* menu */}
      <ul className="hidden md:flex nav_list">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="companies" smooth={true} duration={500}>
            Companies
          </Link>
        </li>
      </ul>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center nav_list ease-out transition-all duration-500"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="services"
            smooth={true}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="companies"
            smooth={true}
            duration={500}
          >
            Companies
          </Link>
        </li>
      </ul>
      {/* social icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/nur-haque-88b2b9175/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/nh124"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <button
              className="flex justify-between items-center w-full text-gray-300"
              type="button"
              onClick={onClickHandler}
            >
              {copy} <HiOutlineMail size={30} />
            </button>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              download={"Resume"}
              href={Resume}
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
export default Navbar;
