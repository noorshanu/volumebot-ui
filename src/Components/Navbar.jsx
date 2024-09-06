import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-red-900 to-black text-white px-24 py-2 flex justify-between items-center ">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Icon */}
        <button className="text-white text-2xl">
          <i className="fas fa-bars"></i>
        </button>
        {/* Logo */}
        <div className="flex items-center">
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Tron-logo-2017.svg"
            alt="Logo"
            className="w-6 h-6"
          /> */}
          <span className="ml-2 font-semibold text-white">TRON VolumeBot</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Blockchain Dropdown */}
        {/* <div className="bg-black text-white flex items-center rounded-md px-3 py-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Tron-logo-2017.svg"
            alt="TRON Logo"
            className="w-4 h-4"
          />
          <span className="ml-2">TRON</span>
          <i className="fas fa-chevron-down ml-2"></i>
        </div> */}

        {/* Language Dropdown */}
        {/* <div className="bg-black text-white flex items-center rounded-md px-3 py-1">
          <span className="mr-2">Language</span>
          <i className="fas fa-globe"></i>
          <span className="ml-2">EN</span>
        </div> */}

        {/* Select Wallet Button */}
        <button className="bg-red-600 text-white px-4 py-1 rounded-md">
          Connect Wallet
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
