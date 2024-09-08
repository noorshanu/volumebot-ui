import React from 'react';
import { FaRobot, FaWallet } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="text-white px-4 sm:px-8 py-4 flex justify-between items-center w-full shadow-lg border-b-2 border-red-600">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="flex items-center">
          {/* <FaRobot className="text-2xl text-yellow-400" /> */}
          <img src="logo.png" alt="logo" className="w-[5rem]" />
          <span className="ml-2 font-bold text-xl text-white">TRON Bump Bot</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="border-2 border-red-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md transition-colors duration-300 flex items-center justify-center">
          <FaWallet className="mr-2" />
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
