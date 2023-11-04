"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";
import gmail from "../../public/assets/footer/gmail.png";
import git from "../../public/assets/footer/git.png";
import link from "../../public/assets/footer/link.png";
import { motion } from "framer-motion";
// import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#101011");
  const [linkColor, setLinkColor] = useState("#edeff3");
  const [theme, setTheme] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleThemeChange = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
    document.body.setAttribute("data-theme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300" +
            (theme ? " dark" : "")
          : "fixed w-full h-20 z-[100]" + (theme ? " dark" : "")
      }>
      <div className="flex justify-center items-center w-full h-full px-2 2xl:px-16">
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500 text-white"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }>
          <div>
            <div className="flex w-full items-center justify-between">
              {/* <Link href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                  />
                </a>
              </Link> */}
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
                <motion.div whileHover={{ scale: 1.6 }}>
                  <AiOutlineClose />
                </motion.div>
              </div>
            </div>
            <div className="border-b border-gray-300 my-4  text-white">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/elizabeth-ortiz-rivas/"
                  target="_blank"
                  rel="noreferrer">
                  <div className="rounded-[1rem] shadow-lg  shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <motion.div whileHover={{ scale: 1.6 }}>
                      <Image src={link} width="30" height="10px" alt="/" />
                    </motion.div>
                  </div>
                </a>
                <a
                  href="https://github.com/LizOrtizR"
                  target="_blank"
                  rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <motion.div whileHover={{ scale: 1.6 }}>
                      <Image src={git} width="30" height="10px" alt="/" />
                    </motion.div>
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <motion.div whileHover={{ scale: 1.6 }}>
                      <Image src={gmail} width="30" height="10px" alt="/" />
                    </motion.div>
                  </div>
                </Link>
                <Link href="/resume"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
