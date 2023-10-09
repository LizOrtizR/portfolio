'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projets from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Particle from '../components/Particle/Particle';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const sentence = "I’m focused on building responsive front-end web applications integrating back-end technologies."


  useEffect(() => {
    let currentText = "";
    let index = 0;
    const typingInterval = setInterval(() => {
      currentText += sentence[index];
      setTypedText(currentText);
      index++;
      if (index >= sentence.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  const bounceVariant = {
    initial: { scale: 1 },
    animate: { scale: 1.1, transition: { duration: 0.3 } },
    whileHover: { scale: 1.2, transition: { duration: 0.3 } },
    whileTap: { scale: 0.9 },
  };

  return (
    <div id='home' className='w-full h-screen text-center bg-banner-bg bg-no-repeat bg-center bg-cover'>

      <div className='max-w-[1240px] w-full h-full mx-auto p-2  flex justify-center items-center'>


      <div className="w-full h-screen absolute top-0 left-0">
      <Particle />
        </div>

        <div>
     
          <p className='uppercase text-sm tracking-widest text-gray-300'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-white'>
          Hi, I&#39;m <span className='text-gray-300'> Elizabeth Ortiz</span>

          </h1>
          <h1 className='py-2 text-white'>A Full Stack Web Developer</h1>
       
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='py-4 text-white sm:max-w-[70%] m-auto'
          >
            {typedText}
          </motion.p>
        
          {/* <div className='flex items-center text-white justify-between max-w-[330px] m-auto py-4'>
            <Link
              href='https://www.linkedin.com/in/elizabeth-ortiz-rivas/'
              target='_blank'
              rel='noreferrer'
            >
               <motion.div
                className='rounded-full shadow-lg shadow-gray-300 bg-slate-600 p-6 cursor-pointer'
                variants={bounceVariant}
                whileHover='whileHover'
                whileTap='whileTap'
              >
                <FaLinkedinIn />
              </motion.div>
            </Link>
            <div
              href='https://github.com/LizOrtizR'
              target='_blank'
              rel='noreferrer'
            >
              <motion.div
                className='rounded-full shadow-lg shadow-gray-300 bg-slate-600 p-6 cursor-pointer'
                variants={bounceVariant}
                whileHover='whileHover'
                whileTap='whileTap'
              >
                <FaGithub />
              </motion.div>
            </div>
            <Link href='/#contact'>
  <div>
    <motion.div
      className='rounded-full shadow-lg shadow-gray-300 bg-slate-600 p-6 cursor-pointer'
      variants={bounceVariant}
      whileHover='whileHover'
      whileTap='whileTap'
    >
      <AiOutlineMail />
    </motion.div>
  </div>
</Link>
<Link href='/resume'>
  <div>
    <motion.div
      className='rounded-full shadow-lg shadow-gray-300 p-6 bg-gray-600 cursor-pointer'
      variants={bounceVariant}
      whileHover='whileHover'
      whileTap='whileTap'
    >
      <BsFillPersonLinesFill />
    </motion.div>
  </div>
</Link>
             */}
          {/* </div> */}
        
        </div>
        <FaArrowDown />
      </div>
      <About />
      <Skills />
      <Projets />
      <Contact />
  
    </div>
  );
};

export default Home;
