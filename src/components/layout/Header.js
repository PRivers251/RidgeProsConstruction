"use client"

import Image from "next/image";
import { useState } from 'react';

export default function Header(){
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };  
  
  return (
    <header className="bg-white h-24 flex items-center justify-center">
    <nav className="w-full bg-transparent p-4">
       <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
        <Image 
        href='/'
        src='/images/storm-shield-logo.png'
        width={110}
        height={100}
        />
        </div>
        <div className="navMenu">
            <a href="/" className="navMenuItem">Home</a>
            <a href="/about" className="navMenuItem">About</a>
            <a href="/services" className="navMenuItem">Services</a>
            <a href="#" className="headerCTAButton">Call Now!</a>
        </div>

        {/*Hamburger Menue*/}
        <div className="md:hidden">
          <button onClick={toggleMenu} id="menu-toggle" className={`hamburgerMenu ${isOpen ? "open" : ""}`} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        {/*Mobile NavMenu*/}
        <div className={`${isOpen ? 'visible' : 'hide'} mobileNavMenu`}>
          <a href="/" className="mobileNavItem">Home</a>
          <a href="/about" className="mobileNavItem">About</a>
          <a href="/services" className="mobileNavItem">Services</a>
        </div>
        </div>
      </nav>
    </header>
    )
}

