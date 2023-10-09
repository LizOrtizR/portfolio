import React from 'react';
import Image from 'next/image';
import instagram from '../../public/assets/footer/instagram.png'
import link from '../../public/assets/footer/link.png'
import gmail from '../../public/assets/footer/gmail.png'
import git from '../../public/assets/footer/git.png'
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-10">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h4 className="text-white text-lg font-bold">¡Let's Talk!</h4>
      
          </div>
          <div className="w-full sm:w-auto sm:ml-auto">
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/tu-perfil"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-400 transition-colors duration-300"
                >
                  <motion.div whileHover={{ scale: 1.6 }}>
                  <Image src={link} width='30' height='10px' alt='/' />
                  </motion.div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/e_ortiz_/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-400 transition-colors duration-300"
                >
             <motion.div whileHover={{ scale: 1.6 }}>
  <Image src={instagram} width='30' height='10px' alt='/' />
</motion.div>

                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tu-perfil"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-400 transition-colors duration-300"
                >
                  <motion.div whileHover={{ scale: 1.6 }}>
               <Image src={git} width='30' height='10px' alt='/' />
               </motion.div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:lizzy.ortiz.rivas@gmail.com"
                  className="text-white hover:text-gray-400 transition-colors duration-300"
                >
                   <motion.div whileHover={{ scale: 1.6 }}>
        <Image src={gmail} width='30' height='10px' alt='/' />
        </motion.div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Elizabeth Ortiz </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
