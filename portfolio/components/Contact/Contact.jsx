'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../../public/assets/contact.jpg';
import { motion } from 'framer-motion';
import Footer from '../Footer/Footer';


const Contact = () => {
  
    const sentence = "I am available for freelance or full-time positions. Contact me and let's talk.";


    const [typedText, setTypedText] = useState("");
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
    <div id='contact' className='w-full lg:h-screen relative'>
      <div className='max-w-[1140px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl bg-slate-200 shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
              
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
           
              </div>
              <div>
                <h2 className='py-6'>Elizabeth Ortiz</h2>
                <p className= "font-bold">Full Stack Developer</p>
                <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='py-4 text-black sm:max-w-[70%] m-auto'
          >
            {typedText}
          </motion.p>
              </div>
              <div>
                <p className='uppercase font-bold py-6'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/elizabeth-ortiz-rivas/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    
                        <Image
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src='/linkedin.png'
                    width={50}
                    height={50}
                    alt='/'
                    />
           
                  </a>
                  <a
                    href='https://github.com/LizOrtizR'
                    target='_blank'
                    rel='noreferrer'
                  >
                   
                    
                <Image
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src='/github.png'
                    width={50}
                    height={50}
                    alt='/'
                    />
       

                  </a>

                  <a
                  href="mailto:lizzy.ortiz.rivas@gmail.com"
                  target='_blank'
                  rel='noreferrer'
                >
            
                
                <Image
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src='/correo.png'
                    width={50}
                    height={50}
                    alt='/'
                    />
                </a>
                  <Link href='/resume'>
                    <div>
                     
                 <Image
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src='/directorio-telefonico.png'
                    width={50}
                    height={50}
                    alt='/'
                    />

              
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl bg-slate-200 shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
              
                action='https://getform.io/f/beec0b0a-cb36-4de8-89d5-a97851d37a6a'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className=' text-sm font-bold py-2'>Name</label>
                    <input
                      className='border-2 rounded-[2rem] p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='font-bold text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-[2rem] p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='font-bold text-sm py-2'>Email</label>
                  
                  <input
                    className='border-2 rounded-[2rem] p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='font-bold text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-[2rem] p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='font-bold text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='8'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#1a1a1c]'
                  size={30}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
 
  );
};

export default Contact;
