import React, { useState, useEffect } from "react";
import Logo from '../assets/shape-x1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between space-x-8 flex-wrap bg-white shadow-lg p-6 ${
        isScrolled ? "fixed top-0 left-0 w-full z-10" : ""
      }`}
    >
      <div className="flex items-center flex-shrink-0 mr-[200px] aboslute ml-5">
        <img
          src={Logo}
          alt='logo'
          width={100}
          height={100}
          className='ml-[150px]'
        />
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full ${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-lg lg:flex-grow">
          <a href="/">
            <h1 className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-500  mr-4">
              Home
            </h1>
          </a>
          <a href="/about">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500  mr-4">
              About
            </h1>
          </a>
          <a href="/callforpapers">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500  mr-4">
              Call for Papers
            </h1>
          </a>
          <a href="/speakers">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500 mr-4">
              Speakers
            </h1>
          </a>
          <a href="/schedule">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500  mr-4">
              Schedule
            </h1>
          </a>
          <a href="/volunteer">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500  mr-4">
              Volunteer
            </h1>
          </a>
          <a href="/archives">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500  mr-4">
              Archives
            </h1>
          </a>
          <a href="/code-of-conduct">
            <h1 className="block mt-4 lg:inline-block lg:mt-0  text-black hover:text-red-500 ">
              Code of Conduct
            </h1>
          </a>
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
