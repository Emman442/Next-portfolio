import React from 'react';
import TypingAnimation from './TypingAnimation';

export default function Hero() {
  return (
    <div className="h-[100vh] w-[100%] bg-[#262626] header flex justify-center border ">
      <div className="container mx-auto w-[90%] ">
        <nav>
          <h1>Emmanuel.</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
          </ul>
        </nav>
        <div className="header-text">
          <img
            src="/Chidera-studio.jpg"
            className="logo object-cover
          "
            alt=""
          />
          <TypingAnimation />
          <div className="flex justify-center items-center text-center">
            <p className="text-[15px] max-w-md leading-relaxed">
              FullStack/Blockchain Developer | Crafting Scalable Solutions with Code &
              Creativity. Passionate About Web3, Open-Source Security, and
              Optimizing Performance. A Solana Enthusiast, Gaming Aficionado,
              and Tech Explorer Who’s Always Up for a Challenge
            </p>
          </div>
          <div className='text-center'>
            <a href=""></a>
          </div>
        </div>
      </div>
    </div>
  );
}
