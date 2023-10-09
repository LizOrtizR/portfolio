import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/assets/108762811.png'
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollY } = useScroll();
  const imageVariants = {
    hidden: { opacity: 0, scale: 2.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const opacity = useTransform(scrollY, [0, 600], [0, 1]);
  const scale = useTransform(scrollY, [0, 800], [0.8, 1]);

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  return (
    <div id='about' className=' w-full md:h-screen p-2 flex items-center py-16 bg-gray-300'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}

          >
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
              About
            </p>
          </motion.div>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-black'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. I'm a full stack developer with a passion for building web applications. I began my journey in the world of web development back in 2020, starting with WordPress. Since then, I've been continuously expanding my skills and knowledge to become a well-rounded developer.
          </p>
          <p className='py-2 text-black'>
            As a full stack developer, I am comfortable working with both front-end and back-end technologies. On the front-end, I have expertise in HTML, CSS, and JavaScript, enabling me to create visually appealing and responsive user interfaces. I also have experience with modern front-end frameworks such as React.js, which allows me to build interactive and dynamic web applications.
            On the back-end, I have a solid foundation in server-side programming languages such as Node.js. I am proficient in working with databases, including MySQL, and I have experience in designing and implementing RESTful APIs to facilitate smooth communication between the front-end and back-end.
          </p>
          {/* <Link href='/projects'>
            <p className='py-5 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <motion.div
          className='w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'
          variants={imageVariants}
          initial='hidden'
          animate='visible'
          style={{ opacity, scale }}
        >
          <Link href='https://www.linkedin.com/in/elizabeth-ortiz-rivas/'>
            <Image src={AboutImg} className='rounded-xl' alt='/' />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

