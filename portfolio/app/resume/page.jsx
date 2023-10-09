import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn,FaInstagram } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Elizabeth | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Maria Elizabeth Ortiz</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/elizabeth-ortiz-rivas/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/LizOrtizR'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://www.instagram.com/e_ortiz_/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> Wordpress
          </p>
          
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            PaisaPues.com
            </span>
            <span className='px-2'>|</span>Medellin, Colombia
          </p>
          <p className='py-1 italic'>Front End Web Developer & Web Master (2018-2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
            I developed and designed a complete website using WordPress, which involved theme selection, CSS customization, integration of essential plugins, and optimization for SEO. 
            </li>
            <li>
            I implemented and managed digital marketing strategies, including setting up and optimizing Google Ads campaigns to enhance visibility and conversion rates. 
            </li>
            <li>
            I utilized Google Analytics to analyze website traffic and user behavior, identifying improvement opportunities and making data-driven decisions. 
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Ploutos Media LLC 
            </span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'>Data Entry, Gathering and Analyzing Data(2022 - 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            I coordinated the collection and input of data, ensuring accuracy and consistency throughout the process. I analyzed daily sales data using spreadsheets. Additionally, I organized and cataloged digital files, facilitating efficient search and retrieval of documents.
            </li>
            
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Cafe Zorba</span>
            <span className='px-2'>|</span>Medellin, Colombia
          </p>
          <p className='py-1 italic'>Kitchen Supervisor (2015 – 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            I trained and motivated kitchen staff, ensuring a collaborative and professional work environment, and fostering continuous improvement through ongoing training and feedback.
            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
