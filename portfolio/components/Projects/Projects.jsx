import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import paisapues from '../../public/assets/projects/paisapues.png';
import lobbyLair from '../../public/assets/projects/LobbyLair.png'
import netflixImg from '../../public/assets/projects/netflix.jpg'
import twitchImg from '../../public/assets/projects/twitch.jpg'
import ProjectItem from '../ProjectItem/ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full bg-gray-300'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Paisapues.com'
            backgroundImg={paisapues}
            projectUrl='https://paisapues.com/'
            tech='Wordpress'
          />
          <ProjectItem
            title='LobbyLair'
            backgroundImg={lobbyLair}
            projectUrl='https://lobbylair.vercel.app/'
            tech='React JS, Tailwind CSS, Redux, Firebase, AWS, sequelize, Node JS, Express JS, PostgreSQL'

          />
          {/* <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
