import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';


const HomePage = () => {
  return (
    <>
      <Head>
        <title>Lorenzo Regalzi - Sviluppatore Frontend and Backend | Next.js, React, Node.js</title>
        <meta name="description" content="I am Lorenzo Regalzi, a frontend and backend developer specializing in Next.js, React, and Node.js. Discover my services and contact me to bring your web project to life." />
        <meta name="keywords" content="Lorenzo Regalzi, frontend developer, backend developer, Next.js, React, Node.js, web projects" />
        <meta name="author" content="Lorenzo Regalzi" />
        <link rel="canonical" href="https://www.lorenzoregalzi.com" />
      </Head>
      <Navbar/>
      <Hero>
        <div className='flex flex-col'>
          <h1 className='text-center h1'>Your Vision, Coded 🚀</h1>
          <h3 className='text-center h3'>I turn brilliant ideas into real solutions.</h3>
        </div>
      </Hero>
      <Hero>
        <div className='card-container'>
          <div className='card'>
            <h3 className='h3'>Crafting Digital Experiences</h3>
            <p className='paragraph'>I transform brilliant ideas into real solutions. As a passionate Front End Developer 💻 skilled in modern web technologies like Angular, React, Vue, and Next.js, I bring a strong foundation to my work, currently pursuing a Bachelor`s Degree in Modern Computer Science 🎓.
              At MyFamily, I played a key role in developing Techla, a mobile app 📱 that improved communication with CNC engraving machines, significantly boosting revenue. My experience at AITEM involved enhancing LAIKA, an AI-driven web application 🤖 for veterinarians, while my freelance work focused on modernizing outdated systems to elevate user engagement.
              My mission is to create intuitive, responsive web applications 🌟 that enhance user experiences, driven by the belief that technology should simplify lives and improve interactions. Committed to continuous learning 📚 in the ever-evolving landscape of software development, I aim to collaborate with innovative teams that push the boundaries of technology and create meaningful impact.
            </p>            
          </div>
        </div>
      </Hero>
      <Hero>
        <div className='flex flex-col justify-evenly items-center h-full'>
          <h3 className='h3 text-center flex'>Contact me</h3>
          <div className='flex-col sm:flex-row flex justify-around'>
              <a className='contact flex justify-center items-center' href="mailto:lorenzo.regalzi@gmail.com">
                <img src="./google-svg.svg" alt="Gmail" className='icon' />
              </a>
              <a className='contact flex justify-center items-center' href="https://www.linkedin.com/in/lorenzo-regalzi/" target="_blank">
                <img src="./linkedin-svg.svg" alt="Linkedin" className='icon' />
              </a>
              <a className='contact flex justify-center items-center' href="https://github.com/LorenzoRegalzi" target="_blank">
                <img src="./github-svg.svg" alt="Github" className='icon' />
              </a>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default HomePage;
