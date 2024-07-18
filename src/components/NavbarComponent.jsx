import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">

          <span className="text-white text-2xl font-bold">EventReg</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-white text-lg hover:text-gray-400">Home</a>
          <a href="/about" className="text-white text-lg hover:text-gray-400">About</a>
          <a href="/contact" className="text-white text-lg hover:text-gray-400">Contact</a>
        </div>

        <div className="relative hidden md:block">
          <input
            type="text"
            className="bg-gray-700 text-white rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search..."
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.293 16.293a8 8 0 111.414-1.414l4.337 4.337-1.414 1.414-4.337-4.337z" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="text-white text-lg bg-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-700">Register Event</button>
        </div>

        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
